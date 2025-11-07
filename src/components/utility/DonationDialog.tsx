import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Heart, Building2, Smartphone, CheckCircle2, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "../ui/badge";

interface DonationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const presetAmounts = [50000, 100000, 250000, 500000, 1000000, 2500000];

const campaigns = ["Education for Remote Area Children", "Emergency Disaster Relief", "Women's SME Empowerment", "Health Infrastructure", "Food Assistance Program"];

const paymentMethods = [
  {
    id: "bank",
    name: "Bank Transfer",
    icon: Building2,
    options: ["BSI (Bank Syariah Indonesia)", "BCA (Bank Central Asia)"],
  },
  {
    id: "va",
    name: "Virtual Account",
    icon: Building2,
    options: ["BCA Virtual Account", "Mandiri Virtual Account", "BNI Virtual Account", "BRI Virtual Account"],
  },
  {
    id: "ewallet",
    name: "E-Wallet",
    icon: Smartphone,
    options: ["QRIS", "GoPay", "ShopeePay"],
  },
];

export function DonationDialog({ open, onOpenChange }: DonationDialogProps) {
  const [amount, setAmount] = useState<number>(100000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedCampaign, setSelectedCampaign] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [expandedMethod, setExpandedMethod] = useState<string>("");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState<string>("");
  const [step, setStep] = useState<number>(1);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    const numValue = parseInt(value.replace(/\D/g, ""));
    if (!isNaN(numValue)) {
      setAmount(numValue);
      setCustomAmount(value);
    } else {
      setAmount(0);
      setCustomAmount("");
    }
  };

  const handlePaymentMethodClick = (methodId: string) => {
    setPaymentMethod(methodId);
    setExpandedMethod(expandedMethod === methodId ? "" : methodId);
    setSelectedPaymentOption("");
  };

  const handlePaymentOptionSelect = (option: string) => {
    setSelectedPaymentOption(option);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && amount > 0 && selectedCampaign && paymentMethod && selectedPaymentOption) {
      setStep(2);
    }
  };

  const handleReset = () => {
    setStep(1);
    setAmount(100000);
    setCustomAmount("");
    setSelectedCampaign("");
    setPaymentMethod("");
    setExpandedMethod("");
    setSelectedPaymentOption("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {step === 1 ? (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-[#268ece] rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <DialogTitle className="text-2xl">One Time Donation</DialogTitle>
                  <p className="text-sm text-gray-600">Every contribution you make creates real change</p>
                </div>
              </div>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              {/* Donation Amount */}
              <div>
                <Label className="text-base mb-3 block">Select Donation Amount</Label>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handleAmountSelect(preset)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${amount === preset && !customAmount ? "border-[#268ece] bg-[#268ece]/5 text-[#268ece] font-semibold" : "border-gray-200 hover:border-[#268ece]/50"}`}
                    >
                      {formatCurrency(preset)}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">Rp</span>
                  <Input type="text" placeholder="Enter other amount" value={customAmount} onChange={(e) => handleCustomAmountChange(e.target.value)} className="pl-12 h-12 text-lg" />
                </div>

                {amount > 0 && (
                  <div className="mt-3 p-4 bg-[#268ece]/5 rounded-lg border border-[#268ece]/20">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Donation:</span>
                      <span className="text-xl font-bold text-[#268ece]">{formatCurrency(amount)}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Campaign Selection */}
              <div>
                <Label className="text-base mb-3 block">Select Program</Label>
                <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a program to support" />
                  </SelectTrigger>
                  <SelectContent>
                    {campaigns.map((campaign) => (
                      <SelectItem key={campaign} value={campaign}>
                        {campaign}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Donor Information */}
              <div className="space-y-4">
                <Label className="text-base block">Donor Information</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm mb-2 block">
                      Full Name *
                    </Label>
                    <Input id="name" placeholder="Enter your full name" className="h-11" required />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm mb-2 block">
                      Email *
                    </Label>
                    <Input id="email" type="email" placeholder="email@example.com" className="h-11" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm mb-2 block">
                    Phone Number *
                  </Label>
                  <Input id="phone" placeholder="08xxxxxxxxxx" className="h-11" required />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <Label className="text-base mb-3 block">Payment Method</Label>
                <div className="space-y-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    const isExpanded = expandedMethod === method.id;
                    const isSelected = paymentMethod === method.id;

                    return (
                      <div key={method.id}>
                        {/* Payment Method Button */}
                        <button
                          type="button"
                          onClick={() => handlePaymentMethodClick(method.id)}
                          className={`w-full p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between ${isSelected ? "border-[#268ece] bg-[#268ece]/5" : "border-gray-200 hover:border-[#268ece]/50"}`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className={`w-5 h-5 ${isSelected ? "text-[#268ece]" : "text-gray-600"}`} />
                            <span className={`${isSelected ? "text-[#268ece] font-semibold" : "text-gray-600"}`}>{method.name}</span>
                          </div>
                          {isExpanded ? <ChevronUp className={`w-5 h-5 ${isSelected ? "text-[#268ece]" : "text-gray-400"}`} /> : <ChevronDown className={`w-5 h-5 ${isSelected ? "text-[#268ece]" : "text-gray-400"}`} />}
                        </button>

                        {/* Expanded Options */}
                        {isExpanded && (
                          <div className="mt-2 ml-4 space-y-2 animate-in slide-in-from-top-2">
                            {method.options.map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handlePaymentOptionSelect(option)}
                                className={`w-full p-3 rounded-lg border transition-all duration-300 text-left ${
                                  selectedPaymentOption === option ? "border-[#268ece] bg-[#268ece]/5 text-[#268ece] font-medium" : "border-gray-200 hover:border-[#268ece]/30 text-gray-600"
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t">
                <Button type="submit" disabled={!amount || !selectedCampaign || !paymentMethod || !selectedPaymentOption} className="w-full h-12 bg-[#268ece] hover:bg-[#1d7ab8] text-white text-base disabled:opacity-50">
                  Continue to Payment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-xs text-gray-500 text-center mt-3">By continuing, you agree to our terms and conditions</p>
              </div>
            </form>
          </>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <DialogTitle className="text-2xl text-center">Thank You!</DialogTitle>
            </DialogHeader>

            <div className="space-y-6 mt-4">
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Donation Amount:</span>
                  <span className="text-xl font-bold text-[#268ece]">{formatCurrency(amount)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Program:</span>
                  <Badge className="bg-[#268ece] text-white">{selectedCampaign}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-semibold text-sm text-right">{selectedPaymentOption}</span>
                </div>
              </div>

              <div className="text-center space-y-3">
                <p className="text-gray-600">Payment instructions have been sent to your email. Please complete payment within 24 hours.</p>
                <p className="text-sm text-gray-500">
                  Transaction ID: <span className="font-mono font-semibold">DN{Date.now()}</span>
                </p>
              </div>

              <div className="flex gap-3">
                <Button onClick={() => onOpenChange(false)} variant="outline" className="flex-1 h-12 border-2 border-[#268ece] text-[#268ece]">
                  Close
                </Button>
                <Button onClick={handleReset} className="flex-1 h-12 bg-[#268ece] hover:bg-[#1d7ab8] text-white">
                  Donate Again
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
