"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, DollarSign, FileCheck, AlertCircle, Sparkles, Download } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { toast } from "sonner";

const reportCategories = [
  {
    title: "Annual Report",
    icon: FileText,
    color: "from-[#268ece] to-[#1e7ab8]",
    bgColor: "bg-[#268ece]/10",
    textColor: "text-[#268ece]",
    description: "Complete annual reports",
    count: "6",
  },
  {
    title: "Financial Report",
    icon: DollarSign,
    color: "from-[#1e7ab8] to-[#175f96]",
    bgColor: "bg-[#1e7ab8]/10",
    textColor: "text-[#1e7ab8]",
    description: "Detailed financial analysis",
    count: "6",
  },
  {
    title: "Fact Sheet",
    icon: FileCheck,
    color: "from-[#3a9fd5] to-[#2b8bc4]",
    bgColor: "bg-[#3a9fd5]/10",
    textColor: "text-[#3a9fd5]",
    description: "Important data summary",
    count: "6",
  },
  {
    title: "Situational Report",
    icon: AlertCircle,
    color: "from-[#1560a0] to-[#104c7f]",
    bgColor: "bg-[#1560a0]/10",
    textColor: "text-[#1560a0]",
    description: "Latest situation updates",
    count: "6",
  },
];

export function HeroBanner() {
  const scrollToReports = () => {
    document.getElementById("reports-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadAll = () => {
    toast.success("Preparing to download all reports...", {
      description: "Total 24 PDF files will be downloaded to your device soon.",
      duration: 4000,
    });
    // Simulate batch download preparation
    setTimeout(() => {
      toast.info("Download started!", {
        description: "Check your Downloads folder.",
      });
    }, 2000);
  };

  return (
    <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-white pt-8 pb-12">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-[#268ece]/20 to-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 9, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAwIDgwIE0gMCAwIEwgODAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjY4ZWNlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full xl:mt-[6rem] xl:mb-[3rem]">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <div>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#268ece]/10 to-[#1e7ab8]/10 rounded-full border border-[#268ece]/20 mb-3">
                <Sparkles className="w-3 h-3 text-[#268ece]" />
                <span className="text-xs text-gray-700">Official Documentation</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h1 className="text-3xl lg:text-4xl text-gray-900 mb-2 leading-tight">
                Transparency & Accountability
                <br />
                <span className="bg-gradient-to-r from-[#268ece] via-[#1e7ab8] to-[#1560a0] bg-clip-text text-transparent">Our Organization</span>
              </h1>
            </motion.div>

            <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-sm lg:text-base text-gray-600 mb-5 leading-relaxed">
              Access all important reports easily. Integrated platform for your organization's transparency and accountability.
            </motion.p>

            {/* Feature List */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-3 mb-6">
              {[
                { icon: FileText, text: "Annual Reports & Financial Statements", color: "text-[#268ece]" },
                { icon: FileCheck, text: "Fact Sheets & Data Insights", color: "text-[#3a9fd5]" },
                { icon: AlertCircle, text: "Real-time Situational Updates", color: "text-[#1560a0]" },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={feature.text} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }} className="flex items-center gap-3">
                    <div className={`${feature.color} bg-gradient-to-br from-gray-50 to-gray-100 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-gray-700">{feature.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="flex flex-wrap gap-3">
              <Button onClick={scrollToReports} size="sm" className="bg-[#268ece] hover:bg-[#1e7ab8] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <FileText className="w-4 h-4 mr-2" />
                Explore Reports
              </Button>
              <Button onClick={handleDownloadAll} size="sm" variant="outline" className="bg-white text-gray-600 border-2 border-gray-300 hover:border-[#268ece] hover:text-[#268ece] hover:bg-[#268ece]/5 transition-all">
                <Download className="w-4 h-4 mr-2" />
                Download All
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Image & Category Cards */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image Container */}
            <div className="relative h-[320px] lg:h-[450px]">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#268ece]/20 to-[#268ece]/5 rounded-3xl transform rotate-3"></div>

              {/* Image */}
              <div className="relative h-full overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZSUyMHRlYW18ZW58MXx8fHwxNzYwNTM2NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  width={800}
                  height={700}
                  alt="Humanitarian workers in action"
                  className="w-full h-full object-cover"
                />
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

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-8 text-white" preserveAspectRatio="none" viewBox="0 0 1440 54" fill="currentColor">
          <path d="M0,32 C240,10 480,0 720,10 C960,20 1200,40 1440,32 L1440,54 L0,54 Z" opacity="0.5" />
          <path d="M0,40 C360,20 720,10 1080,25 C1260,32 1350,42 1440,48 L1440,54 L0,54 Z" />
        </svg>
      </div>
    </section>
  );
}
