import { motion } from "motion/react";
import { Facebook, Twitter, Linkedin, Link2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ShareButtons() {
  const handleShare = (platform: string) => {
    toast.success(`Berbagi ke ${platform}!`);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link berhasil disalin!");
  };

  const socialButtons = [
    { icon: Facebook, label: "Facebook", color: "#1877F2" },
    { icon: Twitter, label: "Twitter", color: "#1DA1F2" },
    { icon: Linkedin, label: "LinkedIn", color: "#0A66C2" },
    { icon: Send, label: "Telegram", color: "#0088cc" },
    { icon: Link2, label: "Copy", color: "#268ece" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm text-gray-600">Bagikan artikel:</span>
        <div className="flex gap-2 flex-wrap">
          {socialButtons.map((social, index) => (
            <motion.div key={social.label} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}>
              <Button
                variant="outline"
                size="icon"
                className="bg-white text-gray-800 cursor-pointer h-11 w-11 rounded-full border-2 border-gray-200 hover:border-[#268ece] hover:bg-gradient-to-br hover:from-[#268ece] hover:to-[#1a6ba0] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                onClick={() => (social.label === "Copy" ? handleCopyLink() : handleShare(social.label))}
              >
                <social.icon className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
