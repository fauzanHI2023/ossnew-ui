import { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, CreditCard, Building2, Hash, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface PaymentConfirmationProps {
  onConfirm: () => void;
}

export default function PaymentConfirmation({ onConfirm }: PaymentConfirmationProps) {
  const [copied, setCopied] = useState(false);

  // Mock data - dapat diganti dengan data real
  const transactionNumber = "TRX-2025-11-14-001234";
  const totalAmount = "Rp 2.500.000";
  const accountNumber = "1234567890";
  const bankName = "Bank Mandiri";
  const accountName = "PT. Example Company";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    toast.success("Nomor rekening berhasil disalin!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#268ece] opacity-5"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#268ece] opacity-5"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-2xl relative z-10">
        {/* Floating icon animation */}
        <motion.div className="flex justify-center mb-8" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }}>
          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#268ece] to-[#1a6ba3] flex items-center justify-center shadow-2xl shadow-[#268ece]/30">
              <CreditCard className="w-12 h-12 text-white" />
            </div>
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#268ece]"
              animate={{
                scale: [1, 1.5],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Main card */}
        <motion.div className="bg-white rounded-3xl shadow-2xl shadow-black/5 border border-gray-100 overflow-hidden" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#268ece] to-[#1a6ba3] px-8 py-6">
            <motion.h1 className="text-white text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              Konfirmasi Pembayaran
            </motion.h1>
            <motion.p className="text-white/90 text-center mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              Silakan transfer ke rekening berikut
            </motion.p>
          </div>

          {/* Content */}
          <div className="px-8 py-10 space-y-6">
            {/* Transaction Number */}
            <motion.div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
              <div className="w-10 h-10 rounded-xl bg-[#268ece]/10 flex items-center justify-center flex-shrink-0">
                <Hash className="w-5 h-5 text-[#268ece]" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 mb-1">No. Transaksi</p>
                <p className="text-black">{transactionNumber}</p>
              </div>
            </motion.div>

            {/* Total Amount */}
            <motion.div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
              <div className="w-10 h-10 rounded-xl bg-[#268ece]/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-[#268ece]" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 mb-1">Total Pembayaran</p>
                <p className="text-black text-2xl">{totalAmount}</p>
              </div>
            </motion.div>

            {/* Bank Account Details */}
            <motion.div className="p-6 rounded-2xl bg-gradient-to-br from-[#268ece]/5 to-[#268ece]/10 border-2 border-[#268ece]/20" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#268ece] flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-500">Bank Tujuan</p>
                  <p className="text-black">{bankName}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-gray-500 mb-1">Nomor Rekening</p>
                  <div className="flex items-center gap-3">
                    <p className="text-black text-xl flex-1">{accountNumber}</p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button onClick={handleCopy} variant="outline" size="sm" className="border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white transition-all duration-300">
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Tersalin
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Salin
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-500 mb-1">Atas Nama</p>
                  <p className="text-black">{accountName}</p>
                </div>
              </div>
            </motion.div>

            {/* Info box */}
            <motion.div className="p-4 rounded-2xl bg-amber-50 border border-amber-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              <p className="text-amber-800 text-center">⚠️ Pastikan jumlah transfer sesuai dengan nominal yang tertera</p>
            </motion.div>

            {/* Confirm button */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button onClick={onConfirm} className="w-full bg-gradient-to-r from-[#268ece] to-[#1a6ba3] hover:from-[#1a6ba3] hover:to-[#268ece] text-white py-6 rounded-2xl shadow-lg shadow-[#268ece]/30 transition-all duration-300">
                  Konfirmasi Pembayaran
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.p className="text-center text-gray-400 mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          Dengan mengkonfirmasi, Anda menyetujui bahwa pembayaran telah dilakukan
        </motion.p>
      </motion.div>
    </div>
  );
}
