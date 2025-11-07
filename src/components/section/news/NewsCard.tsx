import { Calendar, ChevronRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "../../../../data/news";
import { Card } from "@/components/ui/card";

export function NewsCard({ post_title, excerpt, post_date, category, image, large = false, news_integration, guid, slug, category_posts }: NewsItem) {
  return (
    <Card className="border-none">
      {/* Card Container with subtle border and shadow */}
      <Link href={`news/${slug}`} className="group cursor-pointer h-full flex flex-col">
        <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#268ece]/10 transition-all duration-500 hover:-translate-y-2">
          {/* Image */}
          <div className={`relative overflow-hidden bg-gray-100 flex-shrink-0 ${large ? "h-[400px]" : "h-[240px]"}`}>
            <Image
              src={news_integration ? `https://cdnx.human-initiative.org/image/${guid}` : `${guid}`}
              width={800}
              height={600}
              alt={post_title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-md text-[#268ece] text-xs rounded-lg shadow-lg border border-white/20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#268ece] animate-pulse"></div>
                {category_posts === "collaborate" && "Collaborate"}
                {category_posts === "stories" && "Stories"}
                {category_posts === "news" && "News"}
              </span>
            </div>

            {/* Date Badge - Bottom Right */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md text-white text-xs rounded-lg">
              <Clock className="h-3 w-3" />
              <span>
                {new Date(post_date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#268ece]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col p-5 lg:p-6 flex-grow">
            <h3 className={`text-black group-hover:text-[#268ece] transition-colors duration-300 leading-tight mb-3 flex-grow ${large ? "text-2xl lg:text-3xl" : "text-lg"}`}>{post_title}</h3>

            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">{excerpt}</p>

            {/* Read More Link */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
              <div className="flex items-center text-[#268ece] group-hover:gap-2 gap-1 transition-all duration-300">
                <span className="text-sm">Read more</span>
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>

              {/* Reading Time Indicator */}
              <span className="text-xs text-gray-400">3 min read</span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}
