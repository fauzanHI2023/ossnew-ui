import { Calendar, Eye, Download, FileText, FileCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReportsItems } from "../../../../data/reports";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ReportsCard({ title, cover, created_at, link, large = false, type_report, year_publicreport }: ReportsItems) {
  const typeColors = {
    annual: "bg-[#268ece] hover:bg-[#1e7ab8]",
    financial: "bg-emerald-500 hover:bg-emerald-600",
    factsheet: "bg-amber-500 hover:bg-amber-600",
    situational: "bg-purple-500 hover:bg-purple-600",
  };

  const typeBadgeColors = {
    annual: "bg-[#268ece]/10 text-[#268ece] border-[#268ece]/20",
    financial: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    factsheet: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    situational: "bg-purple-500/10 text-purple-700 border-purple-500/20",
  };

  return (
    <Card className="flex flex-col h-full group overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden bg-gray-100 ">
        <Image src={`https://cdnx.human-initiative.org/image/${cover}`} width={800} height={600} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className={`bg-[#268ece]/10 text-[#268ece] border-[#268ece]/20 backdrop-blur-sm`}>
            {year_publicreport}
          </Badge>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <Badge variant="outline" className="bg-[#268ece]/10 text-[#268ece] border-[#268ece]/20">
            <FileText className="w-3 h-3 mr-1" />
            {type_report === "annual" && "Annual Report"}
            {type_report === "financial" && "Financial Report"}
            {type_report === "factsheet" && "Fact Sheet"}
            {type_report === null && "Situational Report"}
          </Badge>
        </div>

        <h3 className="mb-2 line-clamp-2 text-gray-900">{title}</h3>

        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 flex-grow">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center gap-1">
            <FileCheck className="w-3.5 h-3.5" />
          </div>
        </div>

        <div className="flex gap-2 mt-auto">
          <Button className={`flex-1 bg-[#268ece] hover:bg-[#1e7ab8] text-white`}>
            <Eye className="w-4 h-4 mr-2" />
            Lihat
          </Button>
          <Link href={`https://cdnx.human-initiative.org/filePublic/${link}`}>
            <Button variant="outline" className="bg-hi-blue-50 text-hi-blue-500 border-hi-blue-50 hover:bg-gray-50">
              <Download className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
