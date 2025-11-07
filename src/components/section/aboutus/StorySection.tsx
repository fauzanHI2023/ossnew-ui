"use client";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const StorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const timeline = [
    {
      year: "2009",
      title: "Founding",
      description: "Human Initiative was established as a humanitarian organization dedicated to empowering communities and providing aid to those in need.",
    },
    {
      year: "2011",
      title: "Expansion to Education",
      description: "Launched comprehensive education programs including scholarship initiatives and school infrastructure development across Indonesia.",
    },
    {
      year: "2013",
      title: "Healthcare Programs",
      description: "Introduced health and nutrition programs, providing medical services and health education to underserved communities.",
    },
    {
      year: "2015",
      title: "International Recognition",
      description: "Received international acknowledgment for humanitarian work and began partnerships with global organizations.",
    },
    {
      year: "2018",
      title: "Economic Empowerment",
      description: "Developed economic empowerment programs focusing on entrepreneurship training and microfinance initiatives.",
    },
    {
      year: "2020",
      title: "COVID-19 Response",
      description: "Mobilized rapid response programs providing emergency relief, medical supplies, and support during the pandemic.",
    },
    {
      year: "2022",
      title: "Digital Transformation",
      description: "Implemented digital platforms for transparency and efficient program delivery, reaching more beneficiaries.",
    },
    {
      year: "2025",
      title: "Sustainable Development",
      description: "Focused on sustainable development goals with innovative programs in education, health, and economic empowerment.",
    },
  ];

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : timeline.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < timeline.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Our Story</h2>
          <div className="w-20 h-1 bg-[#268ece] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">From humble beginnings to a leading humanitarian organization, our journey has been driven by compassion and commitment to making a real difference in people's lives.</p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Timeline Slider */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button onClick={handlePrevious} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all hover:scale-110" aria-label="Previous">
              <ChevronLeft size={24} className="text-[#268ece]" />
            </button>

            <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all hover:scale-110" aria-label="Next">
              <ChevronRight size={24} className="text-[#268ece]" />
            </button>

            {/* Scrollable Container */}
            <div ref={scrollContainerRef} className="overflow-hidden scroll-smooth">
              <div className="flex">
                {timeline.map((item, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 h-full">
                      {/* Year Badge */}
                      <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-[#268ece] to-[#1a5f8f] rounded-full text-white shadow-md">
                        <Calendar size={24} />
                        <span className="text-2xl">{item.year}</span>
                      </div>

                      {/* Content */}
                      <h3 className="text-3xl md:text-4xl mb-6 text-gray-900">{item.title}</h3>
                      <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{item.description}</p>

                      {/* Progress Indicator */}
                      <div className="mt-8 flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          {index + 1} / {timeline.length}
                        </span>
                        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#268ece] to-[#1a5f8f] transition-all duration-300" style={{ width: `${((index + 1) / timeline.length) * 100}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {timeline.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-[#268ece]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#268ece] to-[#1a5f8f] rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
            <h3 className="text-3xl mb-4">Our Commitment</h3>
            <p className="text-lg leading-relaxed opacity-95">
              We continue to evolve and adapt our programs to meet the changing needs of communities, always staying true to our core mission of empowering people and creating sustainable positive change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
