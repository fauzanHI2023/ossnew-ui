"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Copy, Check, Share2 } from "lucide-react";
import { useState } from "react";

interface ShareDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ShareDialog({ open, onOpenChange }: ShareDialogProps) {
  const [copied, setCopied] = useState(false);

  const campaignUrl = window.location.href;
  const campaignTitle = "Sponsor Orphan Refugees from Palestine, Afghanistan, Syria, Rohingya & Africa in Indonesia";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(campaignUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(campaignUrl)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const shareToTwitter = () => {
    const text = `${campaignTitle}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(campaignUrl)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const shareToWhatsApp = () => {
    const text = `${campaignTitle}\n${campaignUrl}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Share This Campaign</DialogTitle>
        </DialogHeader>

        <div className="py-6">
          {/* Decorative Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1780b3] to-[#37aae1] rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-[#1780b3] to-[#37aae1] rounded-full flex items-center justify-center">
                <Share2 className="text-white" size={36} />
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mb-8 px-4">Help us reach more people by sharing this campaign with your network. Every share makes a difference!</p>

          {/* Social Share Buttons */}
          <div className="space-y-3">
            <Button onClick={shareToWhatsApp} className="w-full h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white gap-3 text-base group">
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Share on WhatsApp
            </Button>

            <Button onClick={shareToFacebook} className="w-full h-14 bg-[#1877F2] hover:bg-[#0C63D4] text-white gap-3 text-base group">
              <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Share on Facebook
            </Button>

            <Button onClick={shareToTwitter} className="w-full h-14 bg-[#1DA1F2] hover:bg-[#0C8BD9] text-white gap-3 text-base group">
              <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Share on Twitter
            </Button>

            {/* Copy Link */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <input type="text" value={campaignUrl} readOnly className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none" />
                <Button onClick={handleCopyLink} variant="outline" className="px-6 h-12 gap-2 border-[#1780b3] text-[#1780b3] hover:bg-[#1780b3] hover:text-white transition-all">
                  {copied ? (
                    <>
                      <Check size={18} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-3">Copy and share this link anywhere</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
