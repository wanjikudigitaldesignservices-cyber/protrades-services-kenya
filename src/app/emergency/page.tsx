import { PhoneCall, AlertTriangle, Clock, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Emergency Services | ProTrades",
  description: "Need immediate plumbing or electrical help? We offer 24/7 emergency dispatch across Kenya. Call now.",
};

export default function EmergencyPage() {
  return (
    <main className="flex-1 bg-black text-white relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-destructive via-black to-black"></div>

      <div className="container max-w-4xl mx-auto px-4 py-20 md:py-32 relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-destructive/20 text-destructive border border-destructive/50 px-4 py-2 rounded-full text-sm font-bold mb-8 animate-pulse">
          <AlertTriangle className="h-5 w-5" />
          <span>24/7 RAPID RESPONSE DISPATCH</span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Emergency Issue?
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl">
          Don't wait. A burst pipe or a dangerous electrical fault needs immediate attention. Our technicians are on standby right now.
        </p>

        <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-8 md:p-12 w-full max-w-2xl backdrop-blur-sm mb-12">
          <h2 className="text-3xl font-heading font-bold mb-8">Call Our Dispatch Direct</h2>
          
          <a href="tel:+254700000000" className="group flex flex-col md:flex-row items-center justify-center gap-6 bg-destructive hover:bg-destructive/90 text-white rounded-xl p-6 transition-all transform hover:scale-105 shadow-2xl shadow-destructive/20">
            <div className="bg-white/20 p-4 rounded-full group-hover:animate-bounce">
              <PhoneCall className="h-10 w-10" />
            </div>
            <div className="text-center md:text-left">
              <span className="block text-sm font-bold text-white/80 uppercase tracking-wider mb-1">Tap To Call Toll-Free</span>
              <span className="text-4xl md:text-5xl font-black font-heading tracking-tight">+254 700 000</span>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl text-left border-t border-white/10 pt-12">
          <div className="flex items-start space-x-4">
            <Clock className="h-8 w-8 text-destructive shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">Always Open</h3>
              <p className="text-white/60 text-sm">Nights, weekends, and holidays. We never close for emergencies.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin className="h-8 w-8 text-destructive shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">Local Teams</h3>
              <p className="text-white/60 text-sm">Dispatched from the nearest depot to reach you faster.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <ShieldCheck className="h-8 w-8 text-destructive shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">Safe & Licensed</h3>
              <p className="text-white/60 text-sm">Background-checked pros who will secure the hazard safely.</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-white/50 text-sm mb-4">Not an emergency? Book a routine service visit instead.</p>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
            <Link href="/quote">Request Routine Quote</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
