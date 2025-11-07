import React from "react";
import { HeroSection } from "@/components/section/rightsholders/HeroSection";
import { RightHolderSection } from "@/components/section/rightsholders/RightholderSection";
import { StatisticsSection } from "@/components/section/rightsholders/StatisticsSection";
import { ProgramsSection } from "@/components/section/rightsholders/ProgramSection";
import { ActiveProgramsSection } from "@/components/section/rightsholders/ActiveProgramSection";

const Rightholders = () => {
  return (
    <main>
      <HeroSection />
      <RightHolderSection />
      <StatisticsSection />
      <ProgramsSection />
      <ActiveProgramsSection />
    </main>
  );
};

export default Rightholders;
