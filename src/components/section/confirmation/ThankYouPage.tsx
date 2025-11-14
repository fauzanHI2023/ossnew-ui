import { motion } from "motion/react";
import { CheckCircle2, Download, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#268ece] opacity-5"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#268ece] opacity-5"
          animate={{
            scale: [1.5, 1, 1.5],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Success icon with animation */}
        <motion.div className="flex justify-center mb-8" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}>
          <div className="relative">
            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-br from-[#268ece] to-[#1a6ba3] flex items-center justify-center shadow-2xl shadow-[#268ece]/30"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring", stiffness: 300 }}>
                <CheckCircle2 className="w-16 h-16 text-white" />
              </motion.div>
            </motion.div>

            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#268ece]"
              initial={{ scale: 1, opacity: 0 }}
              animate={{
                scale: [1, 2],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div className="text-center space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <h1 className="text-black mb-4">Terima Kasih!</h1>
            <p className="text-gray-600 text-xl">Konfirmasi pembayaran Anda telah diterima</p>
          </motion.div>

          {/* Info card */}
          <motion.div className="bg-white rounded-3xl shadow-2xl shadow-black/5 border border-gray-100 p-8 mt-8" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.5 }}>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#268ece]/5 to-[#268ece]/10 border border-[#268ece]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#268ece] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-black mb-2">Status Pembayaran</p>
                    <p className="text-gray-600">Pembayaran Anda sedang dalam proses verifikasi. Kami akan mengirimkan notifikasi setelah pembayaran dikonfirmasi.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div className="p-4 rounded-2xl bg-gray-50 border border-gray-100" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <p className="text-gray-500 mb-2">Waktu Proses</p>
                  <p className="text-black">1-3 Jam Kerja</p>
                </motion.div>

                <motion.div className="p-4 rounded-2xl bg-gray-50 border border-gray-100" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <p className="text-gray-500 mb-2">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <p className="text-black">Menunggu Verifikasi</p>
                  </div>
                </motion.div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                <p className="text-blue-800 text-center">📧 Email konfirmasi telah dikirim ke alamat email Anda</p>
              </div>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full bg-gradient-to-r from-[#268ece] to-[#1a6ba3] hover:from-[#1a6ba3] hover:to-[#268ece] text-white py-6 rounded-2xl shadow-lg shadow-[#268ece]/30 transition-all duration-300">
                <Home className="w-5 h-5 mr-2" />
                Kembali ke Beranda
              </Button>
            </motion.div>

            <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" className="w-full border-2 border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white py-6 rounded-2xl transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Unduh Bukti
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer text */}
        <motion.div className="mt-12 text-center space-y-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
          <p className="text-gray-400">Butuh bantuan? Hubungi customer service kami</p>
          <p className="text-[#268ece]">support@example.com | +62 812-3456-7890</p>
        </motion.div>
      </div>
    </div>
  );
}
