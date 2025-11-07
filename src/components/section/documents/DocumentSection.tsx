"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CategoryFilter } from "./CategoryFilter";
import { NewsGrid } from "./DocumentGrid";
import { fetchDocument } from "../../../../services/publication/auth-document";
import { fetchLibrary, fetchLibraryByType, fetchMagazineLibrary, fetchCatalogLibrary, fetchCompanyProfileLibrary } from "../../../../services/publication/auth-library";

// Mapping kategori ke fungsi fetch API
const categoryMap: Record<string, () => Promise<any>> = {
  all: () => fetchLibrary(), // ✅ ambil semua berita dari endpoint utama
  magazine: () => fetchMagazineLibrary(),
  catalog: () => fetchCatalogLibrary(),
  companyprofile: () => fetchCompanyProfileLibrary(),
  document: () => fetchDocument(),
};

export function DocumentsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  // Gunakan TanStack Query
  const {
    data: documentItems = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["document", activeCategory],
    queryFn: async () => {
      const fetchFn = categoryMap[activeCategory] || categoryMap.all;
      const result = await fetchFn();

      // Handle jika respons API berbentuk { data: [...] }
      return Array.isArray(result) ? result : result?.data || [];
    },
    staleTime: 1000 * 60 * 5, // cache 5 menit
  });

  const visibleDocument = documentItems.slice(0, visibleCount);
  const hasMore = visibleCount < documentItems.length;

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setVisibleCount(6);
    refetch();
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
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
      <NewsGrid documentsItems={visibleDocument} hasMore={hasMore} onLoadMore={handleLoadMore} />
    </>
  );
}
