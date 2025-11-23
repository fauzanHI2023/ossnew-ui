"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { Calendar, Clock, FileText, Download, Eye, Search, Briefcase, ClipboardList, CheckCircle2, AlertCircle, Loader2, DollarSign, Target, PlayCircle, XCircle, Filter, ArrowRight, CheckCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { fetchListAppointmentbyUser } from "../../../../../services/project/auth-list-appointment-by-user";
import { fetchProgramFollowedByGuid } from "../../../../../services/project/auth-list-program-followed";
import { Appointment } from "../../../../../utils/types/appointment";

interface Project {
  id: number;
  project_no: string;
  project_name: string;
  program_name: string;
  execution_date_start: string;
  execution_date_finish: string;
  status: string; // "Finishing"
  amount: string;
  finance_type: string; // "Lunas"
  total_payment: string;
  running_stamp: string | null;
}

export function ProjectContent() {
  const { data: session, status, update }: any = useSession();
  const [searchQuery, setSearchQuery] = useState("");
  const [appointmentStatus, setAppointmentStatus] = useState<"all" | "new" | "completed">("all");
  const [projectStatus, setProjectStatus] = useState<"all" | "new" | "running" | "revision" | "review" | "on-progress" | "finishing" | "waiting-payment" | "complete" | "closed">("all");
  const [visibleProjects, setVisibleProjects] = useState(5);
  const [userId, setUserId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("appointment");

  useEffect(() => {
    if (status === "authenticated" && session?.user?.phpDonorData?.length > 0) {
      setUserId(session.user.phpDonorData[0].guid);
      console.log("User ID diperbarui:", session.user.phpDonorData[0].guid);
    }
  }, [status, session]);

  const { data: appointmentData = [], isLoading: loadingAppointment } = useQuery<Appointment[]>({
    queryKey: ["appointments", userId],
    queryFn: () => fetchListAppointmentbyUser(userId!),
    enabled: !!userId,
  });

  const { data: projectData, isLoading: loadingProject } = useQuery<Project[]>({
    queryKey: ["projects-followed", userId],
    queryFn: () => fetchProgramFollowedByGuid(userId!),
    enabled: !!userId,
  });

  const getAppointmentStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return (
          <Badge className="bg-blue-500/10 text-blue-700 border-blue-200 hover:bg-blue-500/20">
            <Calendar className="w-3 h-3 mr-1" />
            Scheduled
          </Badge>
        );
      case "completed":
        return (
          <Badge className="bg-emerald-500/10 text-emerald-700 border-emerald-200 hover:bg-emerald-500/20">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        );
      case "cancelled":
        return (
          <Badge className="bg-red-500/10 text-red-700 border-red-200 hover:bg-red-500/20">
            <XCircle className="w-3 h-3 mr-1" />
            Cancelled
          </Badge>
        );
      case "rescheduled":
        return (
          <Badge className="bg-amber-500/10 text-amber-700 border-amber-200 hover:bg-amber-500/20">
            <Clock className="w-3 h-3 mr-1" />
            Rescheduled
          </Badge>
        );
      default:
        return null;
    }
  };

  const getStatusStep = (status: string) => {
    const steps = ["review", "on-progress", "finishing", "waiting-payment", "closed"];
    return steps.indexOf(status);
  };

  const renderStatusTimeline = (currentStatus: string) => {
    const normalizeStatus = (status: string) => {
      if (!status) return "review";

      const s = status.toLowerCase();

      if (["new", "draft", "need revision"].includes(s)) return "review";
      if (s === "running") return "on-progress";
      if (["finishing", "verified"].includes(s)) return "finishing";
      if (s === "waiting payment") return "waiting-payment";
      if (s === "closed") return "closed";

      return "review"; // fallback aman
    };

    const normalized = normalizeStatus(currentStatus);
    const currentStep = getStatusStep(normalized);

    const statuses = [
      {
        key: "review",
        label: "Review",
        icon: AlertCircle,
        color: "purple",
        bgColor: "bg-purple-500",
        lightBg: "bg-purple-500/10",
        textColor: "text-purple-700",
        borderColor: "border-purple-500",
      },
      {
        key: "on-progress",
        label: "On Progress",
        icon: Loader2,
        color: "blue",
        bgColor: "bg-blue-500",
        lightBg: "bg-blue-500/10",
        textColor: "text-blue-700",
        borderColor: "border-blue-500",
      },
      {
        key: "finishing",
        label: "Finishing",
        icon: CheckCircle2,
        color: "emerald",
        bgColor: "bg-emerald-500",
        lightBg: "bg-emerald-500/10",
        textColor: "text-emerald-700",
        borderColor: "border-emerald-500",
      },
      {
        key: "waiting-payment",
        label: "Waiting Payment",
        icon: DollarSign,
        color: "amber",
        bgColor: "bg-amber-500",
        lightBg: "bg-amber-500/10",
        textColor: "text-amber-700",
        borderColor: "border-amber-500",
      },
      {
        key: "closed",
        label: "Complete",
        icon: CheckCheck,
        color: "teal",
        bgColor: "bg-teal-500",
        lightBg: "bg-teal-500/10",
        textColor: "text-teal-700",
        borderColor: "border-teal-500",
      },
    ];

    return (
      <div className="bg-gradient-to-br from-[#268ece]/5 to-[#3da9f5]/5 rounded-2xl p-4 md:p-6">
        <p className="text-xs text-[#7a99b3] mb-4">Status Progress</p>
        <div className="flex items-center justify-between gap-2 md:gap-3">
          {statuses.map((status, index) => {
            const Icon = status.icon;
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            const isFuture = index > currentStep;

            return (
              <div key={status.key} className="flex items-center flex-1">
                {/* Status Circle */}
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className={`
                    relative flex items-center justify-center rounded-full border-2 transition-all duration-300
                    ${isActive ? `${status.bgColor} ${status.borderColor} scale-110 shadow-lg` : ""}
                    ${isCompleted ? "bg-emerald-500 border-emerald-500" : ""}
                    ${isFuture ? "bg-gray-200 border-gray-300" : ""}
                    w-8 h-8 md:w-10 md:h-10
                  `}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    ) : (
                      <Icon
                        className={`
                        w-3 h-3 md:w-4 md:h-4
                        ${isActive ? "text-white" : ""}
                        ${isFuture ? "text-gray-400" : ""}
                        ${status.key === "on-progress" && isActive ? "animate-spin" : ""}
                      `}
                      />
                    )}

                    {isActive && <div className="absolute inset-0 rounded-full animate-ping opacity-75" style={{ backgroundColor: status.bgColor.replace("bg-", "") }} />}
                  </div>

                  {/* Label */}
                  <p
                    className={`
                    text-[10px] md:text-xs text-center transition-colors duration-300
                    ${isActive ? status.textColor + " font-semibold" : ""}
                    ${isCompleted ? "text-emerald-700" : ""}
                    ${isFuture ? "text-gray-400" : ""}
                    hidden sm:block
                  `}
                  >
                    {status.label}
                  </p>
                </div>

                {/* Connector Arrow */}
                {index < statuses.length - 1 && (
                  <ArrowRight
                    className={`
                    w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mx-1
                    ${index < currentStep ? "text-emerald-500" : "text-gray-300"}
                    transition-colors duration-300
                  `}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Status Label */}
        {/* <div className="sm:hidden mt-4 text-center">
          <Badge className={statuses[currentStep].lightBg + " " + statuses[currentStep].textColor + " border-0"}>{statuses[currentStep].label}</Badge>
        </div> */}
      </div>
    );
  };

  const safeLower = (val?: string | null) => (val ?? "").toLowerCase();

  const normalizeAppointmentStatus = (val?: string | null) => (val ?? "").toLowerCase().trim();

  const normalizeStatus = (status: string) => {
    if (!status) return "review";

    const s = status.toLowerCase();

    if (["new", "draft", "need revision"].includes(s)) return "review";
    if (s === "running") return "on-progress";
    if (["finishing", "verified"].includes(s)) return "finishing";
    if (s === "waiting payment") return "waiting-payment";
    if (s === "closed") return "closed";

    return "review";
  };

  const appointments = appointmentData ?? [];
  const projects = projectData ?? [];

  const filteredAppointments = appointments.filter((item: Appointment) => {
    // STATUS FILTER
    const matchesStatus = appointmentStatus === "all" || normalizeAppointmentStatus(item?.status?.status) === appointmentStatus;

    // SEARCH FILTER
    const q = searchQuery.toLowerCase();

    const matchesSearch = item.tempat?.toLowerCase().includes(q) || item.notes?.toLowerCase().includes(q) || item.program_name?.toLowerCase().includes(q) || item.id.toString().includes(q) || item.date.toLowerCase().includes(q);

    return matchesStatus && matchesSearch;
  });

  const filteredProjects = projects.filter((item: Project) => {
    const matchesStatus = projectStatus === "all" || normalizeStatus(item?.status) === projectStatus;

    const q = searchQuery.toLowerCase();

    const matchesSearch = item.project_name?.toLowerCase().includes(q) || item.program_name?.toLowerCase().includes(q) || item.project_no?.toLowerCase().includes(q) || item.id.toString().includes(q);

    return matchesStatus && matchesSearch;
  });

  // Statistik
  const totalAppointments = appointments.length;
  const scheduledCount = appointments.filter((a: any) => a.status.status === "new").length;

  const totalProjects = projects.length;
  const onProgressCount = projects.filter((p: any) => p.status === "Running").length;
  const completeCount = projects.filter((p: any) => p.status === "Closed").length;

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
                <h1 className="text-white drop-shadow-lg">Project Management</h1>
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30">
                  <Briefcase className="w-3 h-3 mr-1.5" />
                  <span className="text-xs">{totalProjects} Projects</span>
                </Badge>
              </div>
              <p className="text-white/90 mb-6">Kelola appointment dan project yang Anda ikuti</p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Appointments</p>
                  <p className="text-white text-lg md:text-xl">{totalAppointments}</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Scheduled</p>
                  <p className="text-white text-lg md:text-xl">{scheduledCount}</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">On Progress</p>
                  <p className="text-white text-lg md:text-xl">{onProgressCount}</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Complete</p>
                  <p className="text-white text-lg md:text-xl">{completeCount}</p>
                </div>
              </div>
            </div>

            {/* Icon Section */}
            <div className="relative group cursor-pointer">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl border-2 border-white/40 flex flex-col items-center justify-center hover:from-white/40 hover:to-white/20 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                <div className="relative">
                  <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
                </div>
                <p className="text-white text-sm">Projects</p>
                <p className="text-white/70 text-xs mt-1">Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="appointments" className="w-full">
        <TabsList className="w-full bg-white/90 backdrop-blur-xl border-2 border-[#268ece]/10 p-2 rounded-2xl shadow-xl mb-8 grid grid-cols-2 gap-2 h-auto">
          <TabsTrigger
            value="appointments"
            className="rounded-xl text-gray-400 data-[state=active]:bg-gradient-to-r data-[state=active]:dark:text-white data-[state=active]:from-[#268ece] data-[state=active]:to-[#3da9f5] data-[state=active]:text-white data-[state=active]:shadow-lg py-3 px-4 transition-all duration-300"
          >
            <ClipboardList className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Appointments</span>
            <span className="sm:hidden">Appt</span>
          </TabsTrigger>
          <TabsTrigger
            value="projects"
            className="rounded-xl text-gray-400 data-[state=active]:bg-gradient-to-r data-[state=active]:dark:text-white data-[state=active]:from-[#268ece] data-[state=active]:to-[#3da9f5] data-[state=active]:text-white data-[state=active]:shadow-lg py-3 px-4 transition-all duration-300"
          >
            <PlayCircle className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Project yang Diikuti</span>
            <span className="sm:hidden">Projects</span>
          </TabsTrigger>
        </TabsList>

        {/* Appointments Tab */}
        <TabsContent value="appointments" className="space-y-6">
          {/* Filter Section */}
          <Card className="border-0 shadow-2xl shadow-[#268ece]/10 overflow-hidden bg-white">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#268ece] via-[#3da9f5] to-[#17a2b8]" />
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7a99b3]" />
                  <Input
                    placeholder="Search appointments..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl bg-white/50 backdrop-blur-sm"
                  />
                </div>

                {/* Status Filter */}
                <div className="flex gap-2 flex-wrap">
                  <Button
                    onClick={() => setAppointmentStatus("all")}
                    variant={appointmentStatus === "all" ? "default" : "outline"}
                    size="sm"
                    className={`rounded-xl bg-white ${appointmentStatus === "all" ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white" : "border-2 border-[#268ece]/20 hover:border-[#268ece]/40 text-gray-400"}`}
                  >
                    <Filter className="w-3.5 h-3.5 mr-1" />
                    All
                  </Button>
                  <Button
                    onClick={() => setAppointmentStatus("new")}
                    variant={appointmentStatus === "new" ? "default" : "outline"}
                    size="sm"
                    className={`rounded-xl bg-white ${appointmentStatus === "new" ? "bg-blue-500 hover:bg-blue-600 text-white" : "border-2 border-blue-200 hover:border-blue-400 text-blue-700"}`}
                  >
                    New
                  </Button>
                  <Button
                    onClick={() => setAppointmentStatus("completed")}
                    variant={appointmentStatus === "completed" ? "default" : "outline"}
                    size="sm"
                    className={`rounded-xl bg-white ${appointmentStatus === "completed" ? "bg-emerald-500 hover:bg-emerald-600 text-white" : "border-2 border-emerald-200 hover:border-emerald-400 text-emerald-700"}`}
                  >
                    Completed
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Appointments List */}
          <div className="grid gap-4">
            {filteredAppointments.length === 0 ? (
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-12 text-center">
                  <div className="w-20 h-20 bg-[#268ece]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-10 h-10 text-[#268ece]" />
                  </div>
                  <h3 className="text-[#0a2540] mb-2">No appointments found</h3>
                  <p className="text-[#7a99b3]">Try adjusting your filters or search query</p>
                </CardContent>
              </Card>
            ) : (
              filteredAppointments.map((apt: any) => (
                <Card key={apt.id} className="bg-white border-0 shadow-xl shadow-[#268ece]/5 overflow-hidden group hover:shadow-2xl hover:shadow-[#268ece]/10 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#268ece]/10 to-[#3da9f5]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <ClipboardList className="w-8 h-8 text-[#268ece]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <h3 className="text-[#0a2540]">{apt.program_name}</h3>
                              {getAppointmentStatusBadge(apt.status)}
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-[#7a99b3] mb-3">
                              <div className="flex items-center gap-1">
                                <FileText className="w-4 h-4" />
                                <span>{apt.id}</span>
                              </div>
                              <Badge variant="outline" className="border-[#268ece]/20 text-[#268ece]">
                                {apt.tempat}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        {/* Meeting Info */}
                        <div className="bg-[#268ece]/5 rounded-xl p-4 mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-[#268ece]" />
                            <span className="text-sm text-[#0a2540]">
                              {new Date(apt.date).toLocaleDateString("id-ID", {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <p className="text-sm text-[#7a99b3]">{apt.notes}</p>
                        </div>

                        {/* Proposal File */}
                        {/* {apt.proposal_id!== "-" && ( */}
                        <div className="flex items-center gap-2 mb-4 p-3 bg-blue-500/5 rounded-xl border border-blue-200/50">
                          <FileText className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-[#0a2540] flex-1">Laporan.pdf</span>
                          <Button size="sm" variant="ghost" className="h-8 px-2 text-blue-600 hover:text-blue-700 hover:bg-blue-500/10">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                        {/* )} */}

                        {/* Actions */}
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white hover:shadow-lg hover:shadow-[#268ece]/30 rounded-xl gap-2">
                            <Eye className="w-4 h-4" />
                            View Details
                          </Button>
                          {apt.status === "scheduled" && (
                            <Button size="sm" variant="outline" className="border-2 border-[#268ece]/20 hover:border-[#268ece]/40 rounded-xl gap-2">
                              <Calendar className="w-4 h-4" />
                              Reschedule
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        {/* Projects Followed Tab */}
        <TabsContent value="projects" className="space-y-6">
          {/* Filter Section */}
          <Card className="bg-white border-0 shadow-2xl shadow-[#268ece]/10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#268ece] via-[#3da9f5] to-[#17a2b8]" />
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7a99b3]" />
                  <Input
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl bg-white/50 backdrop-blur-sm"
                  />
                </div>

                {/* Status Filter */}
                <div className="flex gap-2 flex-wrap">
                  <Button
                    onClick={() => setProjectStatus("all")}
                    variant={projectStatus === "all" ? "default" : "outline"}
                    size="sm"
                    className={`rounded-xl bg-white ${projectStatus === "all" ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white" : "border-2 border-[#268ece]/20 hover:border-[#268ece]/40 text-gray-400"}`}
                  >
                    <Filter className="w-3.5 h-3.5 mr-1" />
                    All
                  </Button>
                  <Button
                    onClick={() => setProjectStatus("review")}
                    variant={projectStatus === "review" ? "default" : "outline"}
                    size="sm"
                    className={`rounded-xl bg-white ${projectStatus === "review" ? "bg-purple-500 hover:bg-purple-600 text-white" : "border-2 border-purple-200 hover:border-purple-400 text-purple-700"}`}
                  >
                    Review
                  </Button>
                  <Button
                    onClick={() => setProjectStatus("on-progress")}
                    variant={projectStatus === "on-progress" ? "default" : "outline"}
                    size="sm"
                    className={`rounded-xl bg-white ${projectStatus === "on-progress" ? "bg-blue-500 hover:bg-blue-600 text-white" : "border-2 border-blue-200 hover:border-blue-400 text-blue-700"}`}
                  >
                    On Progress
                  </Button>
                  <Button
                    onClick={() => setProjectStatus("finishing")}
                    variant={projectStatus === "finishing" ? "default" : "outline"}
                    size="sm"
                    className={`rounded-xl bg-white ${projectStatus === "finishing" ? "bg-emerald-500 hover:bg-emerald-600 text-white" : "border-2 border-emerald-200 hover:border-emerald-400 text-emerald-700"}`}
                  >
                    Finish
                  </Button>
                  <Button
                    onClick={() => setProjectStatus("waiting-payment")}
                    variant={projectStatus === "waiting-payment" ? "default" : "outline"}
                    size="sm"
                    className={`rounded-xl bg-white ${projectStatus === "waiting-payment" ? "bg-amber-500 hover:bg-amber-600 text-white" : "border-2 border-amber-200 hover:border-amber-400 text-amber-700"}`}
                  >
                    Waiting Payment
                  </Button>
                  <Button
                    onClick={() => setProjectStatus("closed")}
                    variant={projectStatus === "closed" ? "default" : "outline"}
                    size="sm"
                    className={`rounded-xl bg-white ${projectStatus === "closed" ? "bg-teal-500 hover:bg-teal-600 text-white" : "border-2 border-teal-200 hover:border-teal-400 text-teal-700"}`}
                  >
                    Complete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects List */}
          <div className="grid gap-6">
            {filteredProjects.length === 0 ? (
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-12 text-center">
                  <div className="w-20 h-20 bg-[#268ece]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-10 h-10 text-[#268ece]" />
                  </div>
                  <h3 className="text-[#0a2540] mb-2">No projects found</h3>
                  <p className="text-[#7a99b3]">Try adjusting your filters or search query</p>
                </CardContent>
              </Card>
            ) : (
              filteredProjects.slice(0, visibleProjects).map((project: any) => (
                <Card key={project.id} className="border-0 shadow-xl bg-white shadow-[#268ece]/5 overflow-hidden group hover:shadow-2xl hover:shadow-[#268ece]/10 transition-all duration-500">
                  <CardContent className="p-6">
                    {/* Header Info */}
                    <div className="flex flex-col lg:flex-row gap-6 mb-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#268ece]/10 to-[#3da9f5]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Briefcase className="w-8 h-8 text-[#268ece]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[#0a2540] mb-2">{project.program_name}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[#7a99b3] mb-4">
                          <div className="flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            <span>{project.id}</span>
                          </div>
                          <Badge variant="outline" className="border-[#268ece]/20 text-[#268ece]">
                            {project.programName}
                          </Badge>
                        </div>

                        {/* Timeline Info */}
                        <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
                          <div className="flex items-center gap-2">
                            <PlayCircle className="w-4 h-4 text-[#268ece]" />
                            <div>
                              <span className="text-xs text-[#7a99b3]">Mulai Eksekusi: </span>
                              <span className="text-[#0a2540]">{project.execution_date_start}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-[#268ece]" />
                            <div>
                              <span className="text-xs text-[#7a99b3]">Target Rencana Selesai: </span>
                              <span className="text-[#0a2540]">{project.execution_date_finish}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Status Timeline */}
                    {renderStatusTimeline(project.status)}

                    {/* Report Available */}
                    {/* {project.hasReport && ( */}
                    <div className="flex items-center gap-2 mt-4 p-3 bg-emerald-500/5 rounded-xl border border-emerald-200/50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm text-emerald-700 flex-1">Report Available to Download</span>
                      <Button size="sm" variant="ghost" className="h-8 px-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-500/10">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                    {/* )} */}

                    {/* Actions */}
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" className="bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white hover:shadow-lg hover:shadow-[#268ece]/30 rounded-xl gap-2">
                        <Eye className="w-4 h-4" />
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
            {filteredProjects.length > visibleProjects && (
              <div className="text-center mt-4">
                <Button size="sm" className="bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white hover:shadow-lg hover:shadow-[#268ece]/30 rounded-xl gap-2" onClick={() => setVisibleProjects(visibleProjects + 10)}>
                  Show More
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
