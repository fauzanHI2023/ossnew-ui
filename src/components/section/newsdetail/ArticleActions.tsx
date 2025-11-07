import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThumbsUp, MessageCircle, Bookmark, Share2 } from "lucide-react";

interface ArticleActionsProps {
  likes: number;
  comments: number;
  tags: string[];
}

export function ArticleActions({ likes, comments, tags }: ArticleActionsProps) {
  return (
    <>
      {/* Enhanced Action Buttons */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap gap-4 mb-10">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-gradient-to-r from-[#268ece] to-[#1a6ba0] hover:shadow-xl hover:shadow-[#268ece]/30 transition-all rounded-xl px-6 py-6">
            <ThumbsUp className="h-5 w-5 mr-2" />
            Suka ({likes.toLocaleString()})
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" className="border-2 border-gray-200 hover:border-[#268ece] hover:bg-[#268ece]/5 hover:text-[#268ece] transition-all rounded-xl px-6 py-6">
            <MessageCircle className="h-5 w-5 mr-2" />
            Komentar ({comments})
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" className="border-2 border-gray-200 hover:border-[#268ece] hover:bg-[#268ece]/5 hover:text-[#268ece] transition-all rounded-xl px-6 py-6">
            <Bookmark className="h-5 w-5 mr-2" />
            Simpan
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-auto">
          <Button variant="outline" className="border-2 border-gray-200 hover:border-[#268ece] hover:bg-[#268ece]/5 hover:text-[#268ece] transition-all rounded-xl px-6 py-6">
            <Share2 className="h-5 w-5 mr-2" />
            Bagikan
          </Button>
        </motion.div>
      </motion.div>

      {/* Enhanced Tags */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap gap-3 items-center">
        <span className="text-sm text-gray-500">Tags:</span>
        {tags.map((tag, index) => (
          <motion.div key={tag} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + index * 0.05 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 hover:from-[#268ece]/10 hover:to-[#268ece]/5 hover:text-[#268ece] border border-gray-200 hover:border-[#268ece]/30 transition-all cursor-pointer px-4 py-2 rounded-xl"
            >
              #{tag}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
