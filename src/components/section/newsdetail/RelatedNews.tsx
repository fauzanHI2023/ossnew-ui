import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
}

interface RelatedNewsProps {
  articles: NewsItem[];
}

export function RelatedNews({ articles }: RelatedNewsProps) {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 relative overflow-hidden border-y border-gray-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#268ece]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1a6ba0]/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#268ece]/10 text-[#268ece] mb-4">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm">Trending</span>
          </div>
          <h2 className="text-black mb-3">Artikel Terkait Lainnya</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Jelajahi artikel menarik lainnya yang mungkin Anda suka</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div key={article.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <Card className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white rounded-2xl h-full">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image src={article.image} width={1000} height={800} alt={article.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 backdrop-blur-sm text-[#268ece] border-0 shadow-lg">{article.category}</Badge>
                  </div>

                  {/* Read More Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <ArrowRight className="h-5 w-5 text-[#268ece]" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="mb-3 text-black line-clamp-2 group-hover:text-[#268ece] transition-colors duration-300">{article.title}</h3>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">{article.excerpt}</p>

                  <div className="flex items-center gap-2 text-sm text-[#268ece] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Baca selengkapnya</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
