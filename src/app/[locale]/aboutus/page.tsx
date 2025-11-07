import AwardsSection from "@/components/section/aboutus/AwardSection";
import BranchSection from "@/components/section/aboutus/BranchSection";
import ContactSection from "@/components/section/aboutus/ContactSection";
import FloatingExplorer from "@/components/section/aboutus/Floating";
import HeroSection from "@/components/section/aboutus/HeroSection";
import ImpactSection from "@/components/section/aboutus/ImpactSection";
import LegalitySection from "@/components/section/aboutus/LegalitySection";
import ManagementSection from "@/components/section/aboutus/MeetOurManagement";
import StorySection from "@/components/section/aboutus/StorySection";
import VisionMissionSection from "@/components/section/aboutus/VisionMission";
import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <FloatingExplorer />
      <main>
        <HeroSection />
        <VisionMissionSection />
        <ManagementSection />
        <StorySection />
        <AwardsSection />
        <LegalitySection />
        <ImpactSection />
        <BranchSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default AboutUs;
