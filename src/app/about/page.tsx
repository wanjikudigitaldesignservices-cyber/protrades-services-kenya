import { CheckCircle2, Shield, Wrench, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ProTrades Services",
  description: "Learn about ProTrades Services, Kenya's premier plumbing and electrical service provider. Discover our story, our guarantees, and our certifications.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="bg-sidebar py-20 text-white border-b border-sidebar-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">About ProTrades</h1>
          <p className="text-xl text-sidebar-foreground/80 max-w-2xl mx-auto">
            Setting the standard for excellence in plumbing and electrical services across Kenya since 2010.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="font-heading text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground text-lg">
              What started as a small, family-run operation with a single service van has grown into Kenya's most trusted name in residential and commercial property maintenance. 
            </p>
            <p className="text-muted-foreground text-lg">
              We realized early on that customers were frustrated by unreliable contractors, hidden fees, and poor workmanship. ProTrades was built to solve exactly that. We hire only certified, background-checked professionals and back every job with a 100% satisfaction guarantee.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" />
                <span className="font-medium">Transparent upfront pricing with no hidden surprises.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" />
                <span className="font-medium">Punctual technicians who respect your property.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" />
                <span className="font-medium">Use of premium, approved materials for lasting repairs.</span>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            {/* Placeholder Image */}
            <div className="aspect-video bg-muted rounded-xl border flex items-center justify-center text-muted-foreground overflow-hidden">
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" alt="Technicians working" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold mb-4">The ProTrades Guarantee</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-sm border text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Licensed & Insured</h3>
              <p className="text-muted-foreground">Every technician carries full certification. We hold comprehensive public liability insurance for your peace of mind.</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm border text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Workmanship Warranty</h3>
              <p className="text-muted-foreground">We stand behind our work. If something isn't right, we come back and fix it for free. That's our promise.</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Local Experts</h3>
              <p className="text-muted-foreground">Our teams are stationed across major cities, ensuring rapid response times, especially for emergencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-6">Ready to experience the difference?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/quote">Request a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
