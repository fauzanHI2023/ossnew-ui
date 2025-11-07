import { ArrowRight, Sparkles, Heart, Users } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#e3f2fd]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-[#268ece]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#268ece]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-24 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#268ece]/10 rounded-full backdrop-blur-sm border border-[#268ece]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#268ece]" />
              <span className="text-xs text-[#268ece]">Empowering Communities Since 1999</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl !leading-tight text-gray-500">
                Building a{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#268ece] to-[#1d7ab8] bg-clip-text text-transparent">Brighter Future</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C60 3 140 3 198 10" stroke="#268ece" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                  </svg>
                </span>{" "}
                for Indonesian Children
              </h1>

              <p className="text-sm md:text-base text-gray-600 max-w-xl">Together, we can turn their hopes and dreams into reality through impactful programs</p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#268ece]/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-[#268ece]" />
                </div>
                <div>
                  <div className="text-base text-gray-900">10K+</div>
                  <div className="text-[10px] text-gray-600">Rights Holders</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#268ece]/10 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-[#268ece]" />
                </div>
                <div>
                  <div className="text-base text-gray-900">100+</div>
                  <div className="text-[10px] text-gray-600">Active Programs</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2">
              <a
                href="#right-holder"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#268ece] to-[#1d7ab8] hover:from-[#1d7ab8] hover:to-[#268ece] text-white rounded-lg shadow-lg shadow-[#268ece]/30 hover:shadow-xl hover:shadow-[#268ece]/40 transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                <span>Register as Rights Holder</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-900 rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                <span>View Programs</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-3 border-t border-gray-200">
              <p className="text-[10px] text-gray-600 mb-1.5">Trusted by communities across Indonesia</p>
              <div className="flex items-center gap-2 text-[10px] text-gray-500">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>UN ECOSOC</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>Sphere</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span>PSEA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 w-48 h-48 bg-gradient-to-br from-[#268ece]/20 to-purple-500/20 rounded-2xl blur-2xl -z-10" />
              <div className="absolute -bottom-3 -left-3 w-40 h-40 bg-gradient-to-br from-[#268ece]/10 to-transparent rounded-2xl blur-xl -z-10" />

              {/* Image with Modern Frame */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-[#268ece]/20 border-4 border-white">
                <div className="aspect-square relative">
                  <Image
                    src="https://images.unsplash.com/photo-1552873816-636e43209957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwc2Nob29sJTIwc21pbGluZ3xlbnwxfHx8fDE3NjA1MzY4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    width={800}
                    height={700}
                    alt="Happy children beneficiaries"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Card - Impact Badge */}
              <div className="absolute -bottom-3 -left-3 bg-white rounded-lg shadow-xl p-2 border border-gray-100 backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#268ece] to-[#1d7ab8] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-900">26+ Years</div>
                    <div className="text-[10px] text-gray-600">Making Impact</div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Active Now */}
              <div className="absolute top-3 -right-3 bg-white rounded-lg shadow-xl px-2.5 py-1.5 border border-gray-100 backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-1.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white" />
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] text-gray-900">Active Now</span>
                    </div>
                    <div className="text-[9px] text-gray-600">1,234 applicants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
