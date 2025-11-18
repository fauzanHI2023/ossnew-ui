"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, MapPin, Calendar, Shield, Save, Sparkles, Globe, CheckCircle2, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useUpdateProfile } from "../../../../../hooks/useUpdateProfile";
import { toast } from "sonner";

export function EditProfileTab() {
  const { data: session, update } = useSession();
  const user = session?.user;
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const [religion, setReligion] = useState("");
  const [bloodType, setBloodType] = useState("");

  useEffect(() => {
    if (user) {
      setReligion(user.religion ?? "");
      setBloodType(user.blood_type ?? "");
    }
  }, [user]);

  const { mutateAsync: saveProfile } = useUpdateProfile();

  const handleSubmit = async () => {
    if (!user?.phpDonorData?.[0]?.id) return;

    const payload = {
      full_name: (document.getElementById("fullname") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      phone_no: (document.getElementById("phone") as HTMLInputElement).value,
      birth_date: (document.getElementById("dob") as HTMLInputElement).value,
      religion: religion,
      blood_type: bloodType,
      country_id: (document.getElementById("nationality") as HTMLInputElement).value,
      address: (document.getElementById("address") as HTMLTextAreaElement).value,
    };

    // VALIDASI EMAIL
    if (!/^\S+@\S+\.\S+$/.test(payload.email)) {
      alert("Invalid email format");
      return;
    }

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

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column - Personal Info */}
        <Card className="border-0 bg-white shadow-2xl shadow-[#268ece]/10 overflow-hidden group hover:shadow-3xl hover:shadow-[#268ece]/20 transition-all duration-500">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#268ece] via-[#3da9f5] to-[#17a2b8]" />
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-[#268ece] to-[#3da9f5] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[#0a2540]">Personal Information</h3>
                <p className="text-[#7a99b3] text-sm">Your basic details</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative group/input">
                <Label htmlFor="fullname" className="text-[#0a2540] mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#268ece]" />
                  Full Name
                </Label>
                <Input
                  id="fullname"
                  placeholder="Enter your full name"
                  defaultValue={user?.full_name ?? ""}
                  className="h-14 border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/input:bg-white"
                />
              </div>

              <div className="relative group/input">
                <Label htmlFor="email" className="text-[#0a2540] mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#268ece]" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  defaultValue={user?.email ?? ""}
                  className="h-14 border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/input:bg-white"
                />
              </div>

              <div className="relative group/input">
                <Label htmlFor="phone" className="text-[#0a2540] mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#268ece]" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  placeholder="+62 812 3456 7890"
                  defaultValue={user?.phones?.[0]?.phone ?? ""}
                  className="h-14 border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/input:bg-white"
                />
              </div>

              <div className="relative group/input">
                <Label htmlFor="dob" className="text-[#0a2540] mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#268ece]" />
                  Date of Birth
                </Label>
                <Input
                  id="dob"
                  type="date"
                  defaultValue={user?.birth_date ?? ""}
                  className="h-14 border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/input:bg-white"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Column - Identity Info */}
        <Card className="border-0 bg-white shadow-2xl shadow-[#268ece]/10 overflow-hidden group hover:shadow-3xl hover:shadow-[#268ece]/20 transition-all duration-500">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#17a2b8] via-[#3da9f5] to-[#268ece]" />
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-[#17a2b8] to-[#268ece] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[#0a2540]">Identity Details</h3>
                <p className="text-[#7a99b3] text-sm">Personal identity info</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative group/input">
                <Label htmlFor="religion" className="text-[#0a2540] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#268ece]" />
                  Agama
                </Label>
                <select
                  id="religion"
                  className="h-14 w-full border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/input:bg-white px-4 text-[#0a2540] focus:outline-none"
                  value={religion}
                  onChange={(e) => setReligion(e.target.value)}
                >
                  <option value="">Pilih Agama</option>
                  <option value="islam">Islam</option>
                  <option value="kristen">Kristen</option>
                  <option value="katolik">Katolik</option>
                  <option value="hindu">Hindu</option>
                  <option value="buddha">Buddha</option>
                  <option value="konghucu">Konghucu</option>
                </select>
              </div>

              <div className="relative group/input">
                <Label htmlFor="bloodtype" className="text-[#0a2540] mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#268ece]" />
                  Golongan Darah
                </Label>
                <select
                  id="bloodtype"
                  className="h-14 w-full border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/input:bg-white px-4 text-[#0a2540] focus:outline-none"
                  value={bloodType}
                  onChange={(e) => setBloodType(e.target.value)}
                >
                  <option value="">Pilih Golongan Darah</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                </select>
              </div>

              <div className="relative group/input">
                <Label htmlFor="nationality" className="text-[#0a2540] mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#268ece]" />
                  Kewarganegaraan
                </Label>
                <Input
                  id="nationality"
                  defaultValue={user?.phpDonorData?.[0]?.country_id === 100 ? "Indonesia" : user?.phpDonorData?.[0]?.country_id}
                  className="h-14 border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover/input:bg-white"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Full Width - Address Section */}
      <Card className="border-0 bg-white shadow-2xl shadow-[#268ece]/10 overflow-hidden group hover:shadow-3xl hover:shadow-[#268ece]/20 transition-all duration-500">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#268ece] via-[#3da9f5] to-[#17a2b8]" />
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-gradient-to-br from-[#268ece] to-[#3da9f5] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-[#0a2540]">Address Information</h3>
              <p className="text-[#7a99b3] text-sm">Your residential address</p>
            </div>
          </div>

          <div className="relative group/input">
            <Label htmlFor="address" className="text-[#0a2540] mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#268ece]" />
              Alamat Lengkap
            </Label>
            <Textarea
              id="address"
              placeholder="Masukkan alamat lengkap Anda..."
              defaultValue="Jl. Contoh No. 123, RT 001/RW 002, Kelurahan Contoh, Kecamatan Contoh, Jakarta Selatan, DKI Jakarta 12345"
              className="min-h-[120px] border-2 border-[#268ece]/10 focus:border-[#268ece] rounded-xl transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm group-hover/input:bg-white"
            />
            <p className="text-xs text-[#7a99b3] mt-2">Include street name, house number, RT/RW, kelurahan, kecamatan, city, and postal code</p>
          </div>
        </CardContent>
      </Card>

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
          <span className="relative z-10 text-base text-white">{isLoading ? "Saving..." : isSaved ? "Saved Successfully!" : "Save Profile Changes"}</span>
        </Button>
      </div>
    </div>
  );
}
