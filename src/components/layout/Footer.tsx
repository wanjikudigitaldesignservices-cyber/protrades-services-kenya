import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground border-t border-sidebar-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <span className="font-heading text-2xl font-bold tracking-tight text-white">
              PRO<span className="text-primary">TRADES</span>
            </span>
            <p className="text-sm text-sidebar-foreground/80 max-w-xs">
              Professional plumbing and electrical services for residential and commercial properties in Kenya.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/plumbing" className="hover:text-primary transition-colors">Plumbing Services</Link>
              </li>
              <li>
                <Link href="/services/electrical" className="hover:text-primary transition-colors">Electrical Services</Link>
              </li>
              <li>
                <Link href="/services/borehole" className="hover:text-primary transition-colors">Borehole Solutions</Link>
              </li>
              <li>
                <Link href="/services/solar" className="hover:text-primary transition-colors">Solar Installation</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">Pricing Guide</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-primary transition-colors">Our Team</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>123 Industrial Area, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>hello@protrades.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-sidebar-foreground/60">
          <p>&copy; {new Date().getFullYear()} ProTrades Services. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-terms" className="hover:text-primary transition-colors">Privacy Policy & Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
