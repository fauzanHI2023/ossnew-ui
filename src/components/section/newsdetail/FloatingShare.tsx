import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Share2, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function FloatingShare() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = (platform: string) => {
    toast.success(`Berbagi ke ${platform}!`);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link berhasil disalin!");
  };

  if (!isVisible) return null;

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-3">
        {/* Main Share Button - Always Prominent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="h-14 w-14 rounded-full bg-gradient-to-br from-[#268ece] to-[#1a6ba0] text-white shadow-xl flex items-center justify-center hover:shadow-2xl hover:scale-110 transition-all cursor-pointer"
        >
          <Share2 className="h-5 w-5" />
        </motion.div>

        {/* Divider */}
        <div className="w-0.5 h-3 bg-gray-200 mx-auto" />

        {/* Share Buttons - Subtle until hover */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Button
            size="icon"
            className="h-12 w-12 rounded-full bg-white/40 backdrop-blur-sm shadow-md border border-gray-200/50 text-gray-400 hover:bg-[#268ece] hover:border-[#268ece] hover:text-white hover:shadow-lg transition-all hover:scale-110"
            onClick={() => handleShare("Facebook")}
          >
            <Facebook className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Button
            size="icon"
            className="h-12 w-12 rounded-full bg-white/40 backdrop-blur-sm shadow-md border border-gray-200/50 text-gray-400 hover:bg-[#268ece] hover:border-[#268ece] hover:text-white hover:shadow-lg transition-all hover:scale-110"
            onClick={() => handleShare("Twitter")}
          >
            <Twitter className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Button
            size="icon"
            className="h-12 w-12 rounded-full bg-white/40 backdrop-blur-sm shadow-md border border-gray-200/50 text-gray-400 hover:bg-[#268ece] hover:border-[#268ece] hover:text-white hover:shadow-lg transition-all hover:scale-110"
            onClick={() => handleShare("LinkedIn")}
          >
            <Linkedin className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Button
            size="icon"
            className="h-12 w-12 rounded-full bg-white/40 backdrop-blur-sm shadow-md border border-gray-200/50 text-gray-400 hover:bg-[#268ece] hover:border-[#268ece] hover:text-white hover:shadow-lg transition-all hover:scale-110"
            onClick={handleCopyLink}
          >
            <Link2 className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
