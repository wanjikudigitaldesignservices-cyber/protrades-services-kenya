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
      .eq("endpoint", "submit-quote")
      .gte("window_start", oneHourAgo);

    if (rateLimitError) throw rateLimitError;

    if (recentRequests && recentRequests.length >= 5) {
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 2. Parse Request
    const { name, phone, email, service_type, description, urgency, location } = await req.json();

    if (!name || !phone || !service_type || !description || !urgency || !location) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 3. Insert Quote
    const { data: quote, error: insertError } = await supabaseClient
      .from("quote_requests")
      .insert([
        { name, phone, email, service_type, description, urgency, location }
      ])
      .select()
      .single();

    if (insertError) throw insertError;

    // 4. Log Rate Limit
    await supabaseClient
      .from("rate_limits")
      .insert([{ ip: clientIp, endpoint: "submit-quote", window_start: new Date().toISOString() }]);

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
          subject: `New Quote Request from ${name} (${urgency})`,
          html: `<p><strong>Name:</strong> ${name}</p>
                 <p><strong>Phone:</strong> ${phone}</p>
                 <p><strong>Service:</strong> ${service_type}</p>
                 <p><strong>Urgency:</strong> ${urgency}</p>
                 <p><strong>Location:</strong> ${location}</p>
                 <p><strong>Description:</strong> ${description}</p>`,
        }),
      });
    }

    return new Response(
      JSON.stringify({ success: true, data: quote }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
