import { Hero } from "@/components/section/documents/HeroSection";
import { DocumentsSection } from "@/components/section/documents/DocumentSection";
import React from "react";
import { fetchNews } from "../../../../services/publication/auth-news";

const Document = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <DocumentsSection />
    </div>
  );
};

export default Document;
