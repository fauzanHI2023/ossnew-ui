"use client";

import { useState } from "react";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fetchRightholders } from "../../../../services/cphp/auth-list-rightholders";
import { useQuery } from "@tanstack/react-query";
import Iframe from "react-iframe";

const INITIAL_DISPLAY_COUNT = 6;
const LOAD_MORE_COUNT = 3;

export function ActiveProgramsSection() {
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showIframe, setShowIframe] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");
  // 🚀 Fetch from API
  const { data, isLoading, isError } = useQuery({
    queryKey: ["rightholders"],
    queryFn: fetchRightholders,
  });

  // fallback kalau API belum ready
  const programs = data ?? [];

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + LOAD_MORE_COUNT, programs.length));
  };

  const visiblePrograms = programs.slice(0, displayCount);
  const hasMore = displayCount < programs.length;

  // Loading State
  if (isLoading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500">Loading programs...</p>
      </section>
    );
  }

  // Error State
  if (isError) {
    return (
      <section className="py-20 text-center">
        <p className="text-red-500">Failed to load programs</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#268ece]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#268ece]/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#268ece]" />
            <span className="text-sm text-[#268ece]">Open for Applications</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-gray-900 via-[#268ece] to-gray-900 bg-clip-text text-transparent">Active Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Join our impactful programs and make a difference in communities across Indonesia</p>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visiblePrograms.map((program: any, index: number) => (
            <div
              key={program.id}
              onMouseEnter={() => setHoveredCard(program.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#268ece]/20 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#268ece]/5 via-[#268ece]/10 to-[#268ece]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-6 flex flex-col h-full min-h-[200px]">
                {/* Category Badge */}
                <div className="mb-4 h-6">
                  {program.category && (
                    <Badge variant="secondary" className="bg-[#268ece]/10 text-[#268ece] border-[#268ece]/20 hover:bg-[#268ece]/20">
                      {program.category}
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl mb-3 text-gray-900 group-hover:text-[#268ece] transition-colors duration-300 min-h-[56px]">{program.form_name}</h3>

                {/* Description */}
                <div className="mb-4 min-h-[48px]">{program.form_description && <p className="text-sm text-gray-600 line-clamp-2 group-hover:text-gray-700">{program.description}</p>}</div>

                {/* Deadline Section */}
                <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-[#268ece]/20 transition-colors duration-300">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 text-[#268ece]" />
                    <span>{program.end_datetime || "No deadline"}</span>
                  </div>
                  {/* <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#268ece]" />
                    <span>{program.deadlineTime || program.deadline_time || "—"}</span>
                  </div> */}
                </div>

                {/* Apply Button */}
                <Button
                  onClick={() => {
                    setIframeUrl(program.link);
                    setShowIframe(true);
                  }}
                  className="w-full mt-6 bg-gradient-to-r from-[#268ece] to-[#1d7ab8] hover:from-[#1d7ab8] hover:to-[#268ece] text-white shadow-lg shadow-[#268ece]/30 group-hover:shadow-xl group-hover:shadow-[#268ece]/50 transition-all duration-300 group-hover:scale-105"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#268ece]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl ring-2 ring-[#268ece]/20 group-hover:ring-[#268ece]/40 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <Button
              onClick={handleLoadMore}
              variant="outline"
              className="group bg-white px-8 py-6 border-2 border-[#268ece]/30 text-[#268ece] hover:bg-gradient-to-r hover:from-[#268ece] hover:to-[#1d7ab8] hover:text-white hover:border-transparent transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl"
            >
              <span>Load More Programs</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}

        {showIframe && iframeUrl && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[100]">
            <div className="relative bg-white dark:bg-slate-700 rounded-lg w-full sm:w-3/4 h-full">
              <button onClick={() => setShowIframe(false)} className="absolute top-3 right-3 text-white bg-sky-500 hover:bg-sky-700 rounded-full w-8 h-8">
                ✕
              </button>
              <Iframe url={iframeUrl} width="100%" height="100%" allowFullScreen />
            </div>
          </div>
        )}

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#268ece]/5 to-transparent hover:from-[#268ece]/10 transition-all duration-300">
            <div className="text-2xl text-[#268ece] mb-1">{programs.length}</div>
            <div className="text-sm text-gray-600">Active Programs</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#268ece]/5 to-transparent hover:from-[#268ece]/10 transition-all duration-300">
            <div className="text-2xl text-[#268ece] mb-1">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#268ece]/5 to-transparent hover:from-[#268ece]/10 transition-all duration-300">
            <div className="text-2xl text-[#268ece] mb-1">100%</div>
            <div className="text-sm text-gray-600">Transparent</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#268ece]/5 to-transparent hover:from-[#268ece]/10 transition-all duration-300">
            <div className="text-2xl text-[#268ece] mb-1">Fast</div>
            <div className="text-sm text-gray-600">Application Process</div>
          </div>
        </div>
      </div>
    </section>
  );
}
