"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Users, FileText, Calendar, Mail, Phone, Hash, Briefcase, ExternalLink, ChevronDown, Clock, CheckCircle2, XCircle, AlertCircle, FileEdit, Send, Heart, Filter, X as XIcon, Search, Download } from "lucide-react";
import { fetchFilterRightholders } from "../../../../../services/cphp/auth-filter-rightholders";
import { fetchRightholders } from "../../../../../services/cphp/auth-list-rightholders";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export function RightsHolders() {
  const { data: session } = useSession();
  const userId = session?.user?.guid;
  const [activeTab, setActiveTab] = useState<"application" | "list">("application");
  const [visibleApplications, setVisibleApplications] = useState(5);
  const [visibleRightsHolders, setVisibleRightsHolders] = useState(5);
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const statusOptions = ["All", "New", "Verified", "Revision", "Rejected", "Proposed", "Donated"];

  const {
    data: applicationsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["applications", searchQuery, selectedStatus, userId],
    queryFn: () => fetchFilterRightholders(selectedStatus, userId!),
    enabled: !!userId,
  });

  console.log("applicationsData", applicationsData);

  const statusReverseMapping: Record<number, string> = {
    9: "New",
    10: "Verified",
    11: "Revision",
    12: "Rejected",
    13: "Proposed",
    14: "Donated",
  };

  const applications = (applicationsData ?? []).map((a: any) => ({
    id: a.id,
    applicantNo: a.applicant_no,
    applicantName: a.applicant_name,
    applicantEmail: a.applicant_email,
    applicantHpNo: a.applicant_hp_no,
    programName: a.program_name,
    formName: a.form_name,
    status: statusReverseMapping[a.status] ?? "Unknown",
    createdAt: a.created_at,
  }));

  const {
    data: rightsHoldersData,
    isLoading: loadingRightsHolders,
    isError: errorRightsHolders,
  } = useQuery({
    queryKey: ["rightsholders"],
    queryFn: fetchRightholders,
  });
  console.log("rightsHoldersData:", rightsHoldersData);

  const rightsHoldersList = rightsHoldersData ?? [];

  // Filter applications based on selected status and search query
  const filteredApplications = applications.filter((app: any) => {
    return (
      app.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.applicantNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.applicantEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.programName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "New":
        return {
          icon: AlertCircle,
          color: "bg-blue-50 text-blue-600 border-blue-200",
          gradient: "from-blue-500 to-blue-600",
          dotColor: "bg-blue-500",
        };
      case "Verified":
        return {
          icon: CheckCircle2,
          color: "bg-green-50 text-green-600 border-green-200",
          gradient: "from-green-500 to-green-600",
          dotColor: "bg-green-500",
        };
      case "Revision":
        return {
          icon: FileEdit,
          color: "bg-orange-50 text-orange-600 border-orange-200",
          gradient: "from-orange-500 to-orange-600",
          dotColor: "bg-orange-500",
        };
      case "Rejected":
        return {
          icon: XCircle,
          color: "bg-red-50 text-red-600 border-red-200",
          gradient: "from-red-500 to-red-600",
          dotColor: "bg-red-500",
        };
      case "Proposed":
        return {
          icon: Send,
          color: "bg-purple-50 text-purple-600 border-purple-200",
          gradient: "from-purple-500 to-purple-600",
          dotColor: "bg-purple-500",
        };
      case "Donated":
        return {
          icon: Heart,
          color: "bg-pink-50 text-pink-600 border-pink-200",
          gradient: "from-pink-500 to-pink-600",
          dotColor: "bg-pink-500",
        };
      default:
        return {
          icon: AlertCircle,
          color: "bg-gray-50 text-gray-600 border-gray-200",
          gradient: "from-gray-500 to-gray-600",
          dotColor: "bg-gray-500",
        };
    }
  };

  const handleLoadMoreApplications = () => setVisibleApplications((prev) => prev + 5);

  const handleLoadMoreRightsHolders = () => setVisibleRightsHolders((prev) => prev + 5);

  if (isLoading && activeTab === "application") {
    return <p className="text-center mt-10">Loading applications...</p>;
  }

  if (loadingRightsHolders && activeTab === "list") {
    return <p className="text-center mt-10">Loading rights holders...</p>;
  }

  return (
    <div className="space-y-6">
      {/* Modern Header Section with Summary */}
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
                <h1 className="text-white drop-shadow-lg">Rights Holders</h1>
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30">
                  <Users className="w-3 h-3 mr-1.5" />
                  <span className="text-xs">{applications.length} Applications</span>
                </Badge>
              </div>
              <p className="text-white/90 mb-6">Kelola aplikasi dan informasi penerima manfaat</p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Total Applications</p>
                  <p className="text-white text-lg md:text-xl">{applications.length}</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Verified</p>
                  <p className="text-white text-lg md:text-xl">{applications.filter((a: any) => a.status === "Verified").length}</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Pending</p>
                  <p className="text-white text-lg md:text-xl">{applications.filter((a: any) => a.status === "9").length}</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Rightholders Forms</p>
                  <p className="text-white text-lg md:text-xl">{rightsHoldersList.length}</p>
                </div>
              </div>
            </div>

            {/* Icon Section */}
            <div className="relative group cursor-pointer">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl border-2 border-white/40 flex flex-col items-center justify-center hover:from-white/40 hover:to-white/20 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                <div className="relative">
                  <Users className="w-10 h-10 md:w-12 md:h-12 text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                </div>
                <p className="text-white text-sm">Rights Holders</p>
                <p className="text-white/70 text-xs mt-1">Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation - Full Width */}
      <Card className="border-0 bg-white shadow-2xl shadow-[#268ece]/10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#268ece] via-[#3da9f5] to-[#17a2b8]" />
        <CardContent className="p-2 pb-0">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setActiveTab("application")}
              className={`relative px-6 py-4 rounded-xl transition-all duration-300 overflow-hidden group ${activeTab === "application" ? "text-white" : "text-[#7a99b3] hover:text-[#268ece] hover:bg-[#268ece]/5"}`}
            >
              {activeTab === "application" && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#268ece] to-[#3da9f5]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
                </>
              )}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                <span>Application List</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab("list")}
              className={`relative px-6 py-4 rounded-xl transition-all duration-300 overflow-hidden group ${activeTab === "list" ? "text-white" : "text-[#7a99b3] hover:text-[#268ece] hover:bg-[#268ece]/5"}`}
            >
              {activeTab === "list" && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#268ece] to-[#3da9f5]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
                </>
              )}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                <span>RightsHolders List</span>
              </span>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Tab Content */}
      {activeTab === "application" ? (
        <div className="space-y-4">
          {/* Search and Filter Section */}
          <Card className="border-0 bg-white shadow-2xl shadow-[#268ece]/10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#268ece] via-[#3da9f5] to-[#17a2b8]" />
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Search and Export Row */}
                <div className="flex flex-col md:flex-row gap-3">
                  {/* Search */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#268ece] z-10" />
                    <Input
                      placeholder="Search by applicant name, number, email, or program..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-4 h-14 border-2 border-[#268ece]/20 focus:border-[#268ece] rounded-xl bg-white/50 backdrop-blur-sm text-base placeholder:text-[#7a99b3]"
                    />
                  </div>

                  {/* Export Button */}
                  <Button className="h-14 px-6 bg-white border-2 border-[#268ece]/20 text-[#268ece] hover:bg-[#268ece]/5 hover:border-[#268ece]/40 rounded-xl gap-2 transition-all duration-300">
                    <Download className="w-5 h-5" />
                    <span className="hidden sm:inline">Export</span>
                  </Button>
                </div>

                {/* Status Filter Tabs */}
                <div className="flex gap-2 flex-wrap">
                  {statusOptions.map((status) => {
                    const statusConfig = status !== "All" ? getStatusConfig(status) : null;
                    const StatusIcon = statusConfig?.icon;
                    const isSelected = selectedStatus === status;
                    const count = status === "All" ? applications.length : applications.filter((app: any) => app.status === status).length;

                    return (
                      <Button
                        key={status}
                        onClick={() => {
                          setSelectedStatus(status);
                          setVisibleApplications(5);
                        }}
                        variant={isSelected ? "default" : "outline"}
                        size="lg"
                        className={`bg-white text-gray-400 rounded-xl transition-all duration-300 ${
                          isSelected && status === "All"
                            ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white shadow-lg shadow-[#268ece]/30"
                            : isSelected && status === "New"
                            ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                            : isSelected && status === "Verified"
                            ? "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30"
                            : isSelected && status === "Revision"
                            ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30"
                            : isSelected && status === "Rejected"
                            ? "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/30"
                            : isSelected && status === "Proposed"
                            ? "bg-purple-500 hover:bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                            : isSelected && status === "Donated"
                            ? "bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-500/30"
                            : "border-2 border-[#268ece]/20 hover:border-[#268ece]/40 hover:bg-[#268ece]/5"
                        }`}
                      >
                        {StatusIcon && <StatusIcon className="w-4 h-4 mr-2" />}
                        {status}
                        {isSelected && <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">{filteredApplications.length}</span>}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application List */}
          <div className="space-y-3">
            {filteredApplications.slice(0, visibleApplications).map((app: any, index: any) => {
              const statusConfig = getStatusConfig(app.status);
              const StatusIcon = statusConfig.icon;

              return (
                <div
                  key={app.id}
                  className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl border border-[#268ece]/10 hover:border-[#268ece]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#268ece]/10 hover:scale-[1.01]"
                  style={{
                    animation: `slideInUp 0.4s ease-out ${index * 0.05}s both`,
                  }}
                >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#268ece]/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-5">
                    {/* Header Row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-gradient-to-br from-[#268ece]/10 to-[#3da9f5]/10 rounded-xl border border-[#268ece]/20">
                            <Hash className="w-4 h-4 text-[#268ece]" />
                          </div>
                          <span className="text-[#268ece]">{app.applicantNo}</span>
                        </div>
                        <h3 className="text-[#0a2540] mb-1">{app.applicantName}</h3>
                        <p className="text-sm text-[#7a99b3]">{app.formName}</p>
                      </div>

                      {/* Status Badge */}
                      <Badge className={`${statusConfig.color} border px-3 py-1.5 gap-2 hover:scale-105 transition-transform duration-200`}>
                        <StatusIcon className="w-3.5 h-3.5" />
                        {app.status}
                      </Badge>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-[#f8fcff] rounded-xl border border-[#268ece]/5">
                        <div className="p-2 bg-white rounded-lg border border-[#268ece]/10">
                          <Briefcase className="w-4 h-4 text-[#268ece]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[#7a99b3] mb-0.5">Program Name</p>
                          <p className="text-sm text-[#0a2540] truncate">{app.programName}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-[#f8fcff] rounded-xl border border-[#268ece]/5">
                        <div className="p-2 bg-white rounded-lg border border-[#268ece]/10">
                          <Calendar className="w-4 h-4 text-[#268ece]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[#7a99b3] mb-0.5">Created At</p>
                          <p className="text-sm text-[#0a2540]">{app.createdAt}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-[#f8fcff] rounded-xl border border-[#268ece]/5">
                        <div className="p-2 bg-white rounded-lg border border-[#268ece]/10">
                          <Mail className="w-4 h-4 text-[#268ece]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[#7a99b3] mb-0.5">Email</p>
                          <p className="text-sm text-[#0a2540] truncate">{app.applicantEmail}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-[#f8fcff] rounded-xl border border-[#268ece]/5">
                        <div className="p-2 bg-white rounded-lg border border-[#268ece]/10">
                          <Phone className="w-4 h-4 text-[#268ece]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[#7a99b3] mb-0.5">Phone Number</p>
                          <p className="text-sm text-[#0a2540]">{app.applicantHpNo}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden items-center gap-2 pt-3 border-t border-[#268ece]/5">
                      <Button variant="outline" className="flex-1 rounded-xl border-[#268ece]/20 text-[#268ece] hover:bg-[#268ece]/5 hover:border-[#268ece]/30 transition-all duration-200">
                        View Details
                      </Button>
                      <Button className="flex-1 rounded-xl bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white hover:shadow-lg hover:shadow-[#268ece]/30 transition-all duration-200">Process Application</Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {visibleApplications < filteredApplications.length && (
            <div className="flex justify-center pt-4">
              <Button
                onClick={handleLoadMoreApplications}
                className="bg-white hover:bg-[#f8fcff] text-[#268ece] border-2 border-[#268ece]/20 hover:border-[#268ece]/40 rounded-xl px-8 py-6 gap-2 shadow-lg hover:shadow-xl hover:shadow-[#268ece]/10 transition-all duration-300 group"
              >
                <span>Load More Applications</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-200" />
              </Button>
            </div>
          )}

          {/* Summary Info */}
          <div className="text-center text-sm text-[#7a99b3] pt-2">
            Showing {visibleApplications} of {filteredApplications.length} applications
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* RightsHolders List */}
          <div className="space-y-3">
            {rightsHoldersList.slice(0, visibleRightsHolders).map((holder: any, index: any) => (
              <div
                key={holder.id}
                className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl border border-[#268ece]/10 hover:border-[#268ece]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#268ece]/10 hover:scale-[1.01]"
                style={{
                  animation: `slideInUp 0.4s ease-out ${index * 0.05}s both`,
                }}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#268ece]/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-5">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-[#268ece]/10 to-[#3da9f5]/10 rounded-xl border border-[#268ece]/20 flex-shrink-0">
                      <FileText className="w-6 h-6 text-[#268ece]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#0a2540] mb-2">{holder.form_name}</h3>
                      <p className="text-sm text-[#7a99b3] leading-relaxed">{holder.form_description ?? "Description"}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-4">
                    {/* End Time */}
                    <div className="flex items-center gap-3 p-3 bg-[#f8fcff] rounded-xl border border-[#268ece]/5">
                      <div className="p-2 bg-white rounded-lg border border-[#268ece]/10">
                        <Clock className="w-4 h-4 text-[#268ece]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-[#7a99b3] mb-0.5">Registration End Time</p>
                        <p className="text-sm text-[#0a2540]">{holder.end_datetime}</p>
                      </div>
                    </div>

                    {/* Link */}
                    <div className="flex items-center gap-3 p-3 bg-[#f8fcff] rounded-xl border border-[#268ece]/5">
                      <div className="p-2 bg-white rounded-lg border border-[#268ece]/10">
                        <ExternalLink className="w-4 h-4 text-[#268ece]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-[#7a99b3] mb-0.5">Form Link</p>
                        <a href={holder.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[#268ece] hover:text-[#3da9f5] truncate block transition-colors duration-200">
                          {holder.link}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="hidden items-center gap-2 pt-3 border-t border-[#268ece]/5">
                    <Button variant="outline" className="flex-1 rounded-xl border-[#268ece]/20 text-[#268ece] hover:bg-[#268ece]/5 hover:border-[#268ece]/30 transition-all duration-200 gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Open Form
                    </Button>
                    <Button className="flex-1 rounded-xl bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white hover:shadow-lg hover:shadow-[#268ece]/30 transition-all duration-200">Manage Form</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleRightsHolders < rightsHoldersList.length && (
            <div className="flex justify-center pt-4">
              <Button
                onClick={handleLoadMoreRightsHolders}
                className="bg-white hover:bg-[#f8fcff] text-[#268ece] border-2 border-[#268ece]/20 hover:border-[#268ece]/40 rounded-xl px-8 py-6 gap-2 shadow-lg hover:shadow-xl hover:shadow-[#268ece]/10 transition-all duration-300 group"
              >
                <span>Load More Forms</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-200" />
              </Button>
            </div>
          )}

          {/* Summary Info */}
          <div className="text-center text-sm text-[#7a99b3] pt-2">
            Showing {visibleRightsHolders} of {rightsHoldersList.length} forms
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
