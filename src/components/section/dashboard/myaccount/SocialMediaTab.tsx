"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Github, Globe, Sparkles, CheckCircle2, Youtube, Globe2, Loader2, Save } from "lucide-react";
import { useSession } from "next-auth/react";
import { useUpdateProfile } from "../../../../../hooks/useUpdateProfile";
import { toast } from "sonner";

export function SocialMediaTab() {
  const { data: session, update } = useSession();
  const user = session?.user;
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const { mutateAsync: saveProfile } = useUpdateProfile();
  const handleSubmit = async () => {
    if (!user?.phpDonorData?.[0]?.id) return;

    const payload = {
      facebook: (document.getElementById("facebook") as HTMLInputElement).value,
      instagram: (document.getElementById("instagram") as HTMLInputElement).value,
      website: (document.getElementById("website") as HTMLInputElement).value,
      youtube: (document.getElementById("youtube") as HTMLInputElement).value,
    };

    setIsLoading(true);
    setIsSaved(false);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSaved(true);

    try {
      // POST ke backend
      await saveProfile({
        id: user.phpDonorData[0].id,
        payload,
      });

      // Update session agar UI ikut berubah
      await update({
        ...payload,
      });

      // Show success toast notification
      toast.success("Profile Updated Successfully!", {
        description: "Your personal information has been saved.",
        duration: 3000,
        className: "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0",
        style: {
          background: "linear-gradient(to right, #10b981, #059669)",
          color: "white",
          border: "none",
          boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.3), 0 10px 10px -5px rgba(16, 185, 129, 0.2)",
        },
        icon: <CheckCircle2 className="w-5 h-5" />,
      });
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };
  const socialMedia = [
    {
      id: "facebook",
      name: "Facebook",
      icon: Facebook,
      color: "from-[#1877F2] to-[#0d5dce]",
      bgColor: "bg-[#1877F2]/5",
      borderColor: "border-[#1877F2]/20",
      placeholder: "facebook.com/username",
      description: "Connect with friends and the world",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      color: "from-[#E4405F] via-[#F77737] to-[#FCAF45]",
      bgColor: "bg-gradient-to-br from-[#E4405F]/5 to-[#FCAF45]/5",
      borderColor: "border-[#E4405F]/20",
      placeholder: "instagram.com/username",
      description: "Share your moments",
    },
    {
      id: "youtube",
      name: "Youtube",
      icon: Youtube,
      color: "from-[#1DA1F2] to-[#0c85d0]",
      bgColor: "bg-[#1DA1F2]/5",
      borderColor: "border-[#1DA1F2]/20",
      placeholder: "twitter.com/username",
      description: "Join the conversation",
    },
    {
      id: "website",
      name: "Website",
      icon: Globe2,
      color: "from-[#0A66C2] to-[#004182]",
      bgColor: "bg-[#0A66C2]/5",
      borderColor: "border-[#0A66C2]/20",
      placeholder: "linkedin.com/in/username",
      description: "Build your professional network",
    },
    // {
    //   id: "github",
    //   name: "GitHub",
    //   icon: Github,
    //   color: "from-[#333] to-[#000]",
    //   bgColor: "bg-[#333]/5",
    //   borderColor: "border-[#333]/20",
    //   placeholder: "github.com/username",
    //   description: "Showcase your projects",
    // },
  ];

  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#268ece]/10 via-[#3da9f5]/10 to-[#17a2b8]/10 border-2 border-[#268ece]/20 p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-[#268ece] to-[#3da9f5] rounded-xl shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-[#0a2540] mb-2">Connect Your Social Media</h3>
            <p className="text-[#7a99b3]">Link your social accounts to share your activities and connect with others in the community.</p>
          </div>
        </div>
      </div>

      {/* Social Media Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {socialMedia.map((social, index) => {
          const Icon = social.icon;
          return (
            <Card
              key={social.id}
              className="border-0 bg-white shadow-2xl shadow-[#268ece]/10 overflow-hidden group hover:shadow-3xl hover:shadow-[#268ece]/20 transition-all duration-500 hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${social.color}`} />
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-br ${social.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#0a2540]">{social.name}</h4>
                    <p className="text-[#7a99b3] text-sm">{social.description}</p>
                  </div>
                </div>

                <div className="relative group/input">
                  <Input
                    id={social.id}
                    defaultValue={user?.contactInformation?.[0]?.[social.id] ?? "-"}
                    placeholder={social.placeholder}
                    className="h-14 border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/input:bg-white"
                  />
                  <div className={`absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/input:opacity-100 transition-opacity`}>
                    <Icon className="w-5 h-5 text-[#7a99b3]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleSubmit}
          disabled={isLoading || isSaved}
          className={`relative overflow-hidden rounded-2xl px-10 py-7 gap-3 transition-all duration-500 group ${
            isSaved ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-2xl shadow-green-500/50 scale-105" : "bg-gradient-to-r from-[#268ece] to-[#3da9f5] hover:shadow-2xl hover:shadow-[#268ece]/50 hover:scale-105"
          }`}
        >
          {/* Animated Background Waves */}
          {isLoading && (
            <>
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
                style={{
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s infinite",
                }}
              />
              <style>{`
                @keyframes shimmer {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(100%); }
                }
              `}</style>
            </>
          )}

          {/* Success Confetti Effect */}
          {isSaved && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-confetti"
                    style={{
                      animation: `confetti 0.6s ease-out forwards`,
                      animationDelay: `${i * 0.05}s`,
                      transform: `rotate(${i * 30}deg) translateY(-50px)`,
                      opacity: 0,
                    }}
                  />
                ))}
              </div>
              <style>{`
                @keyframes confetti {
                  0% { 
                    opacity: 1; 
                    transform: translateY(0) scale(1);
                  }
                  100% { 
                    opacity: 0; 
                    transform: translateY(-100px) scale(0.5);
                  }
                }
              `}</style>
            </div>
          )}

          {/* Icon with animations */}
          <div className="relative z-10">
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin text-white" />
            ) : isSaved ? (
              <CheckCircle2 className="w-5 h-5 text-white animate-bounce" />
            ) : (
              <Save className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
            )}
          </div>

          {/* Text with animations */}
          <span className="relative z-10 text-base text-white">{isLoading ? "Saving..." : isSaved ? "Saved Successfully!" : "Save Social"}</span>
        </Button>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
