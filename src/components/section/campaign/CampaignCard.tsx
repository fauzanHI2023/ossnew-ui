import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CampaignCardProps {
  id?: number;
  title: string;
  category: string;
  image: string;
  raised: number;
  slug: string;
  target: number;
  daysLeft?: number; // ← ubah jadi optional
  description?: string;
  donors?: number;
  variant?: "default" | "featured";
}

export function CampaignCard({
  id,
  title,
  category,
  image,
  raised,
  slug,
  target,
  daysLeft = Math.floor(Math.random() * 30) + 1, // default acak 1–30
  description = "Membangun fasilitas pendidikan dan menyediakan beasiswa untuk anak-anak di...",
  donors = Math.floor(Math.random() * 500) + 50,
  variant = "default",
}: CampaignCardProps) {
  const percentage = Math.round((raised / target) * 100);

  const safeSrc = image.startsWith("http") ? image : `https://cdnx.human-initiative.org/image/${encodeURIComponent(image.trim())}`;

  // Featured cards always use desktop/vertical layout
  if (variant === "featured") {
    return (
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100">
        {/* Image Section */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <Image src={safeSrc} width={600} height={500} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
          <div className="absolute top-3 right-3">
            <div className="flex items-center gap-1 px-2.5 py-1 bg-red-500 rounded-full text-white text-xs shadow-lg">
              <Clock className="h-3 w-3" />
              <span>{daysLeft} Hari</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-3">
          <h3 className="text-gray-900 leading-tight line-clamp-2 min-h-[2.5rem] group-hover:text-[#268ece] transition-colors duration-300">{title}</h3>

          {/* Progress */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-xs">Terkumpul</span>
              <span className="text-[#268ece]">{percentage}%</span>
            </div>
            <Progress value={percentage} className="h-2" />
          </div>

          {/* Amount + Donors */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[#268ece] text-lg mb-0.5">Rp {raised.toLocaleString("id-ID")}</p>
              <p className="text-gray-500 text-xs">dari Rp {target.toLocaleString("id-ID")}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-gray-900 mb-0.5">
                <Users className="h-3.5 w-3.5" />
                <span className="text-lg">{donors}</span>
              </div>
              <p className="text-gray-500 text-xs">Donatur</p>
            </div>
          </div>

          <Button className="w-full bg-[#268ece] hover:bg-[#1a6ea5] text-white group/btn h-10 text-sm shadow-md hover:shadow-lg transition-all duration-300">
            Donasi Sekarang
            <ArrowRight className="ml-1.5 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    );
  }

  // Default card
  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100">
        <div className="flex h-full">
          <div className="p-2 flex-shrink-0">
            <div className="relative overflow-hidden w-[170px] h-full rounded-lg">
              <Image src={safeSrc} width={400} height={300} alt={title} className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out" />
              <div className="absolute top-2 left-2 z-10">
                <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-red-500 rounded-full text-white text-[10px] shadow-lg">
                  <Clock className="h-2.5 w-2.5" />
                  <span>{daysLeft}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 py-3 pr-4 pl-2 flex flex-col justify-between min-w-0">
            <h3 className="text-gray-900 text-xs leading-tight line-clamp-2 group-hover:text-[#268ece] transition-colors duration-300">{title}</h3>

            <div className="space-y-1.5">
              <div className="flex items-baseline justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-gray-600 mb-0.5">Terkumpul</p>
                  <p className="text-[#268ece] text-xs leading-tight">Rp {raised.toLocaleString("id-ID")}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[10px] text-gray-600 mb-0.5 whitespace-nowrap">Sisa Hari</p>
                  <p className="text-gray-900 text-xs">{daysLeft}</p>
                </div>
              </div>

              <Progress value={percentage} className="h-1.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100">
        <div className="relative overflow-hidden aspect-[16/10]">
          <Image src={safeSrc} width={600} height={500} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
          <div className="absolute top-3 right-3">
            <div className="flex items-center gap-1 px-2.5 py-1 bg-red-500 rounded-full text-white text-xs shadow-lg">
              <Clock className="h-3 w-3" />
              <span>{daysLeft} Hari</span>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <h3 className="text-gray-900 leading-tight line-clamp-2 min-h-[2.5rem] group-hover:text-[#268ece] transition-colors duration-300">{title}</h3>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-xs">Terkumpul</span>
              <span className="text-[#268ece]">{percentage}%</span>
            </div>
            <Progress value={percentage} className="h-2" />
          </div>

          <div className="flex items-end justify-between">
            <div>
              <p className="text-[#268ece] text-lg mb-0.5">Rp {raised.toLocaleString("id-ID")}</p>
              <p className="text-gray-500 text-xs">dari Rp {target.toLocaleString("id-ID")}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-gray-900 mb-0.5">
                <Users className="h-3.5 w-3.5" />
                <span className="text-lg">{donors}</span>
              </div>
              <p className="text-gray-500 text-xs">Donatur</p>
            </div>
          </div>

          <Button className="w-full bg-[#268ece] hover:bg-[#1a6ea5] text-white group/btn h-10 text-sm shadow-md hover:shadow-lg transition-all duration-300">
            <Link href={`/campaign/${slug}`} className="flex flex-row justify-center items-center">
              Donasi Sekarang
              <ArrowRight className="ml-1.5 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
