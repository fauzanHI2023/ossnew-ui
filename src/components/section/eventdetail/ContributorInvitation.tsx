import { motion } from "motion/react";
import { Edit3, LogIn, Users, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ContributorInvitation() {
  const stats = [
    { icon: Users, value: "120+", label: "Contributors Worldwide" },
    { icon: FileText, value: "500+", label: "Humanitarian Stories" },
  ];

  const steps = [
    { number: 1, label: "Sign Up" },
    { number: 2, label: "Submit Article" },
    { number: 3, label: "Get Published" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-gray-50 to-blue-50 relative overflow-hidden border-y-2 border-[#007BBD]/10">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#007BBD]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#007BBD]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1630068846062-3ffe78aa5049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwY29sbGFib3JhdGluZyUyMGh1bWFuaXRhcmlhbnxlbnwxfHx8fDE3NjA5MzUwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  width={100}
                  height={100}
                  alt="Diverse humanitarian contributors collaborating"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#007BBD]/40 via-transparent to-transparent" />

                {/* Floating Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-gray-800">Join Our Community</span>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 grid grid-cols-4 gap-2 opacity-30">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#007BBD]" />
                ))}
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#007BBD]/10 border border-[#007BBD]/20"
              >
                <Edit3 className="h-4 w-4 text-[#007BBD]" />
                <span className="text-sm text-[#007BBD]">For Writers & Storytellers</span>
              </motion.div>

              {/* Title */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <h2 className="text-black mb-4 leading-tight">Become a Contributor</h2>
                <p className="text-lg text-gray-600 leading-relaxed">Join our network of storytellers, field writers, and humanitarian professionals who share knowledge, experience, and compassion with the world.</p>
              </motion.div>

              {/* Stats */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-[#007BBD]/30 transition-all group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#007BBD]/5 rounded-bl-3xl rounded-tr-2xl transition-all group-hover:bg-[#007BBD]/10" />
                    <stat.icon className="h-8 w-8 text-[#007BBD] mb-3 relative z-10" />
                    <div className="relative z-10">
                      <div className="text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#007BBD] to-[#005a8f] hover:from-[#006aa8] hover:to-[#004d78] text-white shadow-lg shadow-[#007BBD]/30 hover:shadow-xl hover:shadow-[#007BBD]/40 transition-all rounded-xl px-8 h-14"
                  >
                    <Edit3 className="h-5 w-5 mr-2" />
                    Sign Up to Contribute
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-[#007BBD] hover:bg-[#007BBD]/5 hover:text-[#007BBD] transition-all rounded-xl px-8 h-14">
                    <LogIn className="h-5 w-5 mr-2" />
                    Log In
                  </Button>
                </motion.div>
              </motion.div>

              {/* Learn More Link */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                <a href="#" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#007BBD] transition-colors group">
                  <CheckCircle className="h-4 w-4" />
                  Learn how to become a verified author
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* User Flow Steps */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between max-w-md">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#007BBD] to-[#005a8f] flex items-center justify-center text-white shadow-lg">{step.number}</div>
                        <span className="text-xs text-gray-600 text-center whitespace-nowrap">{step.label}</span>
                      </div>
                      {index < steps.length - 1 && <div className="w-16 h-0.5 bg-gradient-to-r from-[#007BBD] to-gray-300 mx-2 mt-[-20px]" />}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
