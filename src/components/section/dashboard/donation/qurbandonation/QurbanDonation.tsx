"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { fetchQurbanHistoryByGuid } from "../../../../../../services/donation/history/auth-history-qurban";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Clock,
  XCircle,
  Calendar,
  DollarSign,
  Package,
  Download,
  Eye,
  Search,
  Gift,
  MapPin,
  User,
  Filter,
  Truck,
  ChevronDown,
  ChevronUp,
  FileText,
  Scissors,
  Check,
  CreditCard,
  PackageCheck,
  ArrowRightLeft,
  X as XIcon,
  ClipboardCheck,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface QurbanHistory {
  id: string;
  title: string;
  type: "Kambing" | "Sapi" | "Domba";
  price: number;
  date: string;
  status: "Laporan Qurban" | "Qurban Dipotong" | "Qurban Disiapkan" | "Rencana Pemotongan" | "Qurban Diterima";
  recipient: string;
  location: string;
  slaughterDate: string;
  weight: string;
  image: string;
  hasReport: boolean;
  hasPhoto: boolean;
  hasVideo: boolean;
}

export function QurbanDonationContent() {
  const session: any = useSession();
  const user = session?.data?.user;
  const phpDonorGuid = user?.phpDonorData?.[0]?.guid;
  const [searchQuery, setSearchQuery] = useState("");
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});

  const { data, isLoading, isError } = useQuery({
    queryKey: ["qurbanHistory", phpDonorGuid],
    queryFn: () => fetchQurbanHistoryByGuid(phpDonorGuid),
    enabled: !!phpDonorGuid,
  });

  // === CONVERT API RESULT ===
  const qurbanHistory =
    data?.data?.datas?.flatMap((donation: any) =>
      donation.details.map((detail: any) => {
        const reports = detail.reports || [];

        const reportReceived = reports.find((r: any) => r.key === "Qurban diterima")?.value || null;
        const reportPrepared = reports.find((r: any) => r.key === "Qurban Disiapkan")?.value || null;
        const reportSlaughtered = reports.find((r: any) => r.key === "Qurban Dipotong")?.value || null;
        const reportFinal = reports.find((r: any) => r.key === "Laporan Qurban")?.value || null;

        // Tentukan status terakhir
        let status = "Belum Diproses";
        if (reportFinal) status = "Laporan Qurban";
        else if (reportSlaughtered) status = "Qurban Dipotong";
        else if (reportPrepared) status = "Qurban Disiapkan";
        else if (reportReceived) status = "Qurban Diterima";

        return {
          id: detail.id,
          title: detail.brand_name || detail.pequrban_name || "Qurban",
          type: detail.qurban_specs,
          price: detail.amount ?? detail.subtotal ?? 0,

          reportReceived,
          reportPrepared,
          reportSlaughtered,
          reportFinal,

          hasReport: !!reportFinal,

          status, // <-- tambahkan status di sini

          donation_no: donation.donation_no,
          date: donation.donation_date,
          transaction: donation.transaction_date,
          donor_name: donation.donor_name,
          pequrban_name: detail.pequrban_name || "Anonim",
          distribution: detail.distribution_location || "none",
        };
      })
    ) || [];

  // === FILTER ===
  const filteredQurban = qurbanHistory.filter((qurban: any) => {
    const q = searchQuery.toLowerCase();

    return (
      (qurban.title || "").toLowerCase().includes(q) ||
      String(qurban.id || "")
        .toLowerCase()
        .includes(q) || // ← FIX DI SINI
      (qurban.type || "").toLowerCase().includes(q)
    );
  });

  // === SUMMARY ===
  const totalQurban = qurbanHistory.length;
  const completedCount = qurbanHistory.filter((q: any) => q.status === "Laporan Qurban").length;

  const processingCount = qurbanHistory.filter((q: any) => q.status === "Qurban Diterima").length;

  const totalAmount = qurbanHistory.reduce((sum: number, q: any) => sum + Number(q.price ?? 0), 0);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Qurban Diterima":
        return (
          <Badge className="bg-emerald-500/10 text-emerald-700 border-emerald-200 hover:bg-emerald-500/20">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Qurban Diterima
          </Badge>
        );
      case "Qurban Disiapkan":
        return (
          <Badge className="bg-amber-500/10 text-amber-700 border-amber-200 hover:bg-amber-500/20">
            <Clock className="w-3 h-3 mr-1" />
            Qurban Disiapkan
          </Badge>
        );
      case "Rencana Pemotongan":
        return (
          <Badge className="bg-blue-500/10 text-blue-700 border-blue-200 hover:bg-blue-500/20">
            <CreditCard className="w-3 h-3 mr-1" />
            Rencana Pemotongan
          </Badge>
        );
      case "Qurban Dipotong":
        return (
          <Badge className="bg-purple-500/10 text-purple-700 border-purple-200 hover:bg-purple-500/20">
            <Truck className="w-3 h-3 mr-1" />
            Qurban Dipotong
          </Badge>
        );
      case "Laporan Qurban":
        return (
          <Badge className="bg-gray-500/10 text-gray-700 border-gray-200 hover:bg-gray-500/20">
            <PackageCheck className="w-3 h-3 mr-1" />
            Laporan Qurban
          </Badge>
        );
      default:
        return null;
    }
  };

  const getTypeBadge = (type: string) => {
    const colors = {
      Kambing: "bg-blue-500/10 text-blue-700 border-blue-200",
      Sapi: "bg-purple-500/10 text-purple-700 border-purple-200",
      Domba: "bg-pink-500/10 text-pink-700 border-pink-200",
    };
    return colors[type as keyof typeof colors] || "bg-gray-500/10 text-gray-700 border-gray-200";
  };

  return (
    <div className="space-y-6">
      {/* Modern Header Section */}
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#268ece] via-[#3da9f5] to-[#17a2b8]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }} />

        <div className="relative z-10 p-6 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h1 className="text-white drop-shadow-lg">Qurban History</h1>
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30">
                  <Gift className="w-3 h-3 mr-1.5" />
                  <span className="text-xs">{totalQurban} Qurban</span>
                </Badge>
              </div>
              <p className="text-white/90 mb-6">Riwayat pembelian qurban Anda</p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Total Qurban</p>
                  <p className="text-white text-lg md:text-xl">{totalQurban}</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Completed</p>
                  <p className="text-white text-lg md:text-xl">{completedCount}</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Processing</p>
                  <p className="text-white text-lg md:text-xl">{processingCount}</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Total Value</p>
                  <p className="text-white text-lg md:text-xl">Rp {(totalAmount / 1_000_000).toFixed(1)} Juta</p>
                </div>
              </div>
            </div>

            {/* Icon Section */}
            <div className="relative group cursor-pointer">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl border-2 border-white/40 flex flex-col items-center justify-center hover:from-white/40 hover:to-white/20 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                <div className="relative">
                  <Gift className="w-10 h-10 md:w-12 md:h-12 text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
                </div>
                <p className="text-white text-sm">Qurban</p>
                <p className="text-white/70 text-xs mt-1">History</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <Card className="border-0 shadow-2xl shadow-[#268ece]/10 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#268ece] via-[#3da9f5] to-[#17a2b8]" />
        <CardContent className="p-6">
          {/* Search and Export Row */}
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#268ece] z-10" />
              <Input
                placeholder="Search by ID, title, or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 h-14 border-2 border-[#268ece]/20 focus:border-[#268ece] rounded-xl bg-white/50 backdrop-blur-sm text-base placeholder:text-[#7a99b3]"
              />
            </div>

            {/* Download Button */}
            <Button className="h-14 px-6 bg-white border-2 border-[#268ece]/20 text-[#268ece] hover:bg-[#268ece]/5 hover:border-[#268ece]/40 rounded-xl gap-2 transition-all duration-300">
              <Download className="w-5 h-5" />
              <span className="hidden sm:inline">Export</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Qurban History List */}
      <div className="grid gap-4">
        {filteredQurban.length === 0 ? (
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-[#268ece]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-[#268ece]" />
              </div>
              <h3 className="text-[#0a2540] mb-2">No qurban history found</h3>
              <p className="text-[#7a99b3]">Try adjusting your filters or search query</p>
            </CardContent>
          </Card>
        ) : (
          filteredQurban.map((qurban: any) => (
            <Card key={qurban.id} className="bg-white border-0 shadow-xl shadow-[#268ece]/5 overflow-hidden group hover:shadow-2xl hover:shadow-[#268ece]/10 transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon/Image */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#268ece]/10 to-[#3da9f5]/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">{qurban.image}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <h3 className="text-[#0a2540] truncate">{qurban.title}</h3>
                          {getStatusBadge(qurban.status)}
                          <Badge variant="outline" className={getTypeBadge(qurban.type)}>
                            {qurban.type}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[#7a99b3]">
                          <div className="flex items-center gap-1">
                            <Package className="w-4 h-4" />
                            <span>Transaction Id: {qurban.id}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ArrowRightLeft className="w-4 h-4" />
                            <span>
                              Transaction:{" "}
                              {qurban.transaction !== "-"
                                ? new Date(qurban.transaction).toLocaleDateString("id-ID", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                  })
                                : "-"}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              Order:{" "}
                              {new Date(qurban.date).toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Amount */}
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-[#268ece] mb-1">
                          <span className="text-xl">Rp {qurban.price.toLocaleString("id-ID")}</span>
                        </div>
                        <p className="text-xs text-[#7a99b3]">Weight: {qurban.weight}</p>
                      </div>
                    </div>

                    {/* Additional Info */}
                    {qurban.status !== "Rencana Pemotongan" && (
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#7a99b3] mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{qurban.pequrban_name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{qurban.distribution}</span>
                        </div>
                      </div>
                    )}

                    {/* Media Badges */}
                    {qurban.status === "Qurban Diterima" && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {qurban.hasReport && <Badge className="bg-blue-500/10 text-blue-700 border-blue-200">📄 Report Available</Badge>}
                        {qurban.hasPhoto && <Badge className="bg-green-500/10 text-green-700 border-green-200">📷 Photos Available</Badge>}
                        {qurban.hasVideo && <Badge className="bg-purple-500/10 text-purple-700 border-purple-200">🎥 Video Available</Badge>}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="gap-2 mb-4 hidden">
                      {/* <Button size="sm" className="bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white hover:shadow-lg hover:shadow-[#268ece]/30 rounded-xl gap-2">
                        <Eye className="w-4 h-4" />
                        View Details
                      </Button> */}
                      {qurban.status === "Qurban Diterima" && (
                        <Button size="sm" variant="outline" className="border-2 border-[#268ece]/20 hover:border-[#268ece]/40 rounded-xl gap-2">
                          <Download className="w-4 h-4" />
                          Download Report
                        </Button>
                      )}
                    </div>

                    {/* Collapsible Status Details */}

                    <Collapsible open={openDetails[qurban.id] || false} onOpenChange={(isOpen) => setOpenDetails((prev) => ({ ...prev, [qurban.id]: isOpen }))} className="w-full">
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-full justify-between hover:bg-[#268ece]/5 rounded-xl p-3">
                          <span className="text-sm text-[#268ece] flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            Status Timeline
                          </span>
                          {openDetails[qurban.id] ? <ChevronUp className="w-4 h-4 text-[#268ece]" /> : <ChevronDown className="w-4 h-4 text-[#268ece]" />}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-3">
                        <div className="bg-[#268ece]/5 rounded-xl p-4 space-y-4">
                          {/* 1. Qurban diterima */}
                          {qurban.reportReceived && (
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              </div>
                              <div>
                                <p className="text-sm text-[#0a2540]">Qurban Diterima</p>
                                <p className="text-xs text-[#7a99b3] mt-1">
                                  {new Date(qurban.reportReceived).toLocaleDateString("id-ID", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  })}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* 2. Qurban Disiapkan */}
                          {qurban.reportPrepared && (
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                <Clock className="w-4 h-4 text-amber-600" />
                              </div>
                              <div>
                                <p className="text-sm text-[#0a2540]">Qurban Disiapkan</p>
                                <p className="text-xs text-[#7a99b3] mt-1">{qurban.reportPrepared}</p>
                              </div>
                            </div>
                          )}

                          {/* 3. Qurban Dipotong */}
                          {qurban.reportSlaughtered && (
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                <Scissors className="w-4 h-4 text-blue-600" />
                              </div>
                              <div>
                                <p className="text-sm text-[#0a2540]">Qurban Dipotong</p>
                                <p className="text-xs text-[#7a99b3] mt-1">Lokasi: {qurban.reportSlaughtered}</p>
                              </div>
                            </div>
                          )}

                          {/* 4. Laporan Qurban */}
                          {qurban.hasReport && (
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm text-[#0a2540]">Laporan Qurban</p>
                                  <Button size="sm" variant="link" className="h-auto p-0 text-xs text-[#268ece]" onClick={() => window.open(qurban.reportFinal, "_blank")}>
                                    Lihat Laporan →
                                  </Button>
                                </div>
                                <p className="text-xs text-[#7a99b3] mt-1">Laporan lengkap tersedia</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
