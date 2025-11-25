"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown, ShoppingCart, Languages, Menu, Heart, Trash2, ArrowRight, X, LogIn } from "lucide-react";
import LocaleSwitcher from "@/components/utility/LocaleSwitcher";
import { url } from "inspector";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { LoginDialog } from "./LoginDialogNew";
import { DonationDialog } from "./DonationDialog";
import { Cart } from "./Cart";

interface TopHeaderProps {
  onMenuClick?: () => void;
  onCartHover?: (isHovered: boolean) => void;
}

export function TopHeader({ onMenuClick, onCartHover }: TopHeaderProps) {
  const { data: session } = useSession();
  const callbackUrl = "/dashboard";
  const user: any = session?.user;
  const [activeMenu, setActiveMenu] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("Indonesia");
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isLatestOpen, setIsLatestOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [donationDialogOpen, setDonationDialogOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Qurban Kambing",
      price: 2500000,
      image: "🐐",
    },
    {
      id: 2,
      title: "Qurban Sapi",
      price: 3500000,
      image: "🐄",
    },
    {
      id: 3,
      title: "Zakat Fitrah",
      price: 50000,
      image: "💰",
    },
  ]);

  const mainMenuItems = [
    { id: "about", label: "About", url: "/aboutus" },
    { id: "initiatives", label: "Initiatives", url: "/initiatives" },
    { id: "campaign", label: "Campaign", url: "/campaign" },
  ];

  const latestSubMenu = [
    { id: "news", label: "News", url: "/news" },
    { id: "documents", label: "Documents", url: "/documents" },
    { id: "reports", label: "Reports", url: "/reports" },
  ];

  const languages = [
    { id: "id", label: "Indonesia", flag: "🇮🇩" },
    { id: "en", label: "English", flag: "🇬🇧" },
    { id: "ar", label: "Arab", flag: "🇸🇦" },
  ];

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/98 to-white/95 backdrop-blur-2xl border-b border-[#268ece]/10 shadow-lg shadow-[#268ece]/5" />

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#268ece] to-transparent opacity-60" />

      {/* Floating Glow Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-24 bg-[#268ece]/5 blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-24 bg-[#3da9f5]/5 blur-3xl" />

      <div className="relative z-10 px-4 md:px-8 lg:px-12">
        <div className="md:grid md:grid-cols-3 flex items-center justify-between h-16 md:h-20 gap-4">
          {/* flex items-center justify-between h-16 md:h-20 */}
          {/* Logo Section - Enhanced */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative group">
              <Link href="/">
                <Image src="/logo (1) (2).png" width={100} height={40} alt="Human Initiative" className="h-8 md:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Navigation Menu - Clean & Modern */}
          <nav className="hidden md:flex items-center gap-1">
            {mainMenuItems.map((item) => {
              const isActive = activeMenu === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={() => setActiveMenu(item.id)}
                  className={`relative px-3 lg:px-6 py-2 h-auto rounded-xl transition-all duration-300 overflow-hidden group ${isActive ? "text-white" : "text-[#4a6b84] hover:text-[#268ece]"}`}
                >
                  {/* Active Background with Gradient */}
                  {isActive && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#268ece] to-[#3da9f5] rounded-xl" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
                    </>
                  )}

                  {/* Hover Effect */}
                  {!isActive && <div className="absolute inset-0 bg-[#268ece]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}

                  <span className="relative z-10">{item.label}</span>

                  {/* Active Indicator Dot */}
                  {isActive && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-lg" />}
                </Link>
              );
            })}

            {/* Latest Menu with Enhanced Dropdown */}
            <div className="relative" onMouseEnter={() => setIsLatestOpen(true)} onMouseLeave={() => setIsLatestOpen(false)}>
              <Button variant="ghost" className={`relative px-3 lg:px-6 py-2 h-auto rounded-xl transition-all duration-300 overflow-hidden group ${activeMenu.startsWith("latest-") ? "text-white" : "text-[#4a6b84] hover:text-[#268ece]"}`}>
                {/* Active Background */}
                {activeMenu.startsWith("latest-") && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#268ece] to-[#3da9f5] rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
                  </>
                )}

                {/* Hover Effect */}
                {!activeMenu.startsWith("latest-") && <div className="absolute inset-0 bg-[#268ece]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}

                <span className="relative z-10 flex items-center gap-2">
                  Latest
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLatestOpen ? "rotate-180" : ""}`} />
                </span>

                {/* Active Indicator */}
                {activeMenu.startsWith("latest-") && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-lg" />}
              </Button>

              {/* Dropdown Menu */}
              <div className={`absolute right-0 top-full transition-all duration-200 ease-out ${isLatestOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"}`} style={{ zIndex: 150 }}>
                <div className="w-56 bg-white/95 backdrop-blur-2xl border-2 border-[#268ece]/20 shadow-2xl rounded-2xl p-2 overflow-hidden">
                  {/* Decorative Top Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#268ece] via-[#3da9f5] to-[#17a2b8]" />

                  <div className="pt-2 space-y-1">
                    {latestSubMenu.map((subItem) => {
                      const isActive = activeMenu === `latest-${subItem.id}`;

                      return (
                        <button
                          key={subItem.id}
                          onClick={() => {
                            setActiveMenu(`latest-${subItem.id}`);
                            setIsLatestOpen(false);
                          }}
                          className={`w-full rounded-xl px-4 py-3 cursor-pointer transition-all duration-300 relative overflow-hidden group text-left ${isActive ? "text-white" : "hover:bg-[#268ece]/5"}`}
                        >
                          {isActive && <div className="absolute inset-0 bg-gradient-to-r from-[#268ece] to-[#3da9f5]" />}
                          <Link href={subItem.url}>
                            <span className={`relative z-10 ${isActive ? "text-white" : "text-[#0a2540]"}`}>{subItem.label}</span>
                          </Link>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Right Actions - Modern & Sleek */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" onClick={onMenuClick} className="md:hidden rounded-xl hover:bg-[#268ece]/5 text-[#268ece] w-9 h-9">
              <Menu className="w-5 h-5" />
            </Button>

            {/* Shopping Cart with Manual Hover */}
            <Cart />

            {/* Language Selector with Dropdown */}
            <div className="hidden md:block relative" onMouseEnter={() => setIsLanguageOpen(true)} onMouseLeave={() => setIsLanguageOpen(false)}>
              {/* Dropdown Menu */}
              <LocaleSwitcher />
            </div>

            {/* Divider - Hidden on mobile */}
            <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-transparent via-[#d1e7f5] to-transparent" />

            {/* Login */}
            {session ? (
              <div className="hidden md:block">
                <Link href={"/dashboard"} className="gap-2 px-3 md:px-4 py-2 h-auto rounded-xl hover:bg-[#268ece]/5 transition-all duration-300 group">
                  <span className="text-sm text-[#0a2540]">{user?.full_name}</span>
                  {/* <ChevronDown className="w-4 h-4 text-[#7a99b3] group-hover:text-[#268ece] transition-colors duration-300" /> */}
                </Link>
              </div>
            ) : (
              <div className="hidden md:block">
                <Button
                  className="bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white hover:shadow-xl hover:shadow-[#268ece]/40 rounded-xl px-6 py-5 gap-2 transition-all duration-300 group hover:scale-105"
                  onClick={() => setLoginDialogOpen(true)}
                >
                  <LogIn className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Login
                </Button>
              </div>
            )}

            {/* Donate Button */}
            <Button
              className="hidden lg:flex bg-gradient-to-r from-hi-blue-800 to-hi-blue-700 text-white hover:shadow-xl hover:shadow-[#268ece]/40 rounded-xl px-6 py-5 gap-2 transition-all duration-300 group hover:scale-105"
              onClick={() => setDonationDialogOpen(true)}
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 fill-white" />
              <span className="font-medium">Donate</span>
            </Button>
          </div>
        </div>
      </div>
      <DonationDialog open={donationDialogOpen} onOpenChange={setDonationDialogOpen} />

      <LoginDialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen} />
    </header>
  );
}
