"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Github, Globe, Sparkles } from "lucide-react";

export function SocialMediaTab() {
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
      id: "twitter",
      name: "Twitter",
      icon: Twitter,
      color: "from-[#1DA1F2] to-[#0c85d0]",
      bgColor: "bg-[#1DA1F2]/5",
      borderColor: "border-[#1DA1F2]/20",
      placeholder: "twitter.com/username",
      description: "Join the conversation",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: Linkedin,
      color: "from-[#0A66C2] to-[#004182]",
      bgColor: "bg-[#0A66C2]/5",
      borderColor: "border-[#0A66C2]/20",
      placeholder: "linkedin.com/in/username",
      description: "Build your professional network",
    },
    {
      id: "github",
      name: "GitHub",
      icon: Github,
      color: "from-[#333] to-[#000]",
      bgColor: "bg-[#333]/5",
      borderColor: "border-[#333]/20",
      placeholder: "github.com/username",
      description: "Showcase your projects",
    },
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
                  <Input id={social.id} placeholder={social.placeholder} className="h-14 border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/input:bg-white" />
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
        <Button className="bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white hover:shadow-2xl hover:shadow-[#268ece]/50 rounded-2xl px-10 py-7 gap-3 transition-all duration-300 hover:scale-105 group">
          <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-base">Save Social Links</span>
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
