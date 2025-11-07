import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { useState, useEffect } from "react";
import { ShareDialog } from "./ShareDialog";

export function MobileDonateButtons() {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [showFloatingBar, setShowFloatingBar] = useState(false);

  const raised = 87450;
  const goal = 150000;
  const percentage = Math.round((raised / goal) * 100);

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
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-2xl text-gray-900">${raised.toLocaleString()}</div>
              <div className="text-sm text-gray-600">raised of ${goal.toLocaleString()}</div>
            </div>
            <div className="text-right">
              <div className="text-xl text-gray-900">{percentage}%</div>
              <div className="text-xs text-gray-600">funded</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button className="flex-1 bg-[#1780b3] hover:bg-[#075d8e] h-12 text-base">Donate Now</Button>
            <Button variant="outline" className="h-12 px-4 border-[#1780b3] text-[#1780b3] hover:bg-[#1780b3] hover:text-white" onClick={() => setShareDialogOpen(true)}>
              <Share2 size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Bottom Bar - Appears When Scrolling */}
      <div className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl transition-transform duration-300 z-50 ${showFloatingBar ? "translate-y-0" : "translate-y-full"}`}>
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-xl text-gray-900">${raised.toLocaleString()}</div>
              <div className="text-xs text-gray-600">raised of ${goal.toLocaleString()}</div>
            </div>
            <div className="text-right">
              <div className="text-lg text-gray-900">{percentage}%</div>
              <div className="text-xs text-gray-600">funded</div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1 bg-[#1780b3] hover:bg-[#075d8e] h-12">Donate Now</Button>
            <Button variant="outline" className="h-12 px-4 border-[#1780b3] text-[#1780b3] hover:bg-[#1780b3] hover:text-white" onClick={() => setShareDialogOpen(true)}>
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
