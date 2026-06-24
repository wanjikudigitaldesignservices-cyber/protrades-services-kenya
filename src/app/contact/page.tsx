import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ProTrades Services",
  description: "Get in touch with ProTrades Services for all your plumbing and electrical needs in Kenya. Available 24/7 for emergencies.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-background">
      {/* Page Header */}
      <section className="bg-sidebar py-16 text-white border-b border-sidebar-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-sidebar-foreground/80 max-w-2xl mx-auto">
            We're here to help. Reach out for a free quote, emergency assistance, or general inquiries.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Our customer service team is available 24/7 to handle your emergency plumbing and electrical requests. For routine maintenance, we aim to respond within 2 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border-border shadow-sm">
                  <CardContent className="p-6 flex flex-col items-start space-y-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg">24/7 Emergency</h3>
                      <p className="text-muted-foreground mb-2">+254 700 000 000</p>
                      <Button variant="outline" size="sm" asChild className="text-destructive border-destructive/30 hover:bg-destructive/10">
                        <Link href="/emergency">Call Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border shadow-sm">
                  <CardContent className="p-6 flex flex-col items-start space-y-4">
                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-[#25D366]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg">WhatsApp Us</h3>
                      <p className="text-muted-foreground mb-2">+254 700 000 000</p>
                      <Button variant="outline" size="sm" asChild className="text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366]/10">
                        <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">Chat Now</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border shadow-sm">
                  <CardContent className="p-6 flex flex-col items-start space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Email Address</h3>
                      <p className="text-muted-foreground">hello@protrades.co.ke</p>
                      <p className="text-muted-foreground">support@protrades.co.ke</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border shadow-sm">
                  <CardContent className="p-6 flex flex-col items-start space-y-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Operating Hours</h3>
                      <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground text-sm font-semibold text-destructive mt-1">Emergency: 24/7 All Week</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-8">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/quote">Request a Detailed Quote</Link>
                </Button>
              </div>
            </div>

            {/* Map & Office Location */}
            <div className="h-[500px] lg:h-auto min-h-[400px] bg-muted rounded-xl border overflow-hidden relative">
              <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded-lg shadow-lg border max-w-[250px]">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold font-heading text-foreground">Main Office</h3>
                    <p className="text-sm text-muted-foreground mt-1">123 Industrial Area, Enterprise Road<br />Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
              {/* Google Maps iframe placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.19694760088!2d36.744111357672224!3d-1.303193375836262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1716922119337!5m2!1sen!2sus" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
