import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowUpDown, Check, Calendar, TrendingUp, Users, TrendingDown } from "lucide-react";

export type SortOption = "newest" | "most-donated" | "most-supported" | "least-donated";

interface SortPopupProps {
  activeSortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

const sortOptions = [
  {
    id: "newest" as SortOption,
    label: "Campaign Terbaru",
    description: "Urutkan berdasarkan waktu pembuatan",
    icon: Calendar,
    color: "text-blue-500",
  },
  {
    id: "most-donated" as SortOption,
    label: "Donasi Terbanyak",
    description: "Urutkan berdasarkan jumlah donasi terbesar",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    id: "most-supported" as SortOption,
    label: "Support Terbanyak",
    description: "Urutkan berdasarkan jumlah donatur",
    icon: Users,
    color: "text-purple-500",
  },
  {
    id: "least-donated" as SortOption,
    label: "Butuh Dukungan",
    description: "Urutkan berdasarkan yang paling membutuhkan",
    icon: TrendingDown,
    color: "text-orange-500",
  },
];

export function SortPopup({ activeSortOption, onSortChange }: SortPopupProps) {
  const [open, setOpen] = useState(false);
  const activeLabel = sortOptions.find((opt) => opt.id === activeSortOption)?.label || "Urutkan";

  const handleSelect = (option: SortOption) => {
    onSortChange(option);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 rounded-full bg-white text-gray-500 border-gray-300 border hover:bg-gray-100">
          <ArrowUpDown className="h-4 w-4" />
          <span className="hidden sm:inline">{activeLabel}</span>
          <span className="sm:hidden">Urutkan</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gray-600">Urutkan Campaign</DialogTitle>
        </DialogHeader>

        <div className="grid gap-3 py-4">
          {sortOptions.map((option) => {
            const Icon = option.icon;
            const isActive = activeSortOption === option.id;

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`relative flex items-start gap-4 p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${isActive ? "border-[#268ece] bg-[#268ece]/5 shadow-md" : "border-gray-200 hover:border-gray-300"}`}
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${isActive ? "bg-[#268ece]/10" : "bg-gray-100"}`}>
                  <Icon className={`h-6 w-6 ${isActive ? "text-[#268ece]" : option.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`text-lg ${isActive ? "text-[#268ece]" : "text-gray-900"}`}>{option.label}</h3>
                    {isActive && (
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#268ece] flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <Button variant="outline" onClick={() => setOpen(false)} className="rounded-full">
            Tutup
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
