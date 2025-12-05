"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mt-[4rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-16">
          {/* Left Side - Content */}
          <div className="space-y-6 lg:pr-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#268ece]/10 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#268ece] animate-pulse"></div>
              <span className="text-sm text-[#268ece]">Latest News & Stories</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl xl:text-[2.5rem] text-black leading-tight">
                Exploring the Pulse of <span className="text-[#268ece]">Humanitarian Action</span> Worldwide
              </h1>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">Stay informed with the latest updates, inspiring stories, and impactful partnerships that shape a more inclusive and resilient world.</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="px-6 py-3 bg-[#268ece] text-white rounded-full hover:bg-[#1e6fa3] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                <span>Explore Stories</span>
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="px-6 py-3 bg-white text-[#268ece] border-2 border-[#268ece] rounded-full hover:bg-gray-50 transition-all">Subscribe Updates</button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div>
                <p className="text-xl lg:text-2xl text-[#268ece]">200+</p>
                <p className="text-xs lg:text-sm text-gray-600 mt-1">Stories</p>
              </div>
              <div>
                <p className="text-xl lg:text-2xl text-[#268ece]">50+</p>
                <p className="text-xs lg:text-sm text-gray-600 mt-1">Countries</p>
              </div>
              <div>
                <p className="text-xl lg:text-2xl text-[#268ece]">1M+</p>
                <p className="text-xs lg:text-sm text-gray-600 mt-1">Lives Touched</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image Container */}
            <div className="relative h-[320px] lg:h-[450px]">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#268ece]/20 to-[#268ece]/5 rounded-3xl transform rotate-3"></div>

              {/* Image */}
              <div className="relative h-full overflow-hidden rounded-3xl shadow-2xl">
                <Image src="/latest/DSC08787 (1).jpg" width={800} height={700} alt="Humanitarian workers in action" className="w-full h-full object-cover" />
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
