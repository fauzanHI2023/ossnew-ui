import { Trash2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onDelete: (id: string) => void;
}

export function CartItem({ id, name, price, image, onDelete }: CartItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="group relative flex items-center gap-4 p-4 bg-gradient-to-br from-white to-gray-50/50 rounded-xl border border-gray-200 hover:border-[#268ece]/30 hover:shadow-md transition-all duration-300"
    >
      <div className="relative">
        <Image src={image} width={100} height={100} alt={name} className="w-24 h-24 rounded-lg object-cover shadow-sm" />
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#268ece] rounded-full flex items-center justify-center shadow-lg">
          <Package className="w-3 h-3 text-white" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-gray-900 group-hover:text-[#268ece] transition-colors">{name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[#268ece]">Rp {price.toLocaleString("id-ID")}</span>
          <span className="text-xs text-gray-400">• Campaign aktif</span>
        </div>
      </div>
      <Button variant="ghost" size="icon" onClick={() => onDelete(id)} className="text-gray-400 hover:text-red-500 hover:bg-red-50 hover:scale-110 transition-all">
        <Trash2 className="w-5 h-5" />
      </Button>
    </motion.div>
  );
}
