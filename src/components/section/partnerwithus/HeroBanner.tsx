"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroBannerProps {
  onPartnerClick: () => void;
}

export function HeroBanner({ onPartnerClick }: HeroBannerProps) {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Main Hero Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-12 lg:py-16">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#268ece]/10 rounded-full">
                <div className="w-2 h-2 bg-[#268ece] rounded-full animate-pulse"></div>
                <span className="text-[#268ece] text-sm">Trusted Partner in Humanitarian CSR Transformation</span>
              </div>

              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Transforming Business Into
                <span className="text-[#268ece]"> Social Impact</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">Strategic CSR consultation that empowers corporations to create meaningful change through sustainable community development and measurable social impact.</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-[#268ece] hover:bg-[#1d7ab8] text-white px-8" onClick={onPartnerClick}>
                  Partner With Us
                </Button>
                <Button size="lg" variant="outline" className="bg-white border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white px-8" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                  Explore Programs
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[350px] lg:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#268ece]/20 to-transparent rounded-3xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1601408648796-349272138e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhvbGRpbmclMjBwbGFudCUyMHNlZWRsaW5nfGVufDF8fHx8MTc2MTY1NDQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                width={800}
                height={800}
                alt="Human Initiative - Humanitarian Service"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
