import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const clientIp = req.headers.get("x-forwarded-for") || "unknown";
    
    // 1. Rate Limiting Check (Max 5 per hour)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    
    const { data: recentRequests, error: rateLimitError } = await supabaseClient
      .from("rate_limits")
      .select("id")
      .eq("ip", clientIp)
      .eq("endpoint", "submit-booking")
      .gte("window_start", oneHourAgo);

    if (rateLimitError) throw rateLimitError;

    if (recentRequests && recentRequests.length >= 5) {
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 2. Parse Request
    const { name, phone, service_type, preferred_date, preferred_time, address } = await req.json();

    if (!name || !phone || !service_type || !preferred_date || !preferred_time || !address) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 3. Insert Booking
    const { data: booking, error: insertError } = await supabaseClient
      .from("bookings")
      .insert([
        { name, phone, service_type, preferred_date, preferred_time, address }
      ])
      .select()
      .single();

    if (insertError) throw insertError;

    // 4. Log Rate Limit
    await supabaseClient
      .from("rate_limits")
      .insert([{ ip: clientIp, endpoint: "submit-booking", window_start: new Date().toISOString() }]);

    // 5. Send Email via Resend (if configured)
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "ProTrades <noreply@protrades.co.ke>",
          to: ["admin@protrades.co.ke"], // Replace with actual admin email
          subject: `New Booking Request from ${name}`,
          html: `<p><strong>Name:</strong> ${name}</p>
                 <p><strong>Phone:</strong> ${phone}</p>
                 <p><strong>Service:</strong> ${service_type}</p>
                 <p><strong>Date:</strong> ${preferred_date}</p>
                 <p><strong>Time:</strong> ${preferred_time}</p>
                 <p><strong>Address:</strong> ${address}</p>`,
        }),
      });
    }

    return new Response(
      JSON.stringify({ success: true, data: booking }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
