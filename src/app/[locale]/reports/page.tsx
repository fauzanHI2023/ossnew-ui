import { HeroBanner } from "@/components/section/report/HeroSection";
import React from "react";
import { fetchNews } from "../../../../services/publication/auth-news";
import { ReportsSection } from "@/components/section/report/ReportsSection";

const Report = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <ReportsSection />
    </div>
  );
};

export default Report;
