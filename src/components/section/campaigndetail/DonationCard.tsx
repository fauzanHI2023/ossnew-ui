import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Users, Clock, TrendingUp, CheckCircle2, Share2 } from "lucide-react";
import { useState } from "react";
import { ShareDialog } from "./ShareDialog";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "../../../../context/CartContext";
import { useRouter } from "next/navigation";
import { fetchdonorList } from "../../../../services/donation/campaign/auth-donorlist-bycampaign";

const donationAmounts = [25, 50, 100, 250, 500, 1000];

export function DonationCard() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  const raised = 87450;
  const goal = 150000;
  const donors = 1243;
  const daysLeft = 42;
  const percentage = (raised / goal) * 100;

  return (
    <>
      {/* Desktop Sticky Card */}
      <div className="sticky top-24 hidden lg:block">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-baseline justify-between mb-2">
              <div>
                <div className="text-3xl text-gray-900">${raised.toLocaleString()}</div>
                <div className="text-sm text-gray-600">raised of ${goal.toLocaleString()} goal</div>
              </div>
              <div className="text-right">
                <div className="text-xl text-gray-900">{Math.round(percentage)}%</div>
                <div className="text-xs text-gray-600">funded</div>
              </div>
            </div>
            <Progress value={percentage} className="h-2 bg-gray-200" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users size={16} className="text-gray-600" />
                <span className="text-lg text-gray-900">{donors}</span>
              </div>
              <div className="text-xs text-gray-600">supporters</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Clock size={16} className="text-gray-600" />
                <span className="text-lg text-gray-900">{daysLeft}</span>
              </div>
              <div className="text-xs text-gray-600">days left</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp size={16} className="text-gray-600" />
                <span className="text-lg text-gray-900">124</span>
              </div>
              <div className="text-xs text-gray-600">shares</div>
            </div>
          </div>

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
                  className={`py-3 px-4 border rounded-lg text-sm transition-all ${selectedAmount === amount && !customAmount ? "border-[#1780b3] bg-[#1780b3]/5 text-[#1780b3]" : "border-gray-300 text-gray-700 hover:border-[#1780b3]"}`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">$</span>
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
            <Button className="w-full bg-[#1780b3] hover:bg-[#075d8e] h-12 text-base">Donate Now</Button>
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

        {/* Tax Deductible Info */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-600 text-center">Tax deductible in the US. Tax ID: 12-3456789</p>
        </div>

        {/* Share Dialog */}
        <ShareDialog open={shareDialogOpen} onOpenChange={setShareDialogOpen} />
      </div>

      {/* Mobile Card - Static, No Buttons */}
      <div className="lg:hidden">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-baseline justify-between mb-2">
              <div>
                <div className="text-3xl text-gray-900">${raised.toLocaleString()}</div>
                <div className="text-sm text-gray-600">raised of ${goal.toLocaleString()} goal</div>
              </div>
              <div className="text-right">
                <div className="text-xl text-gray-900">{Math.round(percentage)}%</div>
                <div className="text-xs text-gray-600">funded</div>
              </div>
            </div>
            <Progress value={percentage} className="h-2 bg-gray-200" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users size={16} className="text-gray-600" />
                <span className="text-lg text-gray-900">{donors}</span>
              </div>
              <div className="text-xs text-gray-600">supporters</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Clock size={16} className="text-gray-600" />
                <span className="text-lg text-gray-900">{daysLeft}</span>
              </div>
              <div className="text-xs text-gray-600">days left</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp size={16} className="text-gray-600" />
                <span className="text-lg text-gray-900">124</span>
              </div>
              <div className="text-xs text-gray-600">shares</div>
            </div>
          </div>

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
                  className={`py-3 px-4 border rounded-lg text-sm transition-all ${selectedAmount === amount && !customAmount ? "border-[#1780b3] bg-[#1780b3]/5 text-[#1780b3]" : "border-gray-300 text-gray-700 hover:border-[#1780b3]"}`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">$</span>
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

          {/* Trust Badges */}
          <div className="pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
              <CheckCircle2 size={14} className="text-green-600" />
              <span>Secure payment via SSL encryption</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <CheckCircle2 size={14} className="text-green-600" />
              <span>100% of your donation goes to the cause</span>
            </div>
          </div>

          {/* Tax Deductible Info */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs text-gray-600 text-center">Tax deductible in the US. Tax ID: 12-3456789</p>
          </div>
        </div>
      </div>
    </>
  );
}
