import { AllCampaignsGrid } from "@/components/section/campaign/AllCampaignGrid";
import { FeaturedCampaigns } from "@/components/section/campaign/FeaturedCampaign";
import { HeroBanner } from "@/components/section/campaign/HeroSection";
import React from "react";

const Campaign = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <HeroBanner />
        <FeaturedCampaigns />
        <AllCampaignsGrid />
      </main>
    </div>
  );
};

export default Campaign;
