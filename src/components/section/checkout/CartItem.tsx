import { Trash2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

interface CartItemProps {
  campaign_id: string | number;
  campaign_name: string;
  amount: number;
  campaign_img?: string;
  onDelete: (campaign_id: string | number) => void;
}

export function CartItem({ campaign_id, campaign_name, amount, campaign_img, onDelete }: CartItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="group relative flex items-center gap-4 p-4 bg-gradient-to-br from-white to-gray-50/50 rounded-xl border border-gray-200 hover:border-[#268ece]/30 hover:shadow-md transition-all duration-300"
    >
      <div className="relative">
        <Image src={`https://cdnx.human-initiative.org/image/${campaign_img}`} width={100} height={100} alt={campaign_name} className="w-24 h-24 rounded-lg object-cover shadow-sm" />
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#268ece] rounded-full flex items-center justify-center shadow-lg">
          <Package className="w-3 h-3 text-white" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-gray-900 group-hover:text-[#268ece] transition-colors">{campaign_name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[#268ece]">Rp {amount.toLocaleString("id-ID")}</span>
          <span className="text-xs text-gray-400">• Campaign aktif</span>
        </div>
      </div>
      <Button variant="ghost" size="icon" onClick={() => onDelete(campaign_id)} className="text-gray-400 hover:text-red-500 hover:bg-red-50 hover:scale-110 transition-all">
        <Trash2 className="w-5 h-5" />
      </Button>
    </motion.div>
  );
}
