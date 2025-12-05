"use client";
import { Award, Trophy, Star, Medal } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const AwardsSection = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Best Social Impact Organization",
      year: "2024",
      organization: "Indonesian NGO Awards",
    },
    {
      icon: Star,
      title: "Excellence in Community Service",
      year: "2023",
      organization: "National Philanthropy Council",
    },
    {
      icon: Medal,
      title: "Innovation in Education Program",
      year: "2023",
      organization: "Education Ministry",
    },
    {
      icon: Award,
      title: "Transparency & Accountability Award",
      year: "2022",
      organization: "International Charity Watch",
    },
    {
      icon: Trophy,
      title: "Digital Transformation Award",
      year: "2022",
      organization: "Tech for Good Indonesia",
    },
    {
      icon: Star,
      title: "Outstanding Leadership",
      year: "2021",
      organization: "Asia Pacific Forum",
    },
  ];

  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Our Awards</h2>
          <div className="w-20 h-1 bg-[#268ece] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Recognition and appreciation for our dedication to creating social impact</p>
        </div>

        {/* Mobile Carousel - Visible only on mobile */}
        <div className="md:hidden max-w-sm mx-auto px-4">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {awards.map((award, index) => {
                const IconComponent = award.icon;
                return (
                  <CarouselItem key={index}>
                    <div className="bg-white rounded-xl p-6 border border-gray-100 mx-2">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-[#268ece] to-[#1a5f8f] rounded-lg flex-shrink-0">
                          <IconComponent size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg mb-2 text-gray-900">{award.title}</h3>
                          <p className="text-sm text-gray-600 mb-1">{award.organization}</p>
                          <p className="text-[#268ece]">{award.year}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-2 h-10 w-10" />
            <CarouselNext className="-right-2 h-10 w-10" />
          </Carousel>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#268ece] to-[#1a5f8f] rounded-lg flex-shrink-0">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg mb-2 text-gray-900">{award.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{award.organization}</p>
                    <p className="text-[#268ece]">{award.year}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
