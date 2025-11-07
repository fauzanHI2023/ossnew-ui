"use client";
import { motion } from "motion/react";
import { AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { violations } from "../../../../data/violation";

export function ViolationsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#268ece]/10 text-[#268ece] mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm">Types of Violations</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">Below are the types of violations you can report through our whistleblowing system</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {violations.map((violation, index) => {
              const Icon = violation.icon;
              return (
                <AccordionItem key={violation.number} value={`item-${index}`} className="border-gray-200">
                  <AccordionTrigger className="px-6 hover:bg-gray-50 hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#268ece] to-[#1a6ba8] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-[#268ece]/10 text-[#268ece]">{violation.number}</span>
                        <span className="text-black">{violation.title}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-14 pr-4">
                      <p className="text-gray-600 leading-relaxed">{violation.description}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
