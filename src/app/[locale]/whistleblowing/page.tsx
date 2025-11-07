import { ConfidentialitySection } from "@/components/section/whistleblowing/ConfidentialitySection";
import { FormSection } from "@/components/section/whistleblowing/FormSection";
import { HeroSection } from "@/components/section/whistleblowing/HeroSection";
import { ViolationsSection } from "@/components/section/whistleblowing/ViolationSection";
import { WhatIsWhistleblowingSection } from "@/components/section/whistleblowing/WhatIsWhitleblowingSection";
import React from "react";

const Whistleblowing = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WhatIsWhistleblowingSection />
      <ConfidentialitySection />
      <ViolationsSection />
      <FormSection />
    </div>
  );
};

export default Whistleblowing;
