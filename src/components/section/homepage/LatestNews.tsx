"use client";
import { Calendar, ArrowRight, ChevronRight, Clock, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { SectionTitle } from "@/components/utility/SectionTitle";
import { fetchNews } from "../../../../services/publication/auth-news";
import { useQuery } from "@tanstack/react-query";
import { News } from "../../../../utils/types/news";
import Link from "next/link";

export function NewsSection() {
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
      setActiveCard(Math.min(newActiveCard, news.length - 1));
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const stripHtml = (html: string) => {
    if (typeof window !== "undefined") {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent || "";
    }
    return html;
  };

  const truncateAndStripHtml = (html: string, wordLimit: number) => {
    const plainText = stripHtml(html);
    const words = plainText.split(" ");
    return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "..." : "");
  };

  const {
    data: news = [],
    isLoading,
    isError,
  } = useQuery<News[]>({
    queryKey: ["news"],
    queryFn: fetchNews,
  });

  return (
    <section id="news" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionTitle title="Latest News & Updates" align="center" />

        {/* News Grid */}
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
              {news.slice(0, 3).map((item: any) => (
                <Link href={`news/${item.slug}`}>
                  <div key={item.id} className="snap-center flex-shrink-0 w-[85vw]">
                    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-2xl cursor-pointer h-full">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={item.news_integration ? `https://cdnx.human-initiative.org/image/${item.guid}` : `${item.guid}`}
                          alt={item.post_title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-[#268ece] text-white border-0"></Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-black mb-2 group-hover:text-[#268ece] transition-colors line-clamp-2">{item.post_title}</h3>
                        <p className="text-gray-600 mb-3 line-clamp-2 text-sm">{truncateAndStripHtml(item.post_content, 5)}</p>

                        {/* Meta Info */}
                        <div className="flex items-center gap-3 text-gray-500 text-xs">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(item.post_date)}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {news.slice(0, 3).map((item: any, index: any) => (
                <button
                  key={item.id}
                  onClick={() => scrollToCard(index)}
                  className={`transition-all duration-300 rounded-full ${activeCard === index ? "w-8 h-2 bg-[#268ece]" : "w-2 h-2 bg-gray-300"}`}
                  aria-label={`Go to news ${index + 1}`}
                />
              ))}
            </div>

            {/* Swipe Hint */}
            {activeCard < news.length - 1 && (
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
            {news.slice(0, 3).map((item: any) => (
              <Link href={`news/${item.slug}`}>
                <Card key={item.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-2xl cursor-pointer">
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={item.news_integration ? `https://cdnx.human-initiative.org/image/${item.guid}` : `${item.guid}`}
                      width={600}
                      height={400}
                      alt={item.post_title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/95 text-black border-0 backdrop-blur-sm shadow-lg"></Badge>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#268ece]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                        <ArrowUpRight className="w-6 h-6 text-[#268ece]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-black mb-3 group-hover:text-[#268ece] transition-colors line-clamp-2 min-h-[3.40rem]">{item.post_title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{truncateAndStripHtml(item.post_content, 12)}</p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-gray-500 text-xs">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(item.post_date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span></span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#268ece] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="bg-white border-2 border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white px-8">
            Semua Berita
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
