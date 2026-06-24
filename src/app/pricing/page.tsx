import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Guide | ProTrades",
  description: "Transparent pricing for plumbing and electrical services in Kenya. No hidden fees.",
};

export default function PricingPage() {
  return (
    <main className="flex-1 bg-background py-16">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in honest, upfront pricing. No hidden fees, no surprise charges on your invoice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Standard Rates */}
          <Card className="border-border shadow-sm flex flex-col">
            <CardHeader className="bg-muted/50 border-b border-border pb-8">
              <CardTitle className="font-heading text-2xl">Standard Rates</CardTitle>
              <CardDescription>Mon - Fri (8:00 AM - 6:00 PM)</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold font-heading">KSH 1,500</span>
                <span className="text-muted-foreground ml-2">Call-out Fee</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <span>Includes first 30 mins of diagnosis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <span>Hourly rate of KSH 1,000 applies thereafter</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <span>Routine maintenance and scheduled repairs</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="border-t border-border pt-6">
              <Button className="w-full" asChild>
                <Link href="/quote">Request a Quote</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Emergency Rates */}
          <Card className="border-destructive shadow-lg flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-destructive text-white text-xs font-bold px-3 py-1 rounded-bl-lg">24/7 Priority</div>
            <CardHeader className="bg-destructive/5 border-b border-destructive/20 pb-8">
              <CardTitle className="font-heading text-2xl text-destructive">Emergency Rates</CardTitle>
              <CardDescription>Nights, Weekends & Holidays</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold font-heading">KSH 3,000</span>
                <span className="text-muted-foreground ml-2">Call-out Fee</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-destructive mr-3 shrink-0 mt-0.5" />
                  <span>Immediate dispatch (60-90 min response)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-destructive mr-3 shrink-0 mt-0.5" />
                  <span>Includes first 30 mins to secure the hazard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-destructive mr-3 shrink-0 mt-0.5" />
                  <span>Hourly rate of KSH 1,500 applies thereafter</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="border-t border-destructive/20 pt-6">
              <Button variant="destructive" className="w-full" asChild>
                <Link href="/emergency">Call Emergency Dispatch</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Important Information */}
        <div className="bg-muted rounded-xl p-8 border">
          <h3 className="font-heading text-xl font-bold mb-4 flex items-center">
            <AlertCircle className="h-6 w-6 mr-2 text-primary" />
            Important Pricing Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <p className="mb-2"><strong className="text-foreground">Materials & Parts:</strong> Our hourly rates cover labor only. Any replacement parts, pipes, wiring, or specialized materials required for the job are quoted and billed separately.</p>
              <p><strong className="text-foreground">Fixed Price Quotes:</strong> For large projects (like full rewiring or borehole installation), we provide a comprehensive fixed-price quote rather than billing hourly.</p>
            </div>
            <div>
              <p className="mb-2"><strong className="text-foreground">Call-out Fee Waiver:</strong> If you accept our fixed-price quote to proceed with a major repair immediately after diagnosis, the call-out fee is often waived.</p>
              <p><strong className="text-foreground">Payment Methods:</strong> We accept M-Pesa, bank transfers, and major credit cards. Payment is due upon completion of the work unless a commercial SLA is in place.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
