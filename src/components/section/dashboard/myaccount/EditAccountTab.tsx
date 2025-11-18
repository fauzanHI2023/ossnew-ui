"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Lock, Key, Shield, Info, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export function EditAccountTab() {
  const { data: session } = useSession();
  const user = session?.user;
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Username Section */}
        <Card className="border-0 bg-white shadow-2xl shadow-[#268ece]/10 overflow-hidden group hover:shadow-3xl hover:shadow-[#268ece]/20 transition-all duration-500">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#268ece] to-[#3da9f5]" />
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-[#268ece] to-[#3da9f5] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[#0a2540]">Account Identity</h3>
                <p className="text-[#7a99b3] text-sm">Your username</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative group/input">
                <Label htmlFor="username" className="text-[#0a2540] mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#268ece]" />
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="johndoe"
                  defaultValue={user?.user_name ?? ""}
                  className="h-14 border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/input:bg-white"
                />
              </div>

              <div className="bg-gradient-to-br from-[#e8f4fb] to-[#f0f8ff] rounded-2xl p-5 border-2 border-[#268ece]/20">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#268ece] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-[#0a2540] mb-1 text-sm">Username Tips</h4>
                    <p className="text-sm text-[#7a99b3]">Choose a unique username that represents you. It will be visible to others.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Password Section */}
        <Card className="border-0 bg-white shadow-2xl shadow-[#268ece]/10 overflow-hidden group hover:shadow-3xl hover:shadow-[#268ece]/20 transition-all duration-500">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#3da9f5] to-[#17a2b8]" />
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-[#3da9f5] to-[#17a2b8] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[#0a2540]">Current Password</h3>
                <p className="text-[#7a99b3] text-sm">Verify your identity</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative group/input">
                <Label htmlFor="current-password" className="text-[#0a2540] mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#268ece]" />
                  Current Password
                </Label>
                <div className="relative">
                  <Input
                    id="current-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter current password"
                    className="h-14 border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/input:bg-white pr-12"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7a99b3] hover:text-[#268ece] transition-colors">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Change Password Section */}
      <Card className="border-0 bg-white shadow-2xl shadow-[#268ece]/10 overflow-hidden group hover:shadow-3xl hover:shadow-[#268ece]/20 transition-all duration-500">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#268ece] via-[#3da9f5] to-[#17a2b8]" />
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-gradient-to-br from-[#268ece] to-[#3da9f5] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Key className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-[#0a2540]">Change Password</h3>
              <p className="text-[#7a99b3] text-sm">Update your security credentials</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="relative group/input">
              <Label htmlFor="new-password" className="text-[#0a2540] mb-2 flex items-center gap-2">
                <Key className="w-4 h-4 text-[#268ece]" />
                New Password
              </Label>
              <div className="relative">
                <Input
                  id="new-password"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  className="h-14 border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/input:bg-white pr-12"
                />
                <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7a99b3] hover:text-[#268ece] transition-colors">
                  {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="relative group/input">
              <Label htmlFor="confirm-password" className="text-[#0a2540] mb-2 flex items-center gap-2">
                <Key className="w-4 h-4 text-[#268ece]" />
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  className="h-14 border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/input:bg-white pr-12"
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7a99b3] hover:text-[#268ece] transition-colors">
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Password Requirements */}
          <div className="bg-gradient-to-br from-[#e8f4fb] to-[#f0f8ff] rounded-2xl p-6 border-2 border-[#268ece]/20">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#268ece] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-[#0a2540] mb-2">Password Requirements</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#268ece]" />
                    <span className="text-sm text-[#7a99b3]">Minimum 8 characters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#268ece]" />
                    <span className="text-sm text-[#7a99b3]">One uppercase letter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#268ece]" />
                    <span className="text-sm text-[#7a99b3]">One number</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#268ece]" />
                    <span className="text-sm text-[#7a99b3]">One special character</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white hover:shadow-2xl hover:shadow-[#268ece]/50 rounded-2xl px-10 py-7 gap-3 transition-all duration-300 hover:scale-105 group">
          <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-base">Update Security</span>
        </Button>
      </div>
    </div>
  );
}
