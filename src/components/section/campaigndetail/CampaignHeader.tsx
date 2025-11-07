import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Campaign } from "@/app/types/campaign";

interface CampaignHeaderProps {
  post: Campaign;
}

export function CampaignHeader({ post }: CampaignHeaderProps) {
  return (
    <>
      {/* Gambar utama */}
      <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-video">
        <Image
          src={`https://cdnx.human-initiative.org/image/${post.campaign_img}`} // fallback jika gambar kosong
          width={900}
          height={800}
          alt={post.campaign_name}
          className="w-full h-full object-cover"
        />
        {post.campaign_category && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-[#1780b3] hover:bg-[#075d8e] text-white">{post.campaign_category}</Badge>
          </div>
        )}
      </div>

      {/* Judul dan tombol */}
      <div className="mt-4">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-2xl sm:text-3xl text-gray-900 font-bold">{post.campaign_name}</h1>
          <button className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Heart size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
    </>
  );
}
