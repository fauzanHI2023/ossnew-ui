import { Check, Lock, Sparkles, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { toast } from "sonner";

interface SummarySidebarProps {
  campaignCount: number;
  subtotal: number;
  total: number;
  isCartComplete: boolean;
  isContactComplete: boolean;
  isPaymentComplete: boolean;
  onPay: () => void;
  isProcessing: boolean;
}

export function SummarySidebar({ campaignCount, subtotal, total, isCartComplete, isContactComplete, isPaymentComplete, onPay, isProcessing }: SummarySidebarProps) {
  const canCheckout = isCartComplete && isContactComplete && isPaymentComplete;

  return (
    <div className="sticky top-24 hidden lg:block">
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-gray-900">Ringkasan</h2>
          <Badge variant="secondary" className="ml-auto bg-teal-100 text-teal-700 border-0 text-xs">
            <Sparkles className="w-3 h-3 mr-1" />
            Berbagi Kebaikan
          </Badge>
        </div>

        {/* Compact Checklist */}
        <div className="mb-4 flex items-center gap-2 text-xs">
          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${isCartComplete ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] hover:shadow-xl hover:shadow-[#268ece]/40" : "bg-gray-300"}`}>
            {isCartComplete && <Check className="w-2.5 h-2.5 text-white" />}
          </div>
          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${isContactComplete ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] hover:shadow-xl hover:shadow-[#268ece]/40" : "bg-gray-300"}`}>
            {isContactComplete && <Check className="w-2.5 h-2.5 text-white" />}
          </div>
          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${isPaymentComplete ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] hover:shadow-xl hover:shadow-[#268ece]/40" : "bg-gray-300"}`}>
            {isPaymentComplete && <Check className="w-2.5 h-2.5 text-white" />}
          </div>
          <span className="text-gray-500 ml-1">{[isCartComplete, isContactComplete, isPaymentComplete].filter(Boolean).length}/3 selesai</span>
        </div>

        <div className="space-y-2 text-sm mb-4">
          <div className="flex justify-between text-gray-600">
            <span>Total ({campaignCount})</span>
            <span>Rp {subtotal.toLocaleString("id-ID")}</span>
          </div>

          <Separator className="my-2" />

          <div className="flex justify-between text-gray-900 bg-[#268ece]/5 p-3 rounded-lg">
            <span>Total</span>
            <span className="font-semibold">Rp {total.toLocaleString("id-ID")}</span>
          </div>
        </div>

        {/* Sticky Checkout Button */}
        <motion.div whileHover={{ scale: canCheckout && !isProcessing ? 1.02 : 1 }} whileTap={{ scale: canCheckout && !isProcessing ? 0.98 : 1 }}>
          <Button
            onClick={onPay}
            disabled={!canCheckout || isProcessing}
            className="relative w-full h-12 rounded-xl bg-gradient-to-r from-[#268ece] via-[#1e7ab8] to-[#268ece] hover:shadow-xl text-white shadow-lg shadow-[#268ece]/30 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
            style={{ backgroundSize: "200% 100%" }}
          >
            {/* Shimmer Effect */}
            {canCheckout && !isProcessing && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )}

            <div className="relative flex items-center justify-center gap-2">
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Memproses Pembayaran...</span>
                </>
              ) : canCheckout ? (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Bayar Sekarang</span>
                </>
              ) : (
                <span>Lengkapi Form</span>
              )}
            </div>
          </Button>
        </motion.div>

        <div className="mt-4 p-3 bg-gradient-to-br from-[#268ece]/10 to-[#268ece]/5 rounded-lg border border-[#268ece]/20">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#268ece]" />
            <p className="text-xs text-gray-700">SSL 256-bit encrypted</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
