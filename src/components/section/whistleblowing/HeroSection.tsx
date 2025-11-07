"use client";
import { motion } from "motion/react";
import { Shield, ArrowRight, Lock, Eye, UserCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { formLink } from "../../../../data/violation";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative grid lg:grid-cols-2 min-h-[90vh] items-center">
        {/* Left Content */}
        <div className="relative z-10 px-6 py-24 lg:py-32 lg:pl-16 xl:pl-24">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-xl">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#268ece]/10 text-[#268ece] mb-6 border border-[#268ece]/20"
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm">Whistleblowing System</span>
            </motion.div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">A safe and trusted channel to report suspected violations. Together, we create an environment of integrity and accountability.</p>

            {/* Feature Cards */}
            <div className="space-y-3 mb-8">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-[#268ece]/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-[#268ece]" />
                </div>
                <div>
                  <h4 className="text-black text-sm mb-0.5">Confidentiality Guaranteed</h4>
                  <p className="text-xs text-gray-600">Your identity is fully protected</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-[#268ece]/10 flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-5 h-5 text-[#268ece]" />
                </div>
                <div>
                  <h4 className="text-black text-sm mb-0.5">Whistleblower Protection</h4>
                  <p className="text-xs text-gray-600">Free from retaliation</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-[#268ece]/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-[#268ece]" />
                </div>
                <div>
                  <h4 className="text-black text-sm mb-0.5">Transparent Process</h4>
                  <p className="text-xs text-gray-600">Professional and measured handling</p>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex items-center gap-4">
              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#268ece] to-[#2a9de8] text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>Report Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#268ece] to-[#1a6ba8] border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#268ece] to-[#2a9de8] border-2 border-white"></div>
                  </div>
                  <span className="text-xs">Trusted by thousands</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="relative h-full min-h-[600px] lg:min-h-[90vh] flex items-center justify-center px-6 lg:px-12">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-72 h-72 bg-[#268ece]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#2a9de8]/5 rounded-full blur-3xl"></div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative w-full max-w-xl z-10">
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#268ece]/20 to-[#1a6ba8]/10 rounded-3xl blur-2xl"></div>

              {/* Image Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-3 border border-gray-100">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1758520145175-aa3b593b81af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NjA1NDIyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    width={1000}
                    height={800}
                    alt="Professional Business Environment"
                    className="w-full h-[500px] object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#268ece]/10 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating Badge - Top Right */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.6 }} className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Security Status</p>
                    <p className="text-black">Protected</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#268ece] to-[#1a6ba8] rounded-2xl shadow-2xl p-5 text-white"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/80">Accountability</p>
                    <p className="text-white">Transparent</p>
                  </div>
                </div>
              </motion.div>

              {/* Small accent badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute top-1/2 -left-4 w-12 h-12 bg-gradient-to-br from-[#268ece] to-[#2a9de8] rounded-full shadow-lg flex items-center justify-center"
              >
                <Lock className="w-5 h-5 text-white" />
              </motion.div>

              {/* Small accent badge 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute bottom-1/4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100"
              >
                <UserCheck className="w-4 h-4 text-[#268ece]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-[2]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
