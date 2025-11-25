"use client";

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState, useEffect } from "react";
import { Building2, Video, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import { usePartnerMutation } from "../../../../hooks/usePartnerMutation";
import { toast } from "sonner";
import MapWithSearch, { PlaceResult } from "@/components/utility/MapsWithSearchBar";
import { CalendarPicker } from "@/components/utility/Calendar";

interface PartnerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectId?: number | null;
}

export function PartnerDialog({ open, onOpenChange, projectId }: PartnerDialogProps) {
  const { mutate, isPending } = usePartnerMutation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    meetingDate: undefined as Date | undefined,
    startTime: "",
    endTime: "",
    location: "",
    notes: "",
    customLocation: "",
    proposal_id: projectId ? String(projectId) : "",
  });

  useEffect(() => {
    console.log("🟦 projectId from props:", projectId);
    setForm((prev) => ({ ...prev, proposal_id: projectId ? String(projectId) : "" }));
  }, [projectId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleLocationChange = (value: string) => {
    setForm({ ...form, location: value });
  };

  const handleCustomLocationSelect = (place: PlaceResult) => {
    setForm((prev) => ({ ...prev, customLocation: place.address || "" }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.meetingDate || !form.startTime || !form.endTime || !form.location) {
      toast.error("Please fill all required fields");
      return;
    }

    const meetingPlace = form.location === "custom" ? form.customLocation : form.location === "hq" ? "Human Initiative HQ" : "Online Meeting";

    // gabungkan tanggal & jam
    const dateStr = form.meetingDate.toISOString().split("T")[0];
    const startISO = new Date(`${dateStr}T${form.startTime}:00`).toISOString();
    const endISO = new Date(`${dateStr}T${form.endTime}:00`).toISOString();

    mutate({
      user_id: null,
      proposal_id: form.proposal_id,
      tempat: meetingPlace,
      date: startISO,
      notes: `${form.notes || ""}\nMeeting End: ${endISO}`,
      created_at: new Date().toISOString(),
      name: form.name,
      email: form.email,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-white">
        {/* Header */}
        <div className="relative pb-6 border-b border-gray-100">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#268ece]/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-[#268ece] rounded-full animate-pulse"></div>
            <span className="text-[#268ece] text-sm">Partnership Opportunity</span>
          </div>
          <DialogTitle className="text-3xl text-gray-900">Let's Start a Conversation</DialogTitle>
          <DialogDescription className="text-lg text-gray-600 mt-2">Fill in your details and we'll schedule a meeting</DialogDescription>
        </div>

        <div className="space-y-6 py-6">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-900">
                Name *
              </Label>
              <input
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#268ece] focus:outline-none placeholder:text-gray-300 text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-900">
                Email *
              </Label>
              <input
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="yourname@company.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#268ece] focus:outline-none placeholder:text-gray-300 text-gray-400"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="space-y-4">
            <Label className="text-gray-900 mb-2 block">Meeting Date *</Label>
            <CalendarPicker selectedDate={form.meetingDate} onSelectDate={(date) => setForm({ ...form, meetingDate: date })} />

            {/* Time Pickers muncul setelah pilih tanggal */}
            {form.meetingDate && (
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <Label className="text-gray-900 mb-1 block">Start Time *</Label>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 h-12">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <input type="time" id="startTime" value={form.startTime} onChange={handleChange} className="flex-1 px-4 py-3 rounded-xl focus:border-[#268ece] focus:outline-none placeholder:text-gray-300 text-gray-400" />
                  </div>
                </div>

                <div>
                  <Label className="text-gray-900 mb-1 block">End Time *</Label>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 h-12">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <input type="time" id="endTime" value={form.endTime} onChange={handleChange} className="flex-1 px-4 py-3 rounded-xl focus:border-[#268ece] focus:outline-none placeholder:text-gray-300 text-gray-400" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Meeting Location */}
          <div className="space-y-4">
            <Label className="text-gray-900">Preferred Meeting Location *</Label>
            <RadioGroup value={form.location} onValueChange={handleLocationChange}>
              <div className="space-y-3">
                {/* HQ */}
                <div className={`relative flex items-start space-x-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${form.location === "hq" ? "border-[#268ece] bg-[#268ece]/5" : "border-gray-200 hover:border-[#268ece]/50"}`}>
                  <RadioGroupItem value="hq" id="hq" className="mt-1" />
                  <label htmlFor="hq" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#268ece]/10 rounded-xl flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-[#268ece]" />
                      </div>
                      <div>
                        <div className="text-gray-900">Human Initiative HQ</div>
                        <div className="text-sm text-gray-500">Jakarta main office</div>
                      </div>
                    </div>
                  </label>
                  {form.location === "hq" && <CheckCircle2 className="w-6 h-6 text-[#268ece]" />}
                </div>

                {/* Online */}
                <div className={`relative flex items-start space-x-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${form.location === "online" ? "border-[#268ece] bg-[#268ece]/5" : "border-gray-200 hover:border-[#268ece]/50"}`}>
                  <RadioGroupItem value="online" id="online" className="mt-1" />
                  <label htmlFor="online" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#268ece]/10 rounded-xl flex items-center justify-center">
                        <Video className="w-5 h-5 text-[#268ece]" />
                      </div>
                      <div>
                        <div className="text-gray-900">Online Meeting</div>
                        <div className="text-sm text-gray-500">via Zoom / Google Meet</div>
                      </div>
                    </div>
                  </label>
                  {form.location === "online" && <CheckCircle2 className="w-6 h-6 text-[#268ece]" />}
                </div>

                {/* Custom */}
                <div className={`relative flex items-start space-x-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${form.location === "custom" ? "border-[#268ece] bg-[#268ece]/5" : "border-gray-200 hover:border-[#268ece]/50"}`}>
                  <RadioGroupItem value="custom" id="custom" className="mt-1" />
                  <label htmlFor="custom" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#268ece]/10 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#268ece]" />
                      </div>
                      <div>
                        <div className="text-gray-900">Custom Location</div>
                        <div className="text-sm text-gray-500">Select on map</div>
                      </div>
                    </div>
                  </label>
                  {form.location === "custom" && <CheckCircle2 className="w-6 h-6 text-[#268ece]" />}
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Map for Custom */}
          {form.location === "custom" && (
            <div className="space-y-3 p-5 bg-gray-50 rounded-2xl">
              <Label className="text-gray-900">Select Your Preferred Location</Label>
              <MapWithSearch onSelect={handleCustomLocationSelect} />
              {form.customLocation && (
                <p className="text-sm text-gray-600 mt-2">
                  Selected: <span className="font-semibold">{form.customLocation}</span>
                </p>
              )}
            </div>
          )}

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-gray-900">
              Additional Message (Optional)
            </Label>
            <textarea
              id="notes"
              rows={4}
              value={form.notes}
              onChange={handleChange}
              placeholder="Tell us about your CSR interests..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#268ece] focus:outline-none resize-none text-gray-400"
            />
          </div>

          {/* Submit */}
          <Button onClick={handleSubmit} disabled={isPending} className="w-full h-14 bg-gradient-to-r from-[#268ece] to-[#1d7ab8] hover:from-[#1d7ab8] hover:to-[#268ece] text-white shadow-lg text-lg group">
            {isPending ? (
              "Submitting..."
            ) : (
              <>
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Submit Partnership Request
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
