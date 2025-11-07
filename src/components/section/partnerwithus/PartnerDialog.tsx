import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { Building2, Video, MapPin, Send, CheckCircle2 } from "lucide-react";

interface PartnerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PartnerDialog({ open, onOpenChange }: PartnerDialogProps) {
  const [meetingLocation, setMeetingLocation] = useState<string>("");
  const [showMap, setShowMap] = useState(false);
  const [mapType, setMapType] = useState<"hq" | "custom" | null>(null);

  const handleLocationChange = (value: string) => {
    setMeetingLocation(value);

    if (value === "hq") {
      setShowMap(true);
      setMapType("hq");
    } else if (value === "custom") {
      setShowMap(true);
      setMapType("custom");
    } else {
      setShowMap(false);
      setMapType(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        {/* Modern Header */}
        <div className="relative pb-6 border-b border-gray-100">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#268ece]/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-[#268ece] rounded-full animate-pulse"></div>
            <span className="text-[#268ece] text-sm">Partnership Opportunity</span>
          </div>
          <DialogTitle className="text-3xl text-gray-900">Let's Start a Conversation</DialogTitle>
          <DialogDescription className="text-lg text-gray-600 mt-2">Fill in your details and we'll get back to you within 24 hours</DialogDescription>
        </div>

        <div className="space-y-6 py-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company-name" className="text-gray-900">
                  Company Name *
                </Label>
                <Input id="company-name" placeholder="Enter your company name" className="border-gray-200 focus:border-[#268ece] h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-person" className="text-gray-900">
                  Contact Person *
                </Label>
                <Input id="contact-person" placeholder="Enter contact person name" className="border-gray-200 focus:border-[#268ece] h-12" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-900">
                  Email Address *
                </Label>
                <Input id="email" type="email" placeholder="yourname@company.com" className="border-gray-200 focus:border-[#268ece] h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-900">
                  Phone Number *
                </Label>
                <Input id="phone" type="tel" placeholder="+62 XXX XXXX XXXX" className="border-gray-200 focus:border-[#268ece] h-12" />
              </div>
            </div>
          </div>

          {/* Meeting Location Selection */}
          <div className="space-y-4">
            <Label className="text-gray-900">Preferred Meeting Location *</Label>
            <RadioGroup value={meetingLocation} onValueChange={handleLocationChange}>
              <div className="space-y-3">
                <div className={`relative flex items-start space-x-4 p-5 rounded-xl border-2 transition-all cursor-pointer ${meetingLocation === "hq" ? "border-[#268ece] bg-[#268ece]/5" : "border-gray-200 hover:border-[#268ece]/50"}`}>
                  <RadioGroupItem value="hq" id="hq" className="mt-1" />
                  <label htmlFor="hq" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-10 h-10 bg-[#268ece]/10 rounded-xl flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-[#268ece]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-900">Human Initiative Headquarters</div>
                        <div className="text-sm text-gray-500">Meet at our main office in Jakarta</div>
                      </div>
                    </div>
                  </label>
                  {meetingLocation === "hq" && <CheckCircle2 className="w-6 h-6 text-[#268ece] flex-shrink-0" />}
                </div>

                <div className={`relative flex items-start space-x-4 p-5 rounded-xl border-2 transition-all cursor-pointer ${meetingLocation === "online" ? "border-[#268ece] bg-[#268ece]/5" : "border-gray-200 hover:border-[#268ece]/50"}`}>
                  <RadioGroupItem value="online" id="online" className="mt-1" />
                  <label htmlFor="online" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-10 h-10 bg-[#268ece]/10 rounded-xl flex items-center justify-center">
                        <Video className="w-5 h-5 text-[#268ece]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-900">Online Meeting</div>
                        <div className="text-sm text-gray-500">Virtual meeting via Zoom or Google Meet</div>
                      </div>
                    </div>
                  </label>
                  {meetingLocation === "online" && <CheckCircle2 className="w-6 h-6 text-[#268ece] flex-shrink-0" />}
                </div>

                <div className={`relative flex items-start space-x-4 p-5 rounded-xl border-2 transition-all cursor-pointer ${meetingLocation === "custom" ? "border-[#268ece] bg-[#268ece]/5" : "border-gray-200 hover:border-[#268ece]/50"}`}>
                  <RadioGroupItem value="custom" id="custom" className="mt-1" />
                  <label htmlFor="custom" className="flex-1 cursor-pointer">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-10 h-10 bg-[#268ece]/10 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#268ece]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-900">Choose Your Own Location</div>
                        <div className="text-sm text-gray-500">Select a convenient location on the map</div>
                      </div>
                    </div>
                  </label>
                  {meetingLocation === "custom" && <CheckCircle2 className="w-6 h-6 text-[#268ece] flex-shrink-0" />}
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Map Display */}
          {showMap && mapType === "hq" && (
            <div className="space-y-3 p-5 bg-gray-50 rounded-2xl">
              <Label className="text-gray-900">Human Initiative Headquarters Location</Label>
              <div className="w-full h-64 bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1234567890!2d106.8456789!3d-6.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMDQuNCJTIDEwNsKwNTAnNDQuNCJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Human Initiative HQ Location"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#268ece]" />
                <span>Jl. Example Street No. 123, Jakarta Selatan, DKI Jakarta 12345</span>
              </p>
            </div>
          )}

          {showMap && mapType === "custom" && (
            <div className="space-y-3 p-5 bg-gray-50 rounded-2xl">
              <Label className="text-gray-900">Select Your Preferred Location</Label>
              <div className="w-full h-64 bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.1234567890!2d106.7!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDInMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Custom Location Selection"
                ></iframe>
              </div>
              <Input placeholder="Enter or search for location address" className="border-gray-200 focus:border-[#268ece] h-12" />
            </div>
          )}

          {/* Additional Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-900">
              Additional Message (Optional)
            </Label>
            <textarea id="message" rows={4} placeholder="Tell us about your CSR interests and goals..." className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#268ece] focus:outline-none resize-none" />
          </div>

          {/* Submit Button */}
          <Button className="w-full h-14 bg-gradient-to-r from-[#268ece] to-[#1d7ab8] hover:from-[#1d7ab8] hover:to-[#268ece] text-white shadow-lg shadow-[#268ece]/30 text-lg group">
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            <span>Submit Partnership Request</span>
          </Button>

          {/* Privacy Note */}
          <p className="text-sm text-gray-500 text-center">By submitting this form, you agree to our privacy policy and terms of service</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
