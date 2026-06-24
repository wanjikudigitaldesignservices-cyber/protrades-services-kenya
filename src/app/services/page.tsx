import { ArrowRight, Zap, Droplets, Droplet, Sun, Wrench, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | ProTrades",
  description: "Comprehensive plumbing, electrical, borehole, and solar services for residential and commercial properties.",
};

const services = [
  {
    id: "plumbing",
    title: "Plumbing Services",
    icon: <Droplets className="h-8 w-8 text-primary" />,
    description: "From fixing minor leaks to full pipe replacements, our certified plumbers handle everything. We do bathroom installations, water heater repairs, blocked drains, and emergency bursts.",
    features: ["Leak Detection", "Pipe Repair & Replacement", "Water Heater Installation", "Drain Unblocking"],
    href: "/services/plumbing"
  },
  {
    id: "electrical",
    title: "Electrical Services",
    icon: <Zap className="h-8 w-8 text-secondary" />,
    description: "Safe and compliant electrical work. Our team handles complete rewiring, fault finding, lighting installations, switchboard upgrades, and safety compliance checks.",
    features: ["Fault Finding", "Full Rewiring", "Lighting & Outlets", "Safety Inspections"],
    href: "/services/electrical"
  },
  {
    id: "borehole",
    title: "Borehole & Tanks",
    icon: <Droplet className="h-8 w-8 text-primary" />,
    description: "Ensure a steady water supply with our complete borehole pump installations, elevated water tanks, booster pumps, and routine water pressure maintenance.",
    features: ["Pump Installations", "Tank Connections", "Booster Systems", "Water Filtration"],
    href: "/services/borehole"
  },
  {
    id: "solar",
    title: "Solar & Backup",
    icon: <Sun className="h-8 w-8 text-secondary" />,
    description: "Beat the blackouts with custom solar panel installations and inverter/battery backup systems designed for your home or business power consumption needs.",
    features: ["Solar Panels", "Inverter Installation", "Battery Backup", "System Maintenance"],
    href: "/services/solar"
  }
];

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-background">
      {/* Header */}
      <section className="bg-sidebar py-16 text-white border-b border-sidebar-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-sidebar-foreground/80 max-w-2xl mx-auto">
            Professional, reliable, and fully licensed services tailored to meet the exact needs of the Kenyan market.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col border-border shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${service.id === 'electrical' || service.id === 'solar' ? 'bg-secondary/10' : 'bg-primary/10'}`}>
                    {service.icon}
                  </div>
                  <CardTitle className="font-heading text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base text-muted-foreground mb-6">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm font-medium">
                        <Wrench className="h-4 w-4 mr-2 text-muted-foreground" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6 border-t border-border mt-auto">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={service.href}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Splits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold">We Serve Both Sectors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-10 rounded-2xl border text-center flex flex-col items-center">
              <HardHat className="h-16 w-16 text-primary mb-6" />
              <h3 className="font-heading text-2xl font-bold mb-4">Residential</h3>
              <p className="text-muted-foreground mb-8">From apartments to standalone houses, we handle all domestic plumbing and electrical needs with respect for your home.</p>
              <Button asChild>
                <Link href="/services/residential">View Residential Services</Link>
              </Button>
            </div>
            
            <div className="bg-sidebar p-10 rounded-2xl border border-sidebar-border text-center flex flex-col items-center text-white">
              <Zap className="h-16 w-16 text-secondary mb-6" />
              <h3 className="font-heading text-2xl font-bold mb-4">Commercial</h3>
              <p className="text-sidebar-foreground/80 mb-8">Offices, retail spaces, and warehouses. We provide SLA-backed maintenance and large-scale installations for businesses.</p>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                <Link href="/services/commercial">View Commercial Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
