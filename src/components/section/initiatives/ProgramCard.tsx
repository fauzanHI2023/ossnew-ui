import Image from "next/image";
import ImpactStats from "./ImpactStats";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
  rightholders: string;
  regions: string;
  reverse?: boolean;
  url: string;
}

export default function ProgramCard({ title, description, imageUrl, rightholders, regions, reverse = false, url }: ProgramCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}>
      <div className="w-full md:w-1/2">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <Image src={imageUrl} width={800} height={800} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="inline-block px-4 py-1 bg-[#268ece]/10 text-[#268ece] rounded-full text-sm mb-4">Program Pillars</div>
        <h3 className="text-3xl md:text-4xl mb-4 text-black">{title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">{description}</p>
        <ImpactStats rightholders={rightholders} regions={regions} />
        <Button className="py-0 px-0 mt-6 bg-transparent border border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white">
          <Link href={url} className="flex flex-row py-2 px-4">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
