import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | ProTrades",
  description: "Answers to common questions about our plumbing, electrical, and emergency services in Kenya.",
};

const faqs = [
  {
    question: "Do you charge a call-out fee?",
    answer: "Yes, we charge a standard call-out fee which covers the technician's travel time and the first 30 minutes of diagnosis. If you accept our quote for the repair, this fee is usually waived or absorbed into the final cost."
  },
  {
    question: "How quickly can you respond to an emergency?",
    answer: "For emergency calls (burst pipes, severe electrical faults), our dispatch team aims to have a technician at your property within 60-90 minutes, depending on traffic and your location in the city."
  },
  {
    question: "Are your technicians certified and licensed?",
    answer: "Absolutely. All our electricians are registered with the Energy and Petroleum Regulatory Authority (EPRA) and our plumbers hold recognized national trade certifications. We also conduct rigorous background checks."
  },
  {
    question: "Do you provide warranties on your work?",
    answer: "Yes, we offer a 6-month workmanship warranty on all our repairs and installations. Materials and parts supplied by us carry their respective manufacturer's warranty."
  },
  {
    question: "Can I get a quote over the phone?",
    answer: "For standard jobs (like installing a specific model of water heater), we can give a very accurate estimate over the phone. However, for complex faults or rewiring, we need to assess the site in person to provide a binding quote."
  },
  {
    question: "What areas do you service?",
    answer: "We primarily serve Nairobi and its metropolitan areas (Kiambu, Kajiado, Machakos). For large commercial projects or borehole installations, we deploy teams nationwide across Kenya."
  }
];

export default function FAQPage() {
  return (
    <main className="flex-1 bg-background py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our services, pricing, and guarantees.
          </p>
        </div>

        <div className="bg-card rounded-xl border p-6 md:p-8 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-heading text-lg font-bold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 bg-sidebar rounded-xl p-8 text-center text-white border border-sidebar-border">
          <h2 className="font-heading text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-sidebar-foreground/80 mb-8 max-w-xl mx-auto">
            If you couldn't find the answer you were looking for, our customer support team is ready to help you out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-sidebar hover:bg-white/90" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
              <Link href="/emergency">Emergency Call</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
