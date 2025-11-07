import { Calendar, ChevronRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DocumentsItems } from "../../../../data/documents";
import { motion } from "motion/react";
import { ArrowRight, Download, Eye } from "lucide-react";

export function NewsCard({ title, created_at, type_report, cover, img, index, link, file, large = false }: DocumentsItems) {
  const imageUrl = cover || img;
  const fileUrl = link || file;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} whileHover={{ y: -8 }} className="group cursor-pointer">
      {/* Card Container with subtle border and shadow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={`https://cdnx.human-initiative.org/image/${imageUrl}`} width={800} height={600} alt={title} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Action Buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#268ece] text-gray-600 hover:text-white transition-colors"
            >
              <Eye className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#268ece] text-gray-600 hover:text-white transition-colors"
            >
              <Link href={`https://cdnx.human-initiative.org/filePublic/${fileUrl}`}>
                <Download className="w-5 h-5" />
              </Link>
            </motion.button>
          </div>

          {/* Title Overlay - visible on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <h4 className="text-white mb-1">{title}</h4>
          </div>
        </div>

        {/* Bottom Info - visible by default, hidden on hover */}
        <div className="p-4 group-hover:opacity-0 transition-opacity duration-300">
          <h4 className="text-black mb-1 truncate">{title}</h4>
        </div>
      </motion.div>
    </motion.div>
  );
}
