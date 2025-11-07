"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CategoryFilter } from "./CategoryFilter";
import { ReportsGrid } from "./ReportsGrid";
import { fetchPublicReports, fetchPublicReportByType, fetchAnnualReport, fetchFinancialReport, fetchFactsheetReport } from "../../../../services/publication/auth-public-report";
import { fetchSituationReports } from "../../../../services/publication/auth-situation-report";

// Mapping kategori ke fungsi fetch API
const categoryMap: Record<string, () => Promise<any>> = {
  all: () => fetchPublicReports(), // ✅ ambil semua berita dari endpoint utama
  annual: () => fetchAnnualReport(),
  financial: () => fetchFinancialReport(),
  factsheet: () => fetchFactsheetReport(),
  sitrep: () => fetchSituationReports(),
};

export function ReportsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);

  // Gunakan TanStack Query
  const {
    data: reportsItems = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["reports", activeCategory],
    queryFn: async () => {
      const fetchFn = categoryMap[activeCategory] || categoryMap.all;
      const result = await fetchFn();

      // Handle jika respons API berbentuk { data: [...] }
      return Array.isArray(result) ? result : result?.data || [];
    },
    staleTime: 1000 * 60 * 5, // cache 5 menit
  });

  const visibleReport = reportsItems.slice(0, visibleCount);
  const hasMore = visibleCount < reportsItems.length;

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setVisibleCount(8);
    refetch();
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  if (isLoading) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 animate-pulse">Loading news...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">Failed to load news. Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      <CategoryFilter activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      <ReportsGrid reportsItems={visibleReport} hasMore={hasMore} onLoadMore={handleLoadMore} />
    </>
  );
}
