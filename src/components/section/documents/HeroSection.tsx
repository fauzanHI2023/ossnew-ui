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
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="order-1 lg:order-2 relative">
            {/* Main Publication Preview Card */}
            <div className="relative">
              {/* Decorative Background Elements */}
              <motion.div
                animate={{
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-[#268ece]/10 to-blue-200/20 rounded-3xl -z-10 blur-3xl"
              />
              <motion.div
                animate={{
                  rotate: [0, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-[#268ece]/10 rounded-3xl -z-10 blur-3xl"
              />

              {/* Main Card */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1659945444219-40b443617621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwOTMxMzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    width={700}
                    height={600}
                    alt="Humanitarian Publication"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Badge on Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="absolute top-4 left-4 px-3 py-1.5 bg-[#268ece] text-white rounded-full text-xs backdrop-blur-sm"
                  >
                    Just Uploaded
                  </motion.div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-black mb-1 text-base">Annual Report 2024</h3>
                  <p className="text-gray-600 text-xs mb-3">Our comprehensive impact report highlighting humanitarian efforts across 50+ countries</p>

                  {/* Stats in Card */}
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-[#268ece] to-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs">
                          <BookOpen className="w-2.5 h-2.5" />
                        </div>
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-[#268ece] rounded-full border-2 border-white flex items-center justify-center text-white text-xs">
                          <FileText className="w-2.5 h-2.5" />
                        </div>
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white" />
                      </div>
                      <span className="text-xs text-gray-600">+2.4K readers</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-gray-600">75% engagement</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Mini Card - Impact Stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-3 backdrop-blur-sm border border-gray-100 max-w-[120px] hidden lg:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-gradient-to-br from-[#268ece] to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-black text-sm">50+</div>
                    <div className="text-xs text-gray-500">Countries</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Mini Card - Downloads */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -right-4 bottom-16 bg-white rounded-lg shadow-lg p-3 backdrop-blur-sm border border-gray-100 hidden lg:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-black text-sm">12.5K</div>
                    <div className="text-xs text-gray-500">Downloads</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
