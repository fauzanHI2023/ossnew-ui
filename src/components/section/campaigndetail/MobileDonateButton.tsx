import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Users, Clock, TrendingUp, CheckCircle2, Share2, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { ShareDialog } from "./ShareDialog";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "../../../../context/CartContext";
import { useRouter } from "next/navigation";
import { fetchdonorList } from "../../../../services/donation/campaign/auth-donorlist-bycampaign";
import { Campaign } from "../../../../utils/types/campaign";
import PopupNotif from "@/components/utility/PopupNotif";
import { inputCart } from "../../../../services/donation/transaction/auth-cart";

interface CampaignHeaderProps {
  post: Campaign;
}

const donationAmounts = [50000, 250000, 500000, 750000, 1000000, 5000000];

export function MobileDonateButtons({ post }: CampaignHeaderProps) {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [showFloatingBar, setShowFloatingBar] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const { cartItems, setCartItems } = useCart();
  const [cookies, setCookies] = useState<string | null>(null);
  const [notifMessage, setNotifMessage] = useState("");
  const router = useRouter();

  const donors = 1243;
  const daysLeft = 42;
  const raised = post?.donation_collected ?? 0;
  const goal = post?.target_donation ?? 0;
  const percentage = goal > 0 ? Math.round((raised / goal) * 100) : 0;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const handleDonasiClick = () => {
    // Ambil nominal donasi — prioritas customAmount, lalu selectedAmount
    const amount = customAmount ? Number(customAmount) : selectedAmount;

    if (!amount || amount <= 0) {
      setNotifMessage("Please enter a valid donation amount.");
      return;
    }

    if (post?.id) {
      // ambil cookie ID
      const cookiesId = document.cookie
        .split(";")
        .find((cookie) => cookie.trim().startsWith("osscart="))
        ?.split("=")[1];

      if (cookiesId) {
        const cartData = {
          cookies_id: cookiesId,
          campaign_id: post.id,
          quantity: 1, // karena bukan qurban, cukup 1
          amount,
        };

        // simpan di localStorage
        const storedData = JSON.parse(localStorage.getItem("osscart") || "[]");
        const updatedCart = [...storedData, cartData];

        localStorage.setItem("osscart", JSON.stringify(updatedCart));
        setCartItems(updatedCart);

        // kirim ke API
        inputCart(cartData.cookies_id, cartData.campaign_id, cartData.quantity, cartData.amount)
          .then(() => {
            setNotifMessage("Donation Added!");
            router.push(`/checkout`);
          })
          .catch(() => {
            setNotifMessage("An error occurred when making a donation.");
          });
      } else {
        setNotifMessage("Cookie 'osscart' tidak ditemukan.");
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling 300px
      setShowFloatingBar(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Static Card - Show when not scrolling */}
      <div className={`lg:hidden transition-opacity duration-300 ${showFloatingBar ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm my-4">
          {/* Progress Info */}
          <div className="mb-6">
            <div className="flex items-baseline justify-between mb-2">
              <div>
                <div className="text-3xl text-gray-900">{formatCurrency(post.donation_collected)}</div>
                <div className="text-sm text-gray-600">raised of {formatCurrency(post.target_donation)} goal</div>
              </div>
              <div className="text-right">
                <div className="text-xl text-gray-900">{percentage}%</div>
                <div className="text-xs text-gray-600">funded</div>
              </div>
            </div>
            <Progress value={percentage} className="h-2 bg-gray-200" />
          </div>

          {/* Buttons */}
          {/* Donation Amounts */}
          <div className="mb-6">
            <label className="text-sm text-gray-900 mb-3 block">Select amount</label>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                  className={`py-3 px-4 border rounded-lg text-xs transition-all ${selectedAmount === amount && !customAmount ? "border-[#1780b3] bg-[#1780b3]/5 text-[#1780b3]" : "border-gray-300 text-gray-700 hover:border-[#1780b3]"}`}
                >
                  {formatCurrency(amount)}
                </button>
              ))}
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">Rp</span>
              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(0);
                }}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1780b3] focus:border-transparent"
              />
            </div>
          </div>

          {/* Donation Buttons */}
          <div className="space-y-3">
            <Button className="w-full bg-[#1780b3] hover:bg-[#075d8e] h-12 text-base" onClick={handleDonasiClick}>
              Donate Now
            </Button>
            <Button variant="outline" className="w-full bg-white h-12 text-base gap-2 border-[#1780b3] text-[#1780b3] hover:bg-[#1780b3] hover:text-white" onClick={() => setShareDialogOpen(true)}>
              <Share2 size={18} />
              Share Campaign
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
              <CheckCircle2 size={14} className="text-green-600" />
              <span>Secure payment via SSL encryption</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <CheckCircle2 size={14} className="text-green-600" />
              <span>100% of your donation goes to the cause</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Bar - Appears When Scrolling */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-b from-white via-white to-gray-50 border-t-2 border-gray-200 shadow-2xl transition-transform duration-300 z-50 ${
          showFloatingBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="px-4 py-4">
          {/* Progress Bar - Compact and Modern */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#1780b3] fill-[#1780b3]" />
                <span className="text-sm text-gray-900">{formatCurrency(post.donation_collected)}</span>
                <span className="text-xs text-gray-500">raised of {formatCurrency(post.target_donation)} goal</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm text-[#1780b3]">{percentage}%</span>
              </div>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#1780b3] to-[#37aae1] rounded-full transition-all duration-500" style={{ width: `${percentage}%` }} />
            </div>
          </div>

          {/* Quick Amount Selection - Trendy Pills */}
          <div className="mb-3">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setIsCustom(false);
                    setCustomAmount("");
                  }}
                  className={`flex-shrink-0 px-5 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                    selectedAmount === amount && !isCustom ? "bg-gradient-to-r from-[#1780b3] to-[#37aae1] text-white shadow-md scale-105" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {formatCurrency(amount)}
                </button>
              ))}
              <button
                onClick={() => setIsCustom(true)}
                className={`flex-shrink-0 px-5 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                  isCustom ? "bg-gradient-to-r from-[#1780b3] to-[#37aae1] text-white shadow-md scale-105" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Custom
              </button>
            </div>
          </div>

          {/* Custom Amount Input */}
          {isCustom && (
            <div className="mb-3 animate-in slide-in-from-top-2 duration-200">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">Rp</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border-2 border-[#1780b3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#37aae1] transition-all"
                />
              </div>
            </div>
          )}

          {/* Action Buttons - Modern Layout */}
          <div className="flex gap-2">
            <Button className="flex-1 h-12 bg-gradient-to-r from-[#1780b3] to-[#37aae1] hover:from-[#075d8e] hover:to-[#1780b3] text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl" onClick={handleDonasiClick}>
              <Heart className="w-4 h-4 mr-2 fill-white" />
              Donate {isCustom ? customAmount || "..." : selectedAmount}
            </Button>
            <Button variant="outline" className="h-12 px-4 border-2 border-[#1780b3] text-[#1780b3] hover:bg-[#1780b3] hover:text-white rounded-xl transition-all duration-200" onClick={() => setShareDialogOpen(true)}>
              <Share2 size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Share Dialog */}
      <ShareDialog open={shareDialogOpen} onOpenChange={setShareDialogOpen} />
    </>
  );
}
