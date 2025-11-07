"use client";
import { motion } from "motion/react";
import { Heart, Users, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CallToAction() {
  const ways = [
    {
      icon: Heart,
      title: "Donate",
      description: "Every donation helps save and restore lives",
      color: "from-[#268ece] to-[#1e7bb8]",
      action: "Donate Now",
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our volunteer team in the field",
      color: "from-black to-gray-700",
      action: "Register Now",
    },
    {
      icon: Share2,
      title: "Share",
      description: "Help us reach more people by sharing this mission",
      color: "from-[#268ece] to-[#1e7bb8]",
      action: "Share Now",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative z-10">
      <div className="container mx-auto px-4">
        {/* Main CTA Banner */}
        <div className="relative bg-gradient-to-r from-[#268ece] via-[#1e7bb8] to-[#268ece] rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Heart className="w-10 h-10 text-white" fill="white" />
            </div>

            <h2 className="text-white mb-6">Together We Are Stronger</h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto mb-8">Every contribution you make, no matter how small, brings significant change to those in need</p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-white text-[#268ece] hover:bg-gray-50 gap-2 text-lg px-8 py-6 h-auto shadow-xl">
                Help Now
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Transparent & Accountable</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>15 Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
