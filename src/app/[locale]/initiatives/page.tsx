import CTASection from "@/components/section/initiatives/CtaSection";
import Hero from "@/components/section/initiatives/Hero";
import ImpactSection from "@/components/section/initiatives/ImpactSection";
import ProgramsSection from "@/components/section/initiatives/ProgramSection";
import React from "react";
import { initiatives } from "../../../../data/initiatives";
import Link from "next/link";

const Initiatives = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProgramsSection />
      <ImpactSection />
      <CTASection backgroundImage="https://images.unsplash.com/photo-1701854300033-420c540869bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwaW5nJTIwaGFuZHMlMjB0b2dldGhlcnxlbnwxfHx8fDE3NjA0NTU4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080" />
    </div>
  );
};

export default Initiatives;
