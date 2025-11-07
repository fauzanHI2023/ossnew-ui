import { Users, MapPin } from "lucide-react";

interface ImpactStatsProps {
  rightholders: string;
  regions: string;
}

export default function ImpactStats({ rightholders, regions }: ImpactStatsProps) {
  return (
    <div className="flex gap-6 mt-6">
      <div className="flex items-center gap-2">
        <div className="bg-[#268ece] p-2 rounded-lg">
          <Users className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="text-2xl text-[#268ece]">{rightholders}</div>
          <div className="text-sm text-gray-600">Rightholders</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-[#268ece] p-2 rounded-lg">
          <MapPin className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="text-2xl text-[#268ece]">{regions}</div>
          <div className="text-sm text-gray-600">Regions</div>
        </div>
      </div>
    </div>
  );
}
