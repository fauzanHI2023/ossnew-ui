"use client";
import { FAQCategories } from "@/components/section/faq/FAQCategories";
import { FAQSection } from "@/components/section/faq/FAQSection";
import { Hero } from "@/components/section/faq/HeroSection";
import React, { useState } from "react";

const Faq = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="min-h-screen bg-white">
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FAQCategories />
      <FAQSection searchQuery={searchQuery} />
    </div>
  );
};

export default Faq;
