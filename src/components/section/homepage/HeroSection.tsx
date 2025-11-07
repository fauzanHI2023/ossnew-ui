"use client";
import { ArrowRight, Handshake, Shield, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/cardhome";
import Image from "next/image";
import { DonationDialog } from "@/components/utility/DonationDialog";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export function HeroSection() {
  const [donationDialogOpen, setDonationDialogOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Detect scroll position to update active card
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.clientWidth;
      const newActiveCard = Math.round(scrollLeft / cardWidth);
      setActiveCard(newActiveCard);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <section className="pt-16 pb-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Compact Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-6 h-44 sm:h-52 shadow-xl">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjBjaGlsZCUyMGZhY2UlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA1OTgzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            width={1700}
            height={400}
            alt="Humanitarian"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-6 sm:px-12">
            <div className="max-w-3xl">
              <h1 className="text-white leading-tight">
                <span className="font-bold text-4xl sm:text-5xl md:text-6xl">Goodness For Dignity</span>
              </h1>
            </div>
          </div>
        </div>

        {/* 3 Main CTAs - Modern & Simple Design */}
        <div className="mb-6">
          {/* Mobile: Horizontal Swipe */}
          <div className="md:hidden">
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto snap-x snap-mandatory flex gap-4 -mx-4 px-4 pb-2 scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {/* Donate CTA */}
              <div className="snap-center flex-shrink-0 w-[85vw]">
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 cursor-pointer bg-[#268ece] h-full">
                  <div className="relative">
                    {/* Image */}
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGdpdmluZyUyMGRvbmF0aW9ufGVufDF8fHx8MTc2MDUwNTExNXww&ixlib=rb-4.1.0&q=80&w=1080"
                        width={600}
                        height={400}
                        alt="Donate Now"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-[#268ece]/30" />
                    </div>

                    {/* Content Overlay */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-white">Donate Now</h3>
                      </div>
                      <p className="text-blue-100 text-sm mb-3">Start donating in 3 seconds</p>
                      <Button variant="secondary" size="sm" className="w-full bg-white group-hover:translate-x-1 transition-transform" onClick={() => setDonationDialogOpen(true)}>
                        Start Donating <ArrowRight className="w-3 h-3 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Partner CTA */}
              <div className="snap-center flex-shrink-0 w-[85vw]">
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#268ece] cursor-pointer bg-white h-full">
                  <div className="relative">
                    {/* Image */}
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoYW5kc2hha2UlMjBtZWV0aW5nfGVufDF8fHx8MTc2MDUwNTExNXww&ixlib=rb-4.1.0&q=80&w=1080"
                        width={600}
                        height={400}
                        alt="Partner With Us"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
                    </div>

                    {/* Content Overlay */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-black mb-1">Partner With Us</h3>
                          <p className="text-gray-600 text-sm">CSR programs for sustainable impact</p>
                        </div>
                        <div className="w-10 h-10 bg-[#268ece]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Handshake className="w-5 h-5 text-[#268ece]" />
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white">
                        <Link href="/partnerwithus" className="flex">
                          Learn More <ArrowRight className="w-3 h-3 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Rights Holder CTA */}
              <div className="snap-center flex-shrink-0 w-[85vw]">
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#268ece] cursor-pointer bg-white h-full">
                  <div className="relative">
                    {/* Image */}
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBjb21tdW5pdHklMjBoZWxwfGVufDF8fHx8MTc2MDUwNTExNnww&ixlib=rb-4.1.0&q=80&w=1080"
                        width={600}
                        height={400}
                        alt="Be Rights Holder"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
                    </div>

                    {/* Content Overlay */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-black mb-1">Be Rights Holder</h3>
                          <p className="text-gray-600 text-sm">Apply for aid for those in need</p>
                        </div>
                        <div className="w-10 h-10 bg-[#268ece]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Shield className="w-5 h-5 text-[#268ece]" />
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white">
                        <Link href="/rightsholders" className="flex">
                          Apply Now <ArrowRight className="w-3 h-3 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-3">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => scrollToCard(index)}
                  className={`transition-all duration-300 rounded-full ${activeCard === index ? "w-8 h-2 bg-[#268ece]" : "w-2 h-2 bg-gray-300"}`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>

            {/* Swipe Hint */}
            {activeCard < 2 && (
              <div className="flex justify-center mt-2">
                <div className="flex items-center gap-1 text-gray-400 text-xs animate-pulse">
                  <span>Geser</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            )}
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {/* Donate CTA */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 cursor-pointer bg-[#268ece]">
              <div className="relative">
                {/* Image */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGdpdmluZyUyMGRvbmF0aW9ufGVufDF8fHx8MTc2MDUwNTExNXww&ixlib=rb-4.1.0&q=80&w=1080"
                    width={600}
                    height={400}
                    alt="Donate Now"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#268ece]/30" />
                </div>

                {/* Content Overlay */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-white">Donate Now</h3>
                  </div>
                  <p className="text-blue-100 text-sm mb-3">Start donating in 3 seconds</p>
                  <Button variant="secondary" size="sm" className="w-full bg-white text-gray-700 group-hover:translate-x-1 transition-transform" onClick={() => setDonationDialogOpen(true)}>
                    Start Donating <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Partner CTA */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#268ece] cursor-pointer bg-white">
              <div className="relative">
                {/* Image */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoYW5kc2hha2UlMjBtZWV0aW5nfGVufDF8fHx8MTc2MDUwNTExNXww&ixlib=rb-4.1.0&q=80&w=1080"
                    width={600}
                    height={400}
                    alt="Partner With Us"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
                </div>

                {/* Content Overlay */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-black mb-1">Partner With Us</h3>
                      <p className="text-gray-600 text-sm">CSR programs for sustainable impact</p>
                    </div>
                    <div className="w-10 h-10 bg-[#268ece]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Handshake className="w-5 h-5 text-[#268ece]" />
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-[#268ece] text-[#268ece] bg-white hover:bg-[#268ece] hover:text-white">
                    <Link href="/partnerwithus" className="flex">
                      Learn More <ArrowRight className="w-3 h-3 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Rights Holder CTA */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#268ece] cursor-pointer bg-white">
              <div className="relative">
                {/* Image */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBjb21tdW5pdHklMjBoZWxwfGVufDF8fHx8MTc2MDUwNTExNnww&ixlib=rb-4.1.0&q=80&w=1080"
                    width={600}
                    height={400}
                    alt="Be Rights Holder"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
                </div>

                {/* Content Overlay */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-black mb-1">Be Rights Holder</h3>
                      <p className="text-gray-600 text-sm">Apply for aid for those in need</p>
                    </div>
                    <div className="w-10 h-10 bg-[#268ece]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Shield className="w-5 h-5 text-[#268ece]" />
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-[#268ece] text-[#268ece] bg-white hover:bg-[#268ece] hover:text-white">
                    <Link href="/rightsholders" className="flex">
                      Apply Now <ArrowRight className="w-3 h-3 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 bg-gradient-to-br from-[#268ece]/5 via-blue-50 to-white rounded-2xl p-6 border border-[#268ece]/10 shadow-sm">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#268ece]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative text-center p-3">
              <div className="text-[#268ece] mb-1 group-hover:scale-110 transition-transform">24,000+</div>
              <div className="text-gray-600 text-xs">Active Donors</div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#268ece]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative text-center p-3">
              <div className="text-[#268ece] mb-1 group-hover:scale-110 transition-transform">30+</div>
              <div className="text-gray-600 text-xs">Active Programs</div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#268ece]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative text-center p-3">
              <div className="text-[#268ece] mb-1 group-hover:scale-110 transition-transform">324</div>
              <div className="text-gray-600 text-xs">Rightsholder Applications Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Dialog */}
      <DonationDialog open={donationDialogOpen} onOpenChange={setDonationDialogOpen} />
    </section>
  );
}
