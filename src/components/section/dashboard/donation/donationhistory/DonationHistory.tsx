"use client";
import { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { GetPendingTransaction, GetCancelTransaction, GetSuccessTransaction } from "../../../../../../services/auth-csr";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Clock, CheckCircle2, XCircle, Calendar, DollarSign, Package, Download, Eye, Search, History, MapPin, User } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DonationItem {
  id: string;
  title: string;
  amount: number;
  amountFormatted: string;
  date: string;
  status: "confirmation" | "pending" | "cancelled";
  category: string;
  image: string;
  recipient?: string;
  location?: string;
}

export function DonationHistoryContent() {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [activeStatus, setActiveStatus] = useState<"all" | "confirmation" | "pending" | "cancelled">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // ============================
  //  FETCH DATA PENDING
  // ============================
  const { data: pendingData, isLoading: loadingPending } = useQuery({
    queryKey: ["pending-transactions", userId],
    queryFn: () => GetPendingTransaction(userId),
    enabled: !!userId,
  });

  // ============================
  //  FETCH DATA SUCCESS
  // ============================
  const { data: successData, isLoading: loadingSuccess } = useQuery({
    queryKey: ["success-transactions", userId],
    queryFn: () => GetSuccessTransaction(userId),
    enabled: !!userId,
  });

  // ============================
  //  FETCH DATA CANCEL
  // ============================
  const { data: cancelData, isLoading: loadingCancel } = useQuery({
    queryKey: ["cancel-transactions", userId],
    queryFn: () => GetCancelTransaction(userId),
    enabled: !!userId,
  });

  const loading = loadingPending || loadingSuccess || loadingCancel;

  // ====================================
  //   MAP API → DonationItem[]
  // ====================================

  const formatRupiah = (value: number) => {
    return value.toLocaleString("id-ID");
  };

  const parseRupiah = (value: string | number) => {
    if (typeof value === "number") return value;

    return Number(
      value
        .replace(/[^\d,-]/g, "")
        .replace(/\./g, "")
        .replace(",", ".")
    );
  };

  const donationHistory: DonationItem[] = useMemo(() => {
    if (!pendingData && !successData && !cancelData) return [];

    const mapToSchema = (item: any, type: "pending" | "success" | "cancel") => {
      const statusMap: any = {
        pending: "pending",
        success: "confirmation",
        cancel: "cancelled",
      };
      const rawAmount = parseRupiah(item.total_amount);

      return {
        id: item.transaction_number, // FIXED
        title: item.name || "Donation", // atau item.name kalau ada
        amount: rawAmount, // Untuk perhitungan (number)
        amountFormatted: formatRupiah(rawAmount), // Untuk tampilan
        date: item.transaction_time, // FIXED
        status: statusMap[type],
        category: "Donation",
        image: "🤲",
        recipient: "",
        location: "",
      } as DonationItem;
    };

    const pending = pendingData?.transactions?.map((item: any) => mapToSchema(item, "pending"));

    const success = successData?.transactions?.map((item: any) => mapToSchema(item, "success"));

    const cancel = cancelData?.transactions?.map((item: any) => mapToSchema(item, "cancel"));

    return [...(pending || []), ...(success || []), ...(cancel || [])];
  }, [pendingData, successData, cancelData]);

  // ============================
  //   FILTERING
  // ============================
  const filteredDonations = donationHistory.filter((donation) => {
    const matchesStatus = activeStatus === "all" || donation.status === activeStatus;

    const title = donation?.title ?? "";
    const id = donation?.id?.toString() ?? ""; // kalau id berupa number

    const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) || id.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  const totalDonations = donationHistory.length;
  const confirmedCount = donationHistory.filter((d) => d.status === "confirmation").length;
  const pendingCount = donationHistory.filter((d) => d.status === "pending").length;
  const totalAmount = donationHistory.filter((d) => d.status === "confirmation").reduce((sum, d) => sum + d.amount, 0);

  // ===============================

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmation":
        return (
          <Badge className="bg-emerald-500/10 text-emerald-700 border-emerald-200 hover:bg-emerald-500/20">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Confirmed
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-amber-500/10 text-amber-700 border-amber-200 hover:bg-amber-500/20">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        );
      case "cancelled":
        return (
          <Badge className="bg-red-500/10 text-red-700 border-red-200 hover:bg-red-500/20">
            <XCircle className="w-3 h-3 mr-1" />
            Cancelled
          </Badge>
        );
      default:
        return null;
    }
  };

  const formatTotalRange = (value: number) => {
    if (value >= 1_000_000_000) {
      // Miliar
      return (value / 1_000_000_000).toFixed(1) + " M";
    } else if (value >= 1_000_000) {
      // Juta
      return (value / 1_000_000).toFixed(1) + " Jt";
    } else if (value >= 1_000) {
      // Ribu
      return (value / 1_000).toFixed(0) + " rb";
    }

    return value.toString();
  };

  if (loading) {
    return <div className="w-full text-center py-20 text-[#268ece]">Loading Donation History...</div>;
  }

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
                <h1 className="text-white drop-shadow-lg">Donation History</h1>
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30">
                  <History className="w-3 h-3 mr-1.5" />
                  <span className="text-xs">{totalDonations} Donations</span>
                </Badge>
              </div>
              <p className="text-white/90 mb-6">Riwayat semua donasi Anda dalam satu tempat</p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Total Donasi</p>
                  <p className="text-white text-lg md:text-xl">{totalDonations}</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Confirmed</p>
                  <p className="text-white text-lg md:text-xl">{confirmedCount}</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Pending</p>
                  <p className="text-white text-lg md:text-xl">{pendingCount}</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Total Amount</p>
                  <p className="text-white text-lg md:text-xl">Rp {formatTotalRange(totalAmount)}</p>
                </div>
              </div>
            </div>

            {/* Icon Section */}
            <div className="relative group cursor-pointer">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl border-2 border-white/40 flex flex-col items-center justify-center hover:from-white/40 hover:to-white/20 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                <div className="relative">
                  <History className="w-10 h-10 md:w-12 md:h-12 text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
                </div>
                <p className="text-white text-sm">History</p>
                <p className="text-white/70 text-xs mt-1">Records</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <Card className="border-0 shadow-2xl shadow-[#268ece]/10 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#268ece] via-[#3da9f5] to-[#17a2b8]" />
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search and Export Row */}
            <div className="flex flex-col md:flex-row gap-3">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#268ece] z-10" />
                <Input
                  placeholder="Search by donation ID or title..."
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

            {/* Status Filter Tabs */}
            <div className="flex gap-2 flex-wrap">
              <Button
                onClick={() => setActiveStatus("all")}
                variant={activeStatus === "all" ? "default" : "outline"}
                size="lg"
                className={`rounded-xl transition-all duration-300 ${
                  activeStatus === "all" ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white shadow-lg shadow-[#268ece]/30" : "bg-white text-gray-400 border-2 border-[#268ece]/20 hover:border-[#268ece]/40 hover:bg-[#268ece]/5"
                }`}
              >
                All
              </Button>
              <Button
                onClick={() => setActiveStatus("confirmation")}
                variant={activeStatus === "confirmation" ? "default" : "outline"}
                size="lg"
                className={`rounded-xl transition-all duration-300 ${
                  activeStatus === "confirmation"
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                    : "bg-white text-gray-400 border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 text-emerald-700"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Confirmed
              </Button>
              <Button
                onClick={() => setActiveStatus("pending")}
                variant={activeStatus === "pending" ? "default" : "outline"}
                size="lg"
                className={`rounded-xl transition-all duration-300 ${
                  activeStatus === "pending" ? "bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/30" : "bg-white text-gray-400 border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-50 text-amber-700"
                }`}
              >
                <Clock className="w-4 h-4 mr-2" />
                Pending
              </Button>
              <Button
                onClick={() => setActiveStatus("cancelled")}
                variant={activeStatus === "cancelled" ? "default" : "outline"}
                size="lg"
                className={`rounded-xl transition-all duration-300 ${
                  activeStatus === "cancelled" ? "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/30" : "bg-white text-gray-400 border-2 border-red-200 hover:border-red-400 hover:bg-red-50 text-red-700"
                }`}
              >
                <XCircle className="w-4 h-4 mr-2" />
                Cancelled
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Donation List */}
      <div className="grid gap-4">
        {filteredDonations.length === 0 ? (
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-[#268ece]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-[#268ece]" />
              </div>
              <h3 className="text-[#0a2540] mb-2">No donations found</h3>
              <p className="text-[#7a99b3]">Try adjusting your filters or search query</p>
            </CardContent>
          </Card>
        ) : (
          filteredDonations.map((donation) => (
            <Card key={donation.id} className="border-0 shadow-xl shadow-[#268ece]/5 overflow-hidden group hover:shadow-2xl hover:shadow-[#268ece]/10 transition-all duration-500 bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon/Image */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#268ece]/10 to-[#3da9f5]/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">{donation.image}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-[#0a2540] truncate">{donation.title}</h3>
                          {getStatusBadge(donation.status)}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[#7a99b3]">
                          <div className="flex items-center gap-1">
                            <Package className="w-4 h-4" />
                            <span>{donation.id}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{donation.date}</span>
                          </div>
                          <Badge variant="outline" className="border-[#268ece]/20 text-[#268ece]">
                            {donation.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Amount */}
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-[#268ece] mb-1">
                          <span className="text-xl">Rp {donation.amountFormatted}</span>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#7a99b3] mb-4">
                      {donation.recipient && (
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{donation.recipient}</span>
                        </div>
                      )}
                      {donation.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{donation.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white hover:shadow-lg hover:shadow-[#268ece]/30 rounded-xl gap-2">
                        <Eye className="w-4 h-4" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="border-2 border-[#268ece]/20 hover:border-[#268ece]/40 rounded-xl gap-2">
                        <Download className="w-4 h-4" />
                        Receipt
                      </Button>
                    </div>
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
