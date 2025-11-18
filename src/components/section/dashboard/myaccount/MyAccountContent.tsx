import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Camera, CheckCircle2, Shield, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EditProfileTab } from "./EditProfileTab";
import { EditAccountTab } from "./EditAccountTab";
import { SocialMediaTab } from "./SocialMediaTab";

export function MyAccountContent() {
  return (
    <div className="space-y-6">
      {/* Modern Header Section */}
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#268ece] via-[#3da9f5] to-[#17a2b8]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }} />

        <div className="relative z-10 p-6 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h1 className="text-white drop-shadow-lg">My Account</h1>
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30">
                  <CheckCircle2 className="w-3 h-3 mr-1.5" />
                  <span className="text-xs">Verified</span>
                </Badge>
              </div>
              <p className="text-white/90 mb-6">Manage your personal information and preferences</p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-xl">
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Profile</p>
                  <p className="text-white text-lg md:text-xl">95%</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Security</p>
                  <p className="text-white text-lg md:text-xl">Strong</p>
                </div>
                <div className="bg-white/15 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Socials</p>
                  <p className="text-white text-lg md:text-xl">3/5</p>
                </div>
              </div>
            </div>

            {/* Upload Photo Section */}
            <div className="relative group cursor-pointer">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl border-2 border-white/40 flex flex-col items-center justify-center hover:from-white/40 hover:to-white/20 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                <div className="relative">
                  <Camera className="w-10 h-10 md:w-12 md:h-12 text-white mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#268ece] rounded-full border-2 border-white animate-pulse" />
                </div>
                <p className="text-white text-sm">Upload Photo</p>
                <p className="text-white/70 text-xs mt-1">Max 5MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Tabs Section */}
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="w-full bg-white/90 backdrop-blur-xl border-2 border-[#268ece]/10 p-2 rounded-2xl shadow-xl mb-8 grid grid-cols-3 gap-2 h-auto">
          <TabsTrigger
            value="profile"
            className="text-gray-400 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#268ece] data-[state=active]:to-[#3da9f5] data-[state=active]:dark:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#268ece]/30 transition-all duration-300 flex flex-col sm:flex-row items-center gap-2 py-4 px-3"
          >
            <User className="w-5 h-5" />
            <div className="text-center sm:text-left">
              <span className="block text-xs sm:text-sm">Edit Profil</span>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="account"
            className="text-gray-400 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#268ece] data-[state=active]:to-[#3da9f5] data-[state=active]:dark:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#268ece]/30 transition-all duration-300 flex flex-col sm:flex-row items-center gap-2 py-4 px-3"
          >
            <Shield className="w-5 h-5" />
            <div className="text-center sm:text-left">
              <span className="block text-xs sm:text-sm">Edit Akun</span>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="social"
            className="text-gray-400 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#268ece] data-[state=active]:to-[#3da9f5] data-[state=active]:dark:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-[#268ece]/30 transition-all duration-300 flex flex-col sm:flex-row items-center gap-2 py-4 px-3"
          >
            <Globe className="w-5 h-5" />
            <div className="text-center sm:text-left">
              <span className="block text-xs sm:text-sm">Media Sosial</span>
            </div>
          </TabsTrigger>
        </TabsList>

        {/* Edit Profil Tab */}
        <TabsContent value="profile" className="mt-0">
          <EditProfileTab />
        </TabsContent>

        {/* Edit Akun Tab */}
        <TabsContent value="account" className="mt-0">
          <EditAccountTab />
        </TabsContent>

        {/* Edit Media Sosial Tab */}
        <TabsContent value="social" className="mt-0">
          <SocialMediaTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
