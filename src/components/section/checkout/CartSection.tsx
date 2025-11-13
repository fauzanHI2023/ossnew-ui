import { ShoppingCart, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CartItem } from "./CartItem";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useCart } from "../../../../context/CartContext";

export function CartSection() {
  const { cartItems, removeItemFromCart } = useCart();

  const isCartComplete = cartItems.length > 0;

  const handleDeleteCampaign = (campaign_id: number) => {
    removeItemFromCart(campaign_id);
    toast.success("Campaign berhasil dihapus dari keranjang");
  };

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/50">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isCartComplete ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] hover:shadow-xl hover:shadow-[#268ece]/40 text-white" : "bg-[#268ece]/10 text-[#268ece]"}`}>
            {isCartComplete ? <Check className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
          </div>
          <div>
            <h2 className="text-gray-900">Campaign Anda</h2>
            <p className="text-sm text-gray-500">{cartItems.length} item dalam keranjang</p>
          </div>
        </div>
        {cartItems.length > 0 && (
          <Badge className="bg-[#268ece] text-white">
            <Sparkles className="w-3 h-3 mr-1" />
            Sedang Berlangsung
          </Badge>
        )}
      </div>

      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-500">Keranjang Anda kosong</p>
            <p className="text-sm text-gray-400 mt-1">Tambahkan campaign untuk melanjutkan</p>
          </div>
        ) : (
          <AnimatePresence>
            {cartItems.map((campaign) => (
              <CartItem key={campaign.campaign_id} {...campaign} onDelete={() => handleDeleteCampaign(campaign.campaign_id)} />
            ))}
          </AnimatePresence>
        )}
      </div>
    </motion.section>
  );
}
