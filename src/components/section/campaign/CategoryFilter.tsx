"use client";

import { Baby, AlertTriangle, Users, Building2, LayoutGrid, Sparkles } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchCampaign, fetchCampaignByCoreProgram } from "../../../../services/donation/campaign/auth-campaign";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const staticCategories = [
  {
    id: "all",
    label: "Semua",
    icon: LayoutGrid,
    color: "bg-gray-100",
    iconColor: "text-gray-700",
  },
  {
    id: "children",
    label: "Children",
    icon: Baby,
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    id: "disaster",
    label: "Disaster",
    icon: AlertTriangle,
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: "empowerment",
    label: "Empowerment",
    icon: Users,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    icon: Building2,
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "sebar qurban",
    label: "Qurban",
    icon: Sparkles,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  // Fetch campaign tergantung kategori aktif
  const { data, isLoading, error } = useQuery({
    queryKey: ["campaigns", activeCategory],
    queryFn: async () => {
      if (activeCategory === "all") {
        return await fetchCampaign();
      }
      return await fetchCampaignByCoreProgram(activeCategory);
    },
  });

  return (
    <div className="space-y-5">
      <h2 className="text-gray-900 text-3xl">Categories</h2>

      {/* Desktop View */}
      <div className="hidden md:flex flex-wrap gap-3">
        {staticCategories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                isActive ? "bg-[#268ece] shadow-lg shadow-[#268ece]/30 scale-105" : "bg-white border-2 border-gray-200 hover:border-[#268ece]/50 hover:shadow-md"
              }`}
            >
              <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${isActive ? "bg-white/20" : category.color}`}>
                <Icon className={`h-5 w-5 ${isActive ? "text-white" : category.iconColor}`} />
              </div>
              <span className={`text-sm transition-colors duration-300 ${isActive ? "text-white" : "text-gray-700 group-hover:text-[#268ece]"}`}>{category.label}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile View */}
      <div className="md:hidden grid grid-cols-3 gap-2.5">
        {staticCategories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`group relative flex flex-col items-center gap-1.5 px-2 py-2.5 rounded-xl transition-all duration-300 ${isActive ? "bg-[#268ece] shadow-lg shadow-[#268ece]/30" : "bg-white border-2 border-gray-200"}`}
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isActive ? "bg-white/20" : category.color}`}>
                <Icon className={`h-4 w-4 ${isActive ? "text-white" : category.iconColor}`} />
              </div>
              <span className={`text-[10px] transition-colors duration-300 text-center leading-tight ${isActive ? "text-white" : "text-gray-700"}`}>{category.label}</span>
            </button>
          );
        })}
      </div>

      {/* (Opsional) Debug: tampilkan jumlah data */}
      {!isLoading && data && <p className="text-sm text-gray-500 mt-3">Menampilkan {data.length} campaign</p>}
    </div>
  );
}
