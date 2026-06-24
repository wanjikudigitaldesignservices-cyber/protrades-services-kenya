"use client";

import Link from "next/link";
import { Menu, PhoneCall, Hammer, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const routes = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-primary text-primary-foreground p-1.5 rounded">
            <Wrench className="h-5 w-5" />
          </div>
          <span className="font-heading text-xl font-bold tracking-tight">
            PRO<span className="text-primary">TRADES</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="transition-colors hover:text-primary"
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/quote">Get a Quote</Link>
          </Button>
          <Button asChild className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
            <Link href="/emergency" className="flex items-center space-x-2">
              <PhoneCall className="h-4 w-4" />
              <span>24/7 Emergency</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center space-x-4">
          <Button variant="ghost" size="icon" asChild className="text-destructive">
            <Link href="/emergency">
              <PhoneCall className="h-5 w-5" />
            </Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-1 text-lg font-medium transition-colors hover:text-primary"
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col gap-2">
                  <Button asChild className="w-full">
                    <Link href="/quote" onClick={() => setIsOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>
                  <Button variant="destructive" asChild className="w-full">
                    <Link href="/emergency" onClick={() => setIsOpen(false)}>
                      24/7 Emergency Call-Out
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
