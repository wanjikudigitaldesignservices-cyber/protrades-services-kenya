import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | ProTrades",
  description: "Browse our recent plumbing, electrical, solar, and borehole projects across Kenya.",
};

const projects = [
  {
    id: "commercial-office-rewiring",
    title: "Commercial Office Rewiring",
    category: "Electrical",
    location: "Westlands, Nairobi",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    description: "Complete electrical rewiring and lighting installation for a 10,000 sq ft modern office space."
  },
  {
    id: "borehole-pump-installation",
    title: "Borehole Pump Installation",
    category: "Borehole",
    location: "Karen, Nairobi",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1542128962-9d50ad7bf014?q=80&w=1974&auto=format&fit=crop",
    description: "Installation of a high-capacity submersible pump and connection to a 10,000-liter elevated storage tank."
  },
  {
    id: "solar-backup-home",
    title: "Solar Backup for 4-BR Home",
    category: "Solar",
    location: "Lavington",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop",
    description: "Installed a 5kW inverter system with 10 solar panels and lithium-ion battery backup for 24/7 power."
  },
  {
    id: "emergency-burst-pipe",
    title: "Emergency Burst Pipe Repair",
    category: "Plumbing",
    location: "Kilimani",
    date: "March 2026",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop",
    description: "Midnight emergency call-out to fix a severe main water line burst, minimizing water damage."
  },
  {
    id: "warehouse-lighting",
    title: "Warehouse Lighting Upgrade",
    category: "Electrical",
    location: "Industrial Area",
    date: "March 2026",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=2070&auto=format&fit=crop",
    description: "Upgraded 50 high-bay warehouse lights to energy-efficient LEDs, reducing power consumption by 40%."
  },
  {
    id: "bathroom-refit",
    title: "Luxury Bathroom Refit",
    category: "Plumbing",
    location: "Runda",
    date: "February 2026",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop",
    description: "Complete re-piping and installation of high-end fixtures for a master bathroom renovation."
  },
  {
    id: "estate-water-reticulation",
    title: "Estate Water Reticulation",
    category: "Plumbing & Borehole",
    location: "Kiambu",
    date: "February 2026",
    image: "https://images.unsplash.com/photo-1518558997970-4ddd2bb6ceba?q=80&w=2070&auto=format&fit=crop",
    description: "Designed and installed a water distribution network connecting a central borehole to 30 townhouses."
  },
  {
    id: "restaurant-kitchen-plumbing",
    title: "Commercial Kitchen Plumbing",
    category: "Plumbing",
    location: "CBD, Nairobi",
    date: "January 2026",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
    description: "Installed grease traps, industrial sinks, and gas pipe routing for a busy downtown restaurant."
  },
  {
    id: "smart-home-electrical",
    title: "Smart Home Electrical Setup",
    category: "Electrical",
    location: "Muthaiga",
    date: "January 2026",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
    description: "Integrated smart lighting, automated blinds, and a central control panel during a home build."
  },
  {
    id: "farm-irrigation-solar",
    title: "Farm Irrigation Solar Pump",
    category: "Solar & Borehole",
    location: "Kajiado",
    date: "December 2025",
    image: "https://images.unsplash.com/photo-1592982537447-6f296d194883?q=80&w=2070&auto=format&fit=crop",
    description: "Off-grid solar water pumping solution for a 10-acre farm, drastically reducing diesel costs."
  },
  {
    id: "backup-generator",
    title: "Industrial Generator Setup",
    category: "Electrical",
    location: "Syokimau",
    date: "November 2025",
    image: "https://images.unsplash.com/photo-1533423996375-f914ab1ea803?q=80&w=1934&auto=format&fit=crop",
    description: "Installed and commissioned a 100kVA backup generator with automatic transfer switch (ATS)."
  },
  {
    id: "apartment-drainage",
    title: "Apartment Block Drainage",
    category: "Plumbing",
    location: "Ruaka",
    date: "October 2025",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=1965&auto=format&fit=crop",
    description: "Cleared severe blockages in the main sewer line of a 40-unit apartment building using high-pressure jetting."
  }
];

export default function ProjectsPage() {
  return (
    <main className="flex-1 bg-background py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Recent Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of the residential and commercial projects we've successfully completed across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-border shadow-sm hover:shadow-md transition-all group flex flex-col">
              <div className="h-60 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-primary/90 text-white border-none">{project.category}</Badge>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mt-2 space-x-4">
                  <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" /> {project.location}</span>
                  <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {project.date}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="pt-4 border-t border-border">
                <Link href="/contact" className="text-primary font-medium hover:underline flex items-center text-sm">
                  Need something similar? Contact us <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
