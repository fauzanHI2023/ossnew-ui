"use client";
import { ArrowRight, Users, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { SectionTitle } from "@/components/utility/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { fetchCampaign } from "../../../../services/donation/campaign/auth-campaign";
import { Campaign } from "@/app/types/campaign";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function CurrentCampaigns() {
  const [activeCard, setActiveCard] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Detect scroll position to update active card
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.clientWidth * 0.85; // 85vw card width
      const newActiveCard = Math.round(scrollLeft / cardWidth);
      setActiveCard(Math.min(newActiveCard, campaigns.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.clientWidth * 0.85;
    scrollContainerRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  const {
    data: campaigns = [],
    isLoading,
    isError,
  } = useQuery<Campaign[]>({
    queryKey: ["campaigns"],
    queryFn: fetchCampaign,
  });

  if (isLoading) {
    return <p className="text-center py-8">Loading campaign...</p>;
  }

  if (isError || !campaigns) {
    return <p className="text-center py-8 text-red-500">Gagal memuat data campaign.</p>;
  }

  return (
    <section id="campaigns" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionTitle title="Featured Campaigns" align="center" />

        {/* Campaigns Grid */}
        <div className="mb-8">
          {/* Mobile: Horizontal Swipe */}
          <div className="md:hidden">
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto snap-x snap-mandatory flex gap-4 -mx-4 px-4 pb-2 scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {campaigns.slice(0, 3).map((campaign: any) => {
                const percentage = (campaign.donation_collected / campaign.target_donation) * 100;

                return (
                  <Link href={`campaign/${campaign.slug}`}>
                    <div key={campaign.id} className="snap-center flex-shrink-0 w-[85vw]">
                      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white rounded-lg cursor-pointer h-full">
                        {/* Image with Category Badge */}
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={`https://cdnx.human-initiative.org/image/${campaign.campaign_img}`}
                            width={600}
                            height={500}
                            alt={campaign.campaign_name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />

                          {/* Category Badge - Top Right */}
                          <Badge className="absolute top-3 right-3 bg-red-500 text-white border-0 shadow-md px-3 py-1 text-xs rounded-full">{campaign.core_program}</Badge>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          {/* Title */}
                          <h3 className="text-black mb-4">{campaign.campaign_name}</h3>

                          {/* Progress */}
                          <div className="mb-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-gray-600">Terkumpul</span>
                              <span className="text-[#268ece]">{Math.round(percentage)}%</span>
                            </div>
                            <Progress value={percentage} className="h-2 bg-gray-200" />
                          </div>

                          {/* Amount and Donors */}
                          <div className="flex justify-between items-end mb-4">
                            <div>
                              <div className="text-[#268ece] mb-1">{formatCurrency(campaign.donation_collected)}</div>
                              <div className="text-xs text-gray-500">dari {formatCurrency(campaign.target_donation)}</div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-gray-700">
                                <Users className="w-4 h-4" />
                                <span className="text-sm">{campaign.support}</span>
                              </div>
                              <div className="text-xs text-gray-500">Donatur</div>
                            </div>
                          </div>

                          {/* CTA Button */}
                          <Button className="w-full bg-[#268ece] hover:bg-[#1d7ab8] text-white">
                            Donasi Sekarang
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {campaigns.slice(0, 3).map((campaign, index) => (
                <button
                  key={campaign.id}
                  onClick={() => scrollToCard(index)}
                  className={`transition-all duration-300 rounded-full ${activeCard === index ? "w-8 h-2 bg-[#268ece]" : "w-2 h-2 bg-gray-300"}`}
                  aria-label={`Go to campaign ${index + 1}`}
                />
              ))}
            </div>

            {/* Swipe Hint */}
            {activeCard < campaigns.length - 1 && (
              <div className="flex justify-center mt-2">
                <div className="flex items-center gap-1 text-gray-400 text-xs animate-pulse">
                  <span>Geser</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            )}
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {campaigns.slice(0, 3).map((campaign: any) => {
              const percentage = (campaign.donation_collected / campaign.target_donation) * 100;

              return (
                <Link href={`campaign/${campaign.slug}`}>
                  <Card key={campaign.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white rounded-lg cursor-pointer flex flex-col h-full">
                    {/* Image with Category Badge */}
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <Image
                        src={`https://cdnx.human-initiative.org/image/${campaign.campaign_img}`}
                        width={600}
                        height={400}
                        alt={campaign.campaign_name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Category Badge - Top Right */}
                      <Badge className="absolute top-3 right-3 bg-red-500 text-white border-0 shadow-md px-3 py-1 text-xs rounded-full">{campaign.core_program}</Badge>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      {/* Title */}
                      <h3 className="text-black mb-4">{campaign.campaign_name}</h3>

                      {/* Progress */}
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Terkumpul</span>
                          <span className="text-[#268ece]">{Math.round(percentage)}%</span>
                        </div>
                        <Progress value={percentage} className="h-2 bg-gray-200" />
                      </div>

                      {/* Amount and Donors */}
                      <div className="flex justify-between items-end mb-4 flex-grow">
                        <div>
                          <div className="text-[#268ece] mb-1">{formatCurrency(campaign.donation_collected)}</div>
                          <div className="text-xs text-gray-500">dari {formatCurrency(campaign.target_donation)}</div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-gray-700">
                            <Users className="w-4 h-4" />
                            <span className="text-sm">{campaign.support}</span>
                          </div>
                          <div className="text-xs text-gray-500">Donatur</div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button className="w-full bg-[#268ece] hover:bg-[#1d7ab8] text-white mt-auto">
                        Donasi Sekarang
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="bg-white border-2 border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white px-8">
            Lihat Semua Kampanye
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
