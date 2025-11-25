import { LayoutDashboard, User, LogOut, ChevronRight, ChevronDown, TrendingUp, DollarSign, Menu, X, Heart, FolderOpen, Users, Newspaper, Lightbulb, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";
import LocaleSwitcher from "@/components/utility/LocaleSwitcher";
import { useSession } from "next-auth/react";
import { LoginDialog } from "../header/LoginDialogNew";
import { LogIn } from "lucide-react";
import { DonationDialog } from "../header/DonationDialog";

interface SidebarProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export function Sidebar({ activeMenu, setActiveMenu, isCollapsed, setIsCollapsed, isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  const { data: session } = useSession();
  const user: any = session?.user;
  const [isDonationExpanded, setIsDonationExpanded] = useState(false);
  const [isLatestExpanded, setIsLatestExpanded] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [donationDialogOpen, setDonationDialogOpen] = useState(false);

  const mainMenuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "my-account", label: "My Account", icon: User },
  ];

  const donationMenuItems = [
    { id: "qurban-donation", label: "Qurban Donation", parentId: "donation" },
    { id: "qurban-history", label: "Qurban History", parentId: "donation" },
  ];

  const otherMenuItems = [
    { id: "project", label: "Project", icon: FolderOpen, url: "/dashboard/csr" },
    { id: "rights-holders", label: "Rights Holders", icon: Users, url: "/dashboard/rightsholders" },
  ];

  // Header Menu Items (Mobile Only)
  const headerMenuItems = [
    { id: "about", label: "About", icon: Lightbulb },
    { id: "initiatives", label: "Initiatives", icon: Heart },
    { id: "campaign", label: "Campaign", icon: Megaphone },
  ];

  const latestMenuItems = [
    { id: "latest-news", label: "News", parentId: "latest" },
    { id: "latest-documents", label: "Documents", parentId: "latest" },
    { id: "latest-reports", label: "Reports", parentId: "latest" },
  ];

  const quickStats = [
    { label: "Total Donasi", value: "24", icon: DollarSign, color: "text-[#268ece]" },
    { label: "Bulan Ini", value: "+8", icon: TrendingUp, color: "text-[#3da9f5]" },
  ];

  const languages = [
    { id: "id", label: "Indonesia", flag: "🇮🇩" },
    { id: "en", label: "English", flag: "🇬🇧" },
    { id: "ar", label: "Arab", flag: "🇸🇦" },
    { id: "zh", label: "Mandarin", flag: "🇨🇳" },
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  // Reusable Sidebar Content Component
  const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className="h-full bg-white/95 backdrop-blur-2xl rounded-none lg:rounded-3xl shadow-2xl shadow-[#268ece]/10 border-0 lg:border border-[#268ece]/10 flex flex-col relative overflow-hidden md:hidden">
      {/* Animated Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#268ece]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3da9f5]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s", animationDuration: "10s" }} />

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#268ece]/3 via-transparent to-[#17a2b8]/3 opacity-50" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header with Toggle */}
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            {(!isCollapsed || isMobile) && (
              <div className="flex items-center gap-3">
                <Image src="/logo (1) (2).png" width={100} height={40} alt="Human Initiative" className="h-8 w-auto object-contain" />
              </div>
            )}

            {!isMobile && (
              <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)} className={`hover:bg-[#268ece]/10 text-[#7a99b3] hover:text-[#268ece] rounded-xl transition-all duration-300 ${isCollapsed ? "mx-auto" : ""}`}>
                {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
              </Button>
            )}
          </div>
        </div>

        {(!isCollapsed || isMobile) && (
          <>
            {/* Enhanced User Profile Section */}
            <div className="px-6 pb-6">
              <div className="bg-gradient-to-br from-[#e8f4fb] to-[#f0f8ff] backdrop-blur-xl rounded-2xl p-4 border border-[#268ece]/20 shadow-lg hover:shadow-xl hover:shadow-[#268ece]/10 transition-all duration-300 hover:scale-105">
                <div className="mb-4">
                  <h3 className="text-[#0a2540] mb-1">John Doe</h3>
                  <p className="text-xs text-[#7a99b3]">john.doe@email.com</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-2">
                  {quickStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="bg-white/80 rounded-xl p-2.5 backdrop-blur-sm border border-[#268ece]/10 hover:border-[#268ece]/30 transition-all duration-300 hover:scale-105 group">
                        <div className="flex items-center gap-1.5">
                          <div className={`${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[#7a99b3] text-xs">{stat.label}</span>
                        </div>
                        <p className="text-[#0a2540] mt-0.5">{stat.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Navigation Menu with Sections */}
            <nav className="flex-1 px-4 space-y-6 overflow-y-auto scrollbar-hide">
              {/* Header Menu - Mobile Only */}
              {isMobile && (
                <div>
                  <p className="text-[#7a99b3] text-xs uppercase tracking-wider px-3 mb-2 flex items-center gap-2">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#d1e7f5] to-transparent" />
                    Explore
                  </p>
                  <div className="space-y-1">
                    {headerMenuItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeMenu === item.id;

                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveMenu(item.id);
                            if (isMobile) setIsMobileMenuOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                            isActive ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white shadow-lg shadow-[#268ece]/30 scale-105" : "text-[#4a6b84] hover:bg-[#e8f4fb] hover:text-[#268ece] hover:scale-102"
                          }`}
                        >
                          {isActive && <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />}
                          <div className={`p-2 rounded-lg transition-all duration-300 relative z-10 ${isActive ? "bg-white/20 shadow-lg" : "bg-[#268ece]/5 group-hover:bg-[#268ece]/10"}`}>
                            <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-[#7a99b3] group-hover:text-[#268ece]"}`} />
                          </div>
                          <span className="flex-1 text-left relative z-10">{item.label}</span>
                          {isActive && <ChevronRight className="w-4 h-4 text-white animate-pulse relative z-10" />}
                        </button>
                      );
                    })}

                    {/* Latest Menu with Submenu - Mobile Only */}
                    <div>
                      <button
                        onClick={() => setIsLatestExpanded(!isLatestExpanded)}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                          activeMenu.startsWith("latest") ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white shadow-lg shadow-[#268ece]/30 scale-105" : "text-[#4a6b84] hover:bg-[#e8f4fb] hover:text-[#268ece] hover:scale-102"
                        }`}
                      >
                        {activeMenu.startsWith("latest") && <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />}
                        <div className={`p-2 rounded-lg transition-all duration-300 relative z-10 ${activeMenu.startsWith("latest") ? "bg-white/20 shadow-lg" : "bg-[#268ece]/5 group-hover:bg-[#268ece]/10"}`}>
                          <Newspaper className={`w-5 h-5 ${activeMenu.startsWith("latest") ? "text-white" : "text-[#7a99b3] group-hover:text-[#268ece]"}`} />
                        </div>
                        <span className="flex-1 text-left relative z-10">Latest</span>
                        <ChevronDown className={`w-4 h-4 relative z-10 transition-transform duration-300 ${isLatestExpanded ? "rotate-180" : ""} ${activeMenu.startsWith("latest") ? "text-white" : ""}`} />
                      </button>

                      {/* Latest Submenu */}
                      {isLatestExpanded && (
                        <div className="ml-12 mt-1 space-y-1">
                          {latestMenuItems.map((subItem) => {
                            const isActive = activeMenu === subItem.id;
                            return (
                              <button
                                key={subItem.id}
                                onClick={() => {
                                  setActiveMenu(subItem.id);
                                  if (isMobile) setIsMobileMenuOpen(false);
                                }}
                                className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all duration-300 group text-left ${
                                  isActive ? "bg-[#268ece]/20 text-[#268ece]" : "text-[#7a99b3] hover:bg-[#268ece]/10 hover:text-[#268ece]"
                                }`}
                              >
                                <div className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#268ece]" : "bg-[#7a99b3]"}`} />
                                <span className="text-sm">{subItem.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Main Menu */}
              {session && (
                <div>
                  <p className="text-[#7a99b3] text-xs uppercase tracking-wider px-3 mb-2 flex items-center gap-2">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#d1e7f5] to-transparent" />
                    {isMobile ? "Dashboard" : "Menu"}
                  </p>
                  <div className="space-y-1">
                    {mainMenuItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeMenu === item.id;

                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveMenu(item.id);
                            if (isMobile) setIsMobileMenuOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                            isActive ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white shadow-lg shadow-[#268ece]/30 scale-105" : "text-[#4a6b84] hover:bg-[#e8f4fb] hover:text-[#268ece] hover:scale-102"
                          }`}
                        >
                          {isActive && <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />}
                          <div className={`p-2 rounded-lg transition-all duration-300 relative z-10 ${isActive ? "bg-white/20 shadow-lg" : "bg-[#268ece]/5 group-hover:bg-[#268ece]/10"}`}>
                            <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-[#7a99b3] group-hover:text-[#268ece]"}`} />
                          </div>
                          <span className="flex-1 text-left relative z-10">{item.label}</span>
                          {isActive && <ChevronRight className="w-4 h-4 text-white animate-pulse relative z-10" />}
                        </button>
                      );
                    })}

                    {/* Donation with Submenu */}
                    <div>
                      <button
                        onClick={() => setIsDonationExpanded(!isDonationExpanded)}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                          activeMenu.includes("qurban") || activeMenu === "donation"
                            ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white shadow-lg shadow-[#268ece]/30 scale-105"
                            : "text-[#4a6b84] hover:bg-[#e8f4fb] hover:text-[#268ece] hover:scale-102"
                        }`}
                      >
                        {(activeMenu.includes("qurban") || activeMenu === "donation") && <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />}
                        <div className={`p-2 rounded-lg transition-all duration-300 relative z-10 ${activeMenu.includes("qurban") || activeMenu === "donation" ? "bg-white/20 shadow-lg" : "bg-[#268ece]/5 group-hover:bg-[#268ece]/10"}`}>
                          <Heart className={`w-5 h-5 ${activeMenu.includes("qurban") || activeMenu === "donation" ? "text-white" : "text-[#7a99b3] group-hover:text-[#268ece]"}`} />
                        </div>
                        <span className="flex-1 text-left relative z-10">Donation</span>
                        <ChevronDown className={`w-4 h-4 relative z-10 transition-transform duration-300 ${isDonationExpanded ? "rotate-180" : ""} ${activeMenu.includes("qurban") || activeMenu === "donation" ? "text-white" : ""}`} />
                      </button>

                      {/* Submenu */}
                      {isDonationExpanded && (
                        <div className="ml-12 mt-1 space-y-1">
                          {donationMenuItems.map((subItem) => {
                            const isActive = activeMenu === subItem.id;
                            return (
                              <button
                                key={subItem.id}
                                onClick={() => {
                                  setActiveMenu(subItem.id);
                                  if (isMobile) setIsMobileMenuOpen(false);
                                }}
                                className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all duration-300 group text-left ${
                                  isActive ? "bg-[#268ece]/20 text-[#268ece]" : "text-[#7a99b3] hover:bg-[#268ece]/10 hover:text-[#268ece]"
                                }`}
                              >
                                <div className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#268ece]" : "bg-[#7a99b3]"}`} />
                                <span className="text-sm">{subItem.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Other Menu Items */}
                    {otherMenuItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeMenu === item.id;

                      return (
                        <Link
                          key={item.id}
                          href={item.url}
                          onClick={() => {
                            setActiveMenu(item.id);
                            if (isMobile) setIsMobileMenuOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                            isActive ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white shadow-lg shadow-[#268ece]/30 scale-105" : "text-[#4a6b84] hover:bg-[#e8f4fb] hover:text-[#268ece] hover:scale-102"
                          }`}
                        >
                          {isActive && <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />}
                          <div className={`p-2 rounded-lg transition-all duration-300 relative z-10 ${isActive ? "bg-white/20 shadow-lg" : "bg-[#268ece]/5 group-hover:bg-[#268ece]/10"}`}>
                            <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-[#7a99b3] group-hover:text-[#268ece]"}`} />
                          </div>
                          <span className="flex-1 text-left relative z-10">{item.label}</span>
                          {isActive && <ChevronRight className="w-4 h-4 text-white animate-pulse relative z-10" />}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </nav>

            {/* Language Selector - Mobile Only */}
            {isMobile && (
              <div className="px-4 pb-4">
                <p className="text-[#7a99b3] text-xs uppercase tracking-wider px-3 mb-2">Language</p>
                <LocaleSwitcher />
              </div>
            )}

            {/* Logout Button */}
            {session && (
              <div className="p-4 border-t border-[#d1e7f5]">
                <Button variant="ghost" onClick={handleSignOut} className="w-full justify-start gap-3 text-[#7a99b3] hover:bg-red-50 hover:text-red-500 rounded-xl transition-all duration-300 group">
                  <div className="p-2 bg-[#268ece]/5 rounded-lg group-hover:bg-red-100 transition-all duration-300">
                    <LogOut className="w-5 h-5" />
                  </div>
                  <span>Logout</span>
                </Button>
              </div>
            )}

            {session ? (
              <div className="px-4 pb-4 block">
                <Link href={"/dashboard"} className="gap-2 px-3 md:px-4 py-2 h-auto rounded-xl hover:bg-[#268ece]/5 transition-all duration-300 group">
                  <span className="text-sm text-[#0a2540]">{user?.full_name}</span>
                  {/* <ChevronDown className="w-4 h-4 text-[#7a99b3] group-hover:text-[#268ece] transition-colors duration-300" /> */}
                </Link>
              </div>
            ) : (
              <div className="px-4 pb-4 block w-full">
                <Button
                  className="w-full bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white hover:shadow-xl hover:shadow-[#268ece]/40 rounded-xl px-6 py-5 gap-2 transition-all duration-300 group hover:scale-105"
                  onClick={() => setLoginDialogOpen(true)}
                >
                  <LogIn className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Login
                </Button>
              </div>
            )}

            <div className="px-4 pb-4 block w-full">
              <Button
                className="w-full flex bg-gradient-to-r from-hi-blue-800 to-hi-blue-700 text-white hover:shadow-xl hover:shadow-[#268ece]/40 rounded-xl px-6 py-5 gap-2 transition-all duration-300 group hover:scale-105"
                onClick={() => setDonationDialogOpen(true)}
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 fill-white" />
                <span className="font-medium">Donate</span>
              </Button>
            </div>
          </>
        )}

        {/* Collapsed Menu Icons */}
        {isCollapsed && !isMobile && (
          <nav className="flex-1 px-2 space-y-2 overflow-y-auto">
            {[...mainMenuItems, { id: "donation", label: "Donation", icon: Heart }, ...otherMenuItems].map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.id || activeMenu.includes("qurban");

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === "donation") {
                      setIsDonationExpanded(!isDonationExpanded);
                    } else {
                      setActiveMenu(item.id);
                    }
                  }}
                  className={`w-full flex items-center justify-center p-4 rounded-xl transition-all duration-300 group relative ${
                    isActive ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white shadow-lg shadow-[#268ece]/30" : "text-[#7a99b3] hover:bg-[#e8f4fb] hover:text-[#268ece]"
                  }`}
                  title={item.label}
                >
                  <Icon className="w-6 h-6" />
                </button>
              );
            })}
          </nav>
        )}
      </div>
      <DonationDialog open={donationDialogOpen} onOpenChange={setDonationDialogOpen} />

      <LoginDialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen} />
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar - Sheet/Drawer */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="p-0 w-80">
          <SidebarContent isMobile={true} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar - Floating */}
      <div className="hidden lg:block relative">
        <div className={`sticky left-12 top-24 bottom-12 z-40 transition-all duration-500 ${isCollapsed ? "w-20" : "w-80"}`}>
          <SidebarContent isMobile={false} />
        </div>

        {/* Spacer for layout */}
        <div className={`transition-all duration-500 ${isCollapsed ? "w-28" : "w-88"}`} />
      </div>
    </>
  );
}
