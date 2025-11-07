import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <div className="bg-white pt-20 relative z-0">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div initial={{ opacity: 1, x: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-4 px-4 py-2 bg-[#268ece]/10 border border-[#268ece]/30 rounded-full text-[#268ece] text-sm font-semibold"
            >
              Initiative for Disaster
            </motion.div>

            <motion.h1 initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-gray-900 mb-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Building Hope Together in Times of Disaster
            </motion.h1>

            <motion.p initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
              We deliver emergency relief, recovery, and empowerment to communities affected by natural disasters across Indonesia
            </motion.p>

            <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#268ece] hover:bg-[#1e7bb8] text-white gap-2 group shadow-xl shadow-[#268ece]/30">
                Help Now
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>

              <Button size="lg" variant="outline" className="border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white gap-2 transition-all shadow-md">
                <Play className="w-5 h-5" />
                Watch Video
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-8 flex flex-wrap gap-4 lg:gap-6">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-[#268ece] rounded-full" />
                <span className="text-sm">Transparent & Accountable</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-[#268ece] rounded-full" />
                <span className="text-sm">Certified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-[#268ece] rounded-full" />
                <span className="text-sm">15 Years of Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div initial={{ opacity: 1, x: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1738743610025-6ebe3e13f7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlbGllZiUyMGh1bWFuaXRhcmlhbnxlbnwxfHx8fDE3NjA1MTIzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                width={900}
                height={800}
                alt="Disaster Relief"
                className="w-full h-[350px] lg:h-[450px] object-cover"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#268ece] rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#268ece]/20 rounded-2xl -z-10" />
            </div>

            {/* Floating Stats Card */}
            <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-xs hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#268ece]/10 rounded-xl flex items-center justify-center">
                  <span className="text-xl">❤️</span>
                </div>
                <div>
                  <div className="text-gray-900 text-xl font-bold">250K+</div>
                  <div className="text-xs text-gray-600">Lives Impacted</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
