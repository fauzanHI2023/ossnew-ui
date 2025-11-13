import { UserCircle, Check } from "lucide-react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";

interface FormData {
  fullName: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
}

interface ContactSectionProps {
  onContactChange?: (isComplete: boolean) => void;
  onChange?: (data: FormData) => void;
}

export function ContactSection({ onContactChange, onChange }: ContactSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneCode: "+62",
    phoneNumber: "",
  });

  const isContactComplete = formData.fullName && formData.email && formData.phoneNumber;

  // Notify parent when completion status changes
  useEffect(() => {
    onContactChange?.(!!isContactComplete);
    onChange?.(formData);
  }, [formData, isContactComplete, onContactChange, onChange]);

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/50">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isContactComplete ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] hover:shadow-xl hover:shadow-[#268ece]/40 text-white" : "bg-[#268ece]/10 text-[#268ece]"}`}>
          {isContactComplete ? <Check className="w-5 h-5" /> : <UserCircle className="w-5 h-5" />}
        </div>
        <div>
          <h2 className="text-gray-900">Informasi Kontak</h2>
          <p className="text-sm text-gray-500">Untuk konfirmasi pesanan Anda</p>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <Label htmlFor="fullName" className="text-gray-700">
            Nama Lengkap
          </Label>
          <Input
            id="fullName"
            placeholder="Contoh: Ahmad Rizki"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="mt-2 h-12 rounded-xl border-gray-200 focus:border-[#268ece] focus:ring-[#268ece]/20"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-700">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="nama@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-2 h-12 rounded-xl border-gray-200 focus:border-[#268ece] focus:ring-[#268ece]/20"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-gray-700">
            Nomor Telepon
          </Label>
          <div className="flex gap-3 mt-2">
            <Select value={formData.phoneCode} onValueChange={(value) => setFormData({ ...formData, phoneCode: value })}>
              <SelectTrigger className="w-28 h-12 rounded-xl border-gray-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+62">🇮🇩 +62</SelectItem>
                <SelectItem value="+65">🇸🇬 +65</SelectItem>
                <SelectItem value="+60">🇲🇾 +60</SelectItem>
                <SelectItem value="+1">🇺🇸 +1</SelectItem>
              </SelectContent>
            </Select>
            <Input
              id="phone"
              type="tel"
              placeholder="812-3456-7890"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              className="flex-1 h-12 rounded-xl border-gray-200 focus:border-[#268ece] focus:ring-[#268ece]/20"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
