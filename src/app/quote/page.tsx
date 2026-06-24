"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(9, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address.").optional().or(z.literal("")),
  service_type: z.enum(["plumbing", "electrical", "both", "borehole", "solar"], { errorMap: () => ({ message: "Please select a service type." }) }),
  urgency: z.enum(["routine", "this_week", "emergency"], { errorMap: () => ({ message: "Please select an urgency level." }) }),
  location: z.string().min(3, "Please enter your city/neighborhood."),
  description: z.string().min(10, "Please describe your issue in a bit more detail."),
});

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      location: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // For production, this hits the Supabase Edge Function:
      // const response = await fetch("https://[PROJECT_REF].supabase.co/functions/v1/submit-quote", { ... })
      
      // Simulating network request for local dev
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form Values:", values);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    const values = form.getValues();
    const whatsappMessage = `Hi ProTrades! I just requested a quote via your website. \n\nName: ${values.name}\nService: ${values.service_type}\nUrgency: ${values.urgency}\nLocation: ${values.location}\n\nDetails: ${values.description}`;
    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(whatsappMessage)}`;

    return (
      <main className="flex-1 flex items-center justify-center py-20 bg-muted/30">
        <div className="container max-w-lg mx-auto px-4 text-center space-y-6 bg-card p-10 rounded-xl shadow-sm border">
          <div className="mx-auto w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="h-10 w-10 text-[#25D366]" />
          </div>
          <h1 className="font-heading text-3xl font-bold">Quote Request Sent!</h1>
          <p className="text-muted-foreground text-lg">
            We've received your request. For the fastest response, you can forward this directly to our dispatch team on WhatsApp.
          </p>
          <div className="pt-6">
            <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Continue to WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-background py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Request a Free Quote</h1>
          <p className="text-muted-foreground text-lg">
            Tell us about your plumbing or electrical project. We'll get back to you with an accurate estimate.
          </p>
        </div>

        <div className="bg-card p-6 md:p-8 rounded-xl shadow-sm border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="0700 000 000" type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location / Neighborhood *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Kilimani, Nairobi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="service_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Required *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="plumbing">Plumbing Services</SelectItem>
                        <SelectItem value="electrical">Electrical Services</SelectItem>
                        <SelectItem value="both">Both (Plumbing & Electrical)</SelectItem>
                        <SelectItem value="borehole">Borehole & Water Tanks</SelectItem>
                        <SelectItem value="solar">Solar & Backup Power</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="urgency"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>How urgent is this? *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="emergency" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            <span className="text-destructive font-semibold">Emergency</span> - I need someone today
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="this_week" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            This week - As soon as possible
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="routine" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Routine - Planning ahead (next few weeks)
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project / Issue Description *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please describe what you need help with. The more details, the better we can quote you." 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Quote Request"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
