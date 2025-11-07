import { HeroSection } from "@/components/section/news/HeroSection";
import { NewsSection } from "@/components/section/news/NewsSection";
import React from "react";
import { fetchNews } from "../../../../services/publication/auth-news";

const News = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <NewsSection />
    </div>
  );
};

export default News;
