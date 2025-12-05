"use client";
import { motion } from "motion/react";
import { BookOpen, FileText, TrendingUp, Users, Star } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white xl:mt-[4rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-full mb-4">
              <div className="w-2 h-2 bg-[#268ece] rounded-full animate-pulse" />
              <span className="text-[#268ece] text-sm">Human Initiative Publications</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-black mb-5 text-3xl sm:text-4xl">
              Explore Knowledge that Drives <span className="text-[#268ece]">Humanitarian Action</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="text-gray-600 mb-8 max-w-xl leading-relaxed text-sm sm:text-base">
              Access our collection of reports, situation updates, research papers, and policy briefs that reflect Human Initiative's ongoing efforts to build a more inclusive and resilient world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap items-center gap-4 mb-10">
              <button className="px-8 py-3 bg-[#268ece] text-white rounded-lg hover:bg-[#1f7bb8] transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2 text-sm">
                <BookOpen className="w-5 h-5" />
                Browse Publications
              </button>
              <button className="px-8 py-3 bg-white text-[#268ece] border-2 border-[#268ece] rounded-lg hover:bg-[#268ece] hover:text-white transition-all flex items-center gap-2 text-sm">
                <FileText className="w-5 h-5" />
                View Latest Reports
              </button>
            </motion.div>

            {/* Metrics Row */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }} className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#268ece] to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-black text-lg">250+</span>
                  </div>
                  <p className="text-gray-600 text-xs">Humanitarian Reports</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-black text-lg">100+</span>
                  </div>
                  <p className="text-gray-600 text-xs">Partner Collaborations</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-black text-lg">98%</span>
                  </div>
                  <p className="text-gray-600 text-xs">Reader Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image/Card Preview */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image Container */}
            <div className="relative h-[320px] lg:h-[450px]">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#268ece]/20 to-[#268ece]/5 rounded-3xl transform rotate-3"></div>

              {/* Image */}
              <div className="relative h-full overflow-hidden rounded-3xl shadow-2xl">
                <Image src="/latest/DSC02124-scaled (1).jpg" width={800} height={700} alt="Humanitarian workers in action" className="w-full h-full object-cover" />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 lg:left-0 bg-white px-5 py-3 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
                <p className="text-xs text-gray-600">Making Impact Since</p>
                <p className="text-xl text-[#268ece]">2005</p>
              </div>

              {/* Decorative Dot Pattern */}
              <div className="absolute -top-6 -right-6 w-24 h-24 opacity-20 hidden lg:block">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-[#268ece]"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
