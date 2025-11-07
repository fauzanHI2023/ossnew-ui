import { ArrowUpDown, Sparkles, TrendingUp } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface SortingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export function SortingDialog({ open, onOpenChange, sortBy, onSortChange }: SortingDialogProps) {
  const sortOptions = [
    {
      value: "newest",
      label: "Terbaru",
      description: "Project paling baru ditambahkan",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-50 to-cyan-50",
      accentColor: "#0EA5E9",
    },
    {
      value: "most-supported",
      label: "Terbanyak Support",
      description: "Project dengan supporter terbanyak",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      bgGradient: "from-pink-50 to-rose-50",
      accentColor: "#EC4899",
    },
    {
      value: "highest-budget",
      label: "Budget Tertinggi",
      description: "Project dengan anggaran terbesar",
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      bgGradient: "from-green-50 to-emerald-50",
      accentColor: "#10B981",
    },
  ];

  const handleSelect = (value: string) => {
    onSortChange(value);
    onOpenChange(false);
  };

  const currentSort = sortOptions.find((opt) => opt.value === sortBy) || sortOptions[0];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-[95vw] max-h-[90vh] p-0 gap-0 border-0 overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-white [&>button]:hidden">
        {/* Accessible Title & Description for Screen Readers */}
        <DialogTitle className="sr-only">Sort Projects</DialogTitle>
        <DialogDescription className="sr-only">Pilih metode sorting untuk menampilkan project sesuai preferensi Anda. Tersedia {sortOptions.length} opsi sorting.</DialogDescription>

        {/* Fixed Header with Gradient Background */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#268ece] via-[#1d7ab8] to-[#268ece] px-6 py-6">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>

          {/* Close Button - ONLY ONE */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110 hover:rotate-90 z-10"
            aria-label="Close dialog"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header Content */}
          <div className="relative space-y-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl border border-white/30">
                <ArrowUpDown className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl text-white" aria-hidden="true">
                  Sort Projects
                </h2>
                <p className="text-white/80 text-sm mt-0.5" aria-hidden="true">
                  Pilih metode sorting untuk menampilkan project
                </p>
              </div>
            </div>
          </div>

          {/* Current Selection Pill */}
          <div className="relative mt-4">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/25 backdrop-blur-xl rounded-xl border border-white/40 shadow-lg">
              <Sparkles className="w-4 h-4 text-white" />
              <div className="text-white">
                <span className="text-xs opacity-90">Currently sorting by: </span>
                <span className="font-semibold">{currentSort.label}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content - 1 COLUMN 3 ROWS */}
        <div className="overflow-y-auto max-h-[calc(90vh-280px)] px-6 py-6">
          {/* Sorting Options Grid - SINGLE COLUMN */}
          <div className="grid grid-cols-1 gap-4">
            {sortOptions.map((option) => {
              const isActive = sortBy === option.value;

              return (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  aria-label={`Sort by ${option.label}: ${option.description}`}
                  aria-pressed={isActive}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${isActive ? "scale-[1.02] shadow-xl" : "hover:scale-[1.02] hover:shadow-lg shadow-md"}`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.bgGradient} transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}></div>

                  {/* Border Glow Effect */}
                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-2xl animate-pulse"
                      style={{
                        boxShadow: `0 0 20px ${option.accentColor}40, inset 0 0 15px ${option.accentColor}20`,
                      }}
                    ></div>
                  )}

                  {/* Content */}
                  <div className={`relative p-5 border-2 rounded-2xl transition-all duration-300 bg-white ${isActive ? "border-transparent" : "border-gray-200 group-hover:border-gray-300"}`}>
                    {/* Active Check Badge */}
                    {isActive && (
                      <div className="absolute -top-2 -right-2 z-10">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                          style={{
                            background: `linear-gradient(135deg, ${option.accentColor}, ${option.accentColor}DD)`,
                          }}
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-4">
                      {/* Label - Aligned Left with Full Width */}
                      <div className="flex-1 text-left">
                        <div
                          className={`text-xl font-semibold transition-all duration-300 mb-2 ${isActive ? "scale-105" : "text-gray-900 group-hover:text-gray-700"}`}
                          style={{
                            color: isActive ? option.accentColor : undefined,
                          }}
                        >
                          {option.label}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{option.description}</p>
                      </div>
                    </div>

                    {/* Hover Shimmer Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${option.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Fixed Footer Stats */}
        <div className="border-t border-gray-200 px-6 py-4 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#268ece] to-[#1d7ab8] rounded-xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-900 font-medium">{sortOptions.length} sorting options available</p>
              <p className="text-xs text-gray-500">Tap to reorder your projects</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
