import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye, TrendingUp, Zap, ThumbsUp, MessageCircle } from "lucide-react";
import { fetchNews } from "../../../../services/publication/auth-news";
import { News } from "@/app/types/news";

interface HeroSectionProps {
  post: News;
}

export function HeroSection({ post }: HeroSectionProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb & Category */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-8">
          <a href="/" className="text-sm text-gray-500 hover:text-[#268ece] transition-colors">
            Beranda
          </a>
          <span className="text-gray-300">/</span>
          <a href="/news" className="text-sm text-gray-500 hover:text-[#268ece] transition-colors">
            News
          </a>
          <span className="text-gray-300">/</span>
          <span className="text-sm text-gray-700">Detail</span>
        </motion.div>

        {/* Category Badge with Animation */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
          <Badge className="bg-gradient-to-r from-[#268ece] to-[#1a6ba0] hover:shadow-lg hover:shadow-[#268ece]/30 transition-all px-4 py-2 text-sm">
            <Zap className="h-3.5 w-3.5 mr-1.5" />
            Category
          </Badge>
        </motion.div>

        {/* Title with Gradient */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8 text-black leading-tight max-w-4xl bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text">
          {post.post_title}
        </motion.h1>

        {/* Enhanced Meta Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center gap-6 mb-10">
          {[
            { icon: Calendar, label: post.post_date, color: "text-purple-600" },
            { icon: Clock, label: post.post_date, color: "text-blue-600" },
            { icon: Eye, label: `${post.post_date.toLocaleString()} views`, color: "text-green-600" },
            { icon: TrendingUp, label: "Trending", color: "text-orange-600" },
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 transition-all cursor-pointer group">
              <div
                className={`h-8 w-8 rounded-lg bg-gradient-to-br ${
                  item.color === "text-purple-600"
                    ? "from-purple-100 to-purple-50"
                    : item.color === "text-blue-600"
                    ? "from-blue-100 to-blue-50"
                    : item.color === "text-green-600"
                    ? "from-green-100 to-green-50"
                    : "from-orange-100 to-orange-50"
                } flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <item.icon className={`h-4 w-4 ${item.color}`} />
              </div>
              <span className="text-sm text-gray-700">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Image with Parallax Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl hover:shadow-3xl transition-shadow group"
        >
          <Image src={`https://cdnx.human-initiative.org/image/${post.guid}`} width={1000} height={800} alt={post.post_title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Floating Stats */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div className="flex gap-3">
              {/* Likes */}
              <div className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md shadow-lg flex items-center gap-2">
                <ThumbsUp className="h-4 w-4 text-[#268ece]" />
                <span className="text-sm text-black">24</span>
              </div>
              {/* Comment */}
              <div className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md shadow-lg flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[#268ece]" />
                <span className="text-sm text-black">30</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
