import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, CheckCircle, Wrench, Zap, Droplets, HardHat, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        >
          {/* Using a local video to guarantee it works without 403 errors */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

        <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-destructive/90 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span>24/7 Emergency Call-Out Available</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white max-w-4xl tracking-tight leading-tight">
            Kenya's Most Reliable Plumbing & Electrical Experts
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            From routine maintenance to emergency repairs, our certified technicians deliver top-tier workmanship for your home or business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
              <Link href="/quote">
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-white/10 text-white hover:bg-white/20 border-white/30" asChild>
              <Link href="/emergency">
                <PhoneCall className="mr-2 h-5 w-5" /> Call Now: +254 700 000
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-sidebar py-12 border-b border-sidebar-border relative z-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-sidebar-border/50">
            <div className="flex flex-col items-center space-y-2">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h3 className="font-heading font-bold text-xl text-white">100% Licensed</h3>
              <p className="text-sm text-sidebar-foreground/70">Fully insured & certified</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <CheckCircle className="h-8 w-8 text-primary" />
              <h3 className="font-heading font-bold text-xl text-white">15+ Years</h3>
              <p className="text-sm text-sidebar-foreground/70">Industry experience</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Wrench className="h-8 w-8 text-primary" />
              <h3 className="font-heading font-bold text-xl text-white">5000+ Jobs</h3>
              <p className="text-sm text-sidebar-foreground/70">Completed successfully</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Star className="h-8 w-8 text-primary fill-primary" />
              <h3 className="font-heading font-bold text-xl text-white">4.9/5 Rating</h3>
              <p className="text-sm text-sidebar-foreground/70">From happy customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Our Core Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We provide comprehensive solutions tailored to both residential and commercial needs across Kenya.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:border-primary/50 transition-colors group cursor-pointer border-border shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Droplets className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-heading text-xl">Plumbing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Leaks, pipe bursts, drainage, water heater installations and general maintenance.</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:border-secondary/50 transition-colors group cursor-pointer border-border shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Zap className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
                </div>
                <CardTitle className="font-heading text-xl">Electrical</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Wiring, fault finding, panel upgrades, lighting, and safety inspections.</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 transition-colors group cursor-pointer border-border shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Droplets className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-heading text-xl">Borehole Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Pump installation, tank connections, pressure testing, and water treatment.</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:border-secondary/50 transition-colors group cursor-pointer border-border shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Zap className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
                </div>
                <CardTitle className="font-heading text-xl">Solar & Backup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">Inverter setups, solar panel installation, and battery backup systems.</CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <HardHat className="w-64 h-64" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Need a professional on-site today?</h2>
            <p className="text-xl text-white/90 mb-8">Our technicians are standing by to solve your plumbing and electrical issues quickly and professionally.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button size="lg" className="bg-sidebar text-white hover:bg-sidebar/90 text-lg px-8 border-none">
                <Link href="/emergency">24/7 Emergency</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
