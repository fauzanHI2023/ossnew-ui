"use client";
import { useState, useRef, useEffect } from "react";
import { Baby, Briefcase, AlertTriangle, Building2, Waves, UsersRound } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/utility/SectionTitle";

const initiatives = [
  {
    id: 1,
    title: "Initiative for Children",
    description: "Program pendidikan, kesehatan, dan perlindungan untuk anak-anak",
    icon: Baby,
    color: "#268ece",
    stats: "5,000+ Anak Terbantu",
  },
  {
    id: 2,
    title: "Initiative for Empowerment",
    description: "Pemberdayaan ekonomi dan peningkatan keterampilan masyarakat",
    icon: UsersRound,
    color: "#3a9fdb",
    stats: "3,200+ Peserta Program",
  },
  {
    id: 3,
    title: "Initiative for Disaster",
    description: "Tanggap darurat dan pemulihan pasca bencana",
    icon: Waves,
    color: "#1d7ab8",
    stats: "15+ Lokasi Bencana",
  },
  {
    id: 4,
    title: "Initiative for Infrastructure",
    description: "Pembangunan dan perbaikan infrastruktur komunitas",
    icon: Building2,
    color: "#4eb3e8",
    stats: "50+ Proyek Selesai",
  },
];

export function InitiativesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const newSlide = Math.round(scrollLeft / cardWidth);
      setCurrentSlide(newSlide);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="initiatives" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionTitle title="Our Initiatives" align="center" />

        {/* Swipe Indicator - Mobile Only */}
        <div className="sm:hidden flex items-center justify-center gap-2 text-gray-500 text-sm mb-6 -mt-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Swipe to see more</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="sm:hidden">
          <div ref={scrollContainerRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 gap-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {initiatives.map((initiative) => {
              const Icon = initiative.icon;

              return (
                <div key={initiative.id} className="flex-shrink-0 w-full snap-center">
                  <Card className="p-6 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#268ece] group cursor-pointer relative overflow-hidden flex flex-col h-full">
                    {/* Background Decoration */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 opacity-5 rounded-full group-hover:scale-150 transition-transform duration-500" style={{ backgroundColor: initiative.color }} />

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10" style={{ backgroundColor: initiative.color }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-black mb-2 group-hover:text-[#268ece] transition-colors">{initiative.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{initiative.description}</p>

                    {/* Stats */}
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <div className="text-[#268ece]">{initiative.stats}</div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-[#268ece] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {initiatives.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = scrollContainerRef.current;
                  if (container) {
                    container.scrollTo({
                      left: index * container.offsetWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-[#268ece] w-8" : "bg-gray-300"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon;

            return (
              <Card key={initiative.id} className="p-6 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#268ece] group cursor-pointer relative overflow-hidden flex flex-col">
                {/* Background Decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 opacity-5 rounded-full group-hover:scale-150 transition-transform duration-500" style={{ backgroundColor: initiative.color }} />

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10" style={{ backgroundColor: initiative.color }}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-black mb-2 group-hover:text-[#268ece] transition-colors">{initiative.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{initiative.description}</p>

                {/* Stats */}
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <div className="text-[#268ece]">{initiative.stats}</div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-[#268ece] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ingin tahu lebih detail tentang setiap inisiatif?</p>
          <a href="#initiatives" className="text-[#268ece] hover:text-[#1d7ab8] inline-flex items-center gap-2 transition-colors">
            Jelajahi Semua Program
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
