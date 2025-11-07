import { ChevronRight } from "lucide-react";
import { NewsCard } from "./NewsCard";
import { NewsItem } from "../../../../data/news";

interface NewsGridProps {
  newsItems: NewsItem[];
  hasMore: boolean;
  onLoadMore: () => void;
}

export function NewsGrid({ newsItems, hasMore, onLoadMore }: NewsGridProps) {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Featured Article */}
        {newsItems.length > 0 && newsItems[0].large && (
          <div className="mb-12">
            <NewsCard {...newsItems[0]} />
          </div>
        )}

        {/* Grid Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {newsItems.slice(newsItems[0]?.large ? 1 : 0).map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-12">
            <button onClick={onLoadMore} className="inline-flex items-center px-8 py-3 border-2 border-[#268ece] text-[#268ece] rounded-full hover:bg-[#268ece] hover:text-white transition-all">
              <span>Load More</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        )}

        {/* No Results */}
        {newsItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No articles found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
}
