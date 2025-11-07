"use client";

import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { CampaignCard } from "./CampaignCard";
import { SortPopup, SortOption } from "./SortPopup";
import { CategoryFilter } from "./CategoryFilter";
import { Button } from "@/components/ui/button";
import { fetchCampaign, fetchCampaignByCoreProgram } from "../../../../services/donation/campaign/auth-campaign";

interface Campaign {
  id: number;
  campaign_name: string;
  core_program: string;
  campaign_img: string;
  donation_collected: number;
  target_donation: number;
  support: number;
  campaign_description: string;
}

export function AllCampaignsGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [isMobile, setIsMobile] = useState(false);
  const [displayCount, setDisplayCount] = useState(10);

  // 🔹 Fetch campaign data based on category
  const {
    data: campaigns,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["campaigns", activeCategory],
    queryFn: async () => {
      if (activeCategory === "all") {
        return await fetchCampaign();
      }
      return await fetchCampaignByCoreProgram(activeCategory);
    },
  });

  // 🔹 Handle responsive state
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile && displayCount === 10) setDisplayCount(5);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setDisplayCount(isMobile ? 5 : 10);
  }, [activeCategory, isMobile]);

  // 🔹 Sorting logic
  const sortedCampaigns = useMemo(() => {
    if (!Array.isArray(campaigns)) return [];
    let list = [...campaigns];

    switch (sortOption) {
      case "most-donated":
        list.sort((a, b) => b.donation_collected - a.donation_collected);
        break;
      case "least-donated":
        list.sort((a, b) => a.donation_collected - b.donation_collected);
        break;
      case "most-supported":
        list.sort((a, b) => b.support - a.support);
        break;
      default:
        // newest / default
        list.sort((a, b) => b.id - a.id);
        break;
    }

    return list;
  }, [campaigns, sortOption]);

  const displayedCampaigns = sortedCampaigns.slice(0, displayCount);
  const hasMore = displayCount < sortedCampaigns.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + (isMobile ? 5 : 10));
  };

  // 🔹 Handle Loading & Error
  if (isLoading) {
    return <div className="text-center py-10">Memuat campaign...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Gagal memuat data campaign.</div>;
  }

  return (
    <>
      {/* Category Filter Section */}
      <section>
        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </section>

      {/* All Campaigns Grid Section */}
      <section className="space-y-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-gray-900 text-3xl mb-2">Pilihan Human Initiative</h2>
            <p className="text-gray-600">{activeCategory === "all" ? "Semua campaign yang membutuhkan dukungan Anda" : `${sortedCampaigns.length} campaign ditemukan`}</p>
          </div>
          <SortPopup activeSortOption={sortOption} onSortChange={setSortOption} />
        </div>

        {/* Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedCampaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              id={campaign.id}
              title={campaign.campaign_name}
              image={campaign.campaign_img}
              raised={campaign.donation_collected}
              target={campaign.target_donation}
              description={campaign.campaign_description}
              category={campaign.core_program}
              donors={campaign.support}
              slug={campaign.slug}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className="flex md:hidden flex-col gap-3">
          {displayedCampaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              id={campaign.id}
              title={campaign.campaign_name}
              image={campaign.campaign_img}
              raised={campaign.donation_collected}
              target={campaign.target_donation}
              description={campaign.campaign_description}
              category={campaign.core_program}
              donors={campaign.support}
              slug={campaign.slug}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center gap-4 pt-4">
          {hasMore && (
            <Button variant="outline" size="lg" onClick={handleLoadMore} className="rounded-full bg-white text-gray-600 border-gray-300 min-w-[200px] border-2 hover:border-[#268ece] hover:text-[#268ece] transition-all">
              Muat Lebih Banyak
            </Button>
          )}

          {displayCount > (isMobile ? 5 : 10) && (
            <Button variant="outline" size="lg" onClick={() => setDisplayCount(isMobile ? 5 : 10)} className="rounded-full min-w-[200px] border-2 hover:border-gray-400 hover:text-gray-700 transition-all">
              Tampilkan Lebih Sedikit
            </Button>
          )}
        </div>
      </section>
    </>
  );
}
