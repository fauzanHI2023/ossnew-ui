"use client";
import React, { useState, useEffect } from "react";
import { CampaignHeader } from "@/components/section/campaigndetail/CampaignHeader";
import { CampaignStory } from "@/components/section/campaigndetail/CampaignStory";
import { DonationCard } from "@/components/section/campaigndetail/DonationCard";
import { MobileDonateButtons } from "@/components/section/campaigndetail/MobileDonateButton";
import { useQuery } from "@tanstack/react-query";
import { fetchCampaign } from "../../../../../services/donation/campaign/auth-campaign";
import { inputCart } from "../../../../../services/donation/transaction/auth-cart";
import { useCart } from "../../../../../context/CartContext";
import { useRouter, useParams } from "next/navigation";
import { fetchdonorList } from "../../../../../services/donation/campaign/auth-donorlist-bycampaign";
import { useCampaignDetail } from "../../../../../hooks/useCampaignDetail";

const page = () => {
  const params = useParams();
  const slug = params?.slug as string;

  // Ambil data campaign dari TanStack Query hook
  const { post, isLoading, isError } = useCampaignDetail(slug);

  // State tambahan untuk donasi qurban
  const [donationAmount, setDonationAmount] = useState<number>(0);

  useEffect(() => {
    if (post && post.campaign_category === "qurban") {
      setDonationAmount(Number(post.minimum_donation));
    }
  }, [post]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading campaign...</p>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Gagal memuat data campaign.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 xl:mt-[5rem] bg-white">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <a href="/" className="hover:text-[#1780b3]">
              Home
            </a>
            <span>/</span>
            <a href="/" className="hover:text-[#1780b3]">
              Campaigns
            </a>
            <span>/</span>
            <span className="text-gray-900">Sponsor Orphan Refugees</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <CampaignHeader post={post} />
              {/* Mobile Donate Buttons - Right after title */}
              <MobileDonateButtons />
              {/* Campaign Story Tabs */}
              <CampaignStory post={post} />
            </div>

            {/* Right Column - Donation Card */}
            <div className="lg:col-span-1">
              <DonationCard post={post} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
