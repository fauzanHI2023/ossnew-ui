import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Lock, ChevronUp, ShoppingCart, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

interface FloatingCheckoutBarProps {
  total: number;
  itemCount: number;
  isCartComplete: boolean;
  isContactComplete: boolean;
  isPaymentComplete: boolean;
  onPay: () => void;
  isProcessing: boolean;
}

export function FloatingCheckoutBar({ total, itemCount, isCartComplete, isContactComplete, onPay, isPaymentComplete }: FloatingCheckoutBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const { scrollY } = useScroll();

  const canCheckout = isCartComplete && isContactComplete && isPaymentComplete;

  const handleCheckout = async () => {
    if (!canCheckout) {
      toast.error("Mohon lengkapi semua informasi checkout");
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2500));

    setIsProcessing(false);
    setShowSuccessDialog(true);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;

    // Hide when at the very top (less than 150px from top)
    if (currentScrollY < 150) {
      setIsVisible(false);
      setIsExpanded(false); // Also collapse when hiding
    }
    // Show when scrolling past 150px
    else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  });

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 120,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 35,
            }}
            className="fixed bottom-0 left-0 right-0 z-[100]"
          >
            <motion.div className="relative overflow-hidden" whileHover={{ y: isExpanded ? 0 : -2 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#268ece]/5" />

              {/* Animated Accent Line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#268ece] via-teal-500 to-[#268ece]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 100%" }}
              />

              <div className="relative bg-white/80 backdrop-blur-2xl border-t border-gray-200/50 shadow-2xl shadow-[#268ece]/10">
                {/* Expandable Summary */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <div className="px-4 pt-4 pb-2">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Total Donasi ({itemCount} campaign)</span>
                          <span>Rp {(total - 5000).toLocaleString("id-ID")}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 mb-3">
                          <span>Biaya Layanan</span>
                          <span>Rp 5.000</span>
                        </div>
                        <Separator className="mb-2" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Main Bar */}
                <div className="px-4 py-3">
                  <div className="flex items-center justify-between gap-4">
                    <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-3 text-left flex-1 min-w-0 group">
                      <motion.div
                        className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-hi-blue-500 to-hi-blue-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#268ece]/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ShoppingCart className="w-5 h-5 text-white" />
                        {itemCount > 0 && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs shadow-lg">
                            {itemCount}
                          </motion.div>
                        )}
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 flex items-center gap-1.5">
                          Total Pembayaran
                          <Sparkles className="w-3 h-3 text-teal-500" />
                        </p>
                        <p className="text-gray-900">Rp {total.toLocaleString("id-ID")}</p>
                      </div>
                      <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3, type: "spring" }} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </button>

                    <motion.div whileHover={{ scale: canCheckout && !isProcessing ? 1.02 : 1 }} whileTap={{ scale: canCheckout && !isProcessing ? 0.98 : 1 }}>
                      <Button
                        onClick={onPay}
                        disabled={!canCheckout || isProcessing}
                        className="relative h-12 px-7 rounded-xl bg-gradient-to-r from-[#268ece] via-[#1e7ab8] to-[#268ece] hover:shadow-2xl text-white shadow-lg shadow-[#268ece]/40 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
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

                        <div className="relative flex items-center gap-2">
                          {isProcessing ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Memproses...</span>
                            </>
                          ) : (
                            <>
                              <Lock className="w-4 h-4" />
                              <span>Bayar Sekarang</span>
                            </>
                          )}
                        </div>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
