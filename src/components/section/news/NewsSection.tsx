"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CategoryFilter } from "./CategoryFilter";
import { NewsGrid } from "./NewsGrid";
import { fetchNews, fetchCollaborateNews, fetchStoriesNews, fetchNewsNews, fetchInfrastructureNews, fetchNewsByHashtagProgram } from "../../../../services/publication/auth-news";
import { fetchEvents } from "../../../../services/publication/auth-event";

// Definisi tipe news
interface NewsItem {
  id: string | number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  large?: boolean;
}

// Mapping kategori ke fungsi fetch API
const categoryMap: Record<string, () => Promise<any>> = {
  all: () => fetchNews(), // ✅ ambil semua berita dari endpoint utama
  action: () => fetchNewsByHashtagProgram("action"),
  story: () => fetchNewsByHashtagProgram("story"),
  partnership: () => fetchNewsByHashtagProgram("partnership"),
  collaborate: () => fetchCollaborateNews(),
  stories: () => fetchStoriesNews(),
  news: () => fetchNewsNews(),
  event: () => fetchEvents(),
};

export function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  // Gunakan TanStack Query
  const {
    data: newsItems = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["news", activeCategory],
    queryFn: async () => {
      const fetchFn = categoryMap[activeCategory] || categoryMap.all;
      const result = await fetchFn();

      // Handle jika respons API berbentuk { data: [...] }
      return Array.isArray(result) ? result : result?.data || [];
    },
    staleTime: 1000 * 60 * 5, // cache 5 menit
  });

  const visibleNews = newsItems.slice(0, visibleCount);
  const hasMore = visibleCount < newsItems.length;

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
      <NewsGrid newsItems={visibleNews} hasMore={hasMore} onLoadMore={handleLoadMore} />
    </>
  );
}
