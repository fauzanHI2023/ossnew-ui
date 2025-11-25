"use client";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Building2, Smartphone, CheckCircle2, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { inputCart } from "../../../../services/donation/transaction/auth-cart";
import { useCart } from "../../../../context/CartContext";
import { useSession } from "next-auth/react";
import { fetchPaymentChannel } from "../../../../services/donation/transaction/auth-payment-channel";
import { fetchDeleteCart } from "../../../../services/donation/transaction/auth-delete-cart";
import { fetchCampaign } from "../../../../services/donation/campaign/auth-campaign";
import { createTransactionFlip } from "../../../../services/donation/transaction/auth-create-transaction";
import { createTransactionBankTransfer } from "../../../../services/donation/transaction/auth-create-transaction";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useQuery } from "@tanstack/react-query";
import { PaymentChannel } from "../../../../utils/types/paymentchannel";
import { User } from "../../../../utils/types/user";

interface DonationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const presetAmounts = [50000, 100000, 250000, 500000, 1000000, 2500000];

const campaigns = ["Education for Remote Area Children", "Emergency Disaster Relief", "Women's SME Empowerment", "Health Infrastructure", "Food Assistance Program"];

export function DonationDialog({ open, onOpenChange }: DonationDialogProps) {
  const { data: session, status } = useSession();
  const [userId, setUserId] = useState<number | null>(null);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [anonim, setAnonim] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(100000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedCampaign, setSelectedCampaign] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [expandedMethod, setExpandedMethod] = useState<string>("");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState<string>("");
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    if (status === "authenticated" && session) {
      const user = session.user;
      setUserId(user.phpDonorData?.[0]?.id ? Number(user.phpDonorData[0].id) : null);
      setFullName(user.full_name);
      setEmail(user.email);
      setPhone(user.phones?.[0]?.phone_no ?? "");
    }
  }, [status]);

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

  useEffect(() => {
    if (customAmount) {
      const numValue = parseInt(customAmount.replace(/\D/g, ""));
      if (!isNaN(numValue)) setAmount(numValue);
    }
  }, [customAmount]);

  const handleAnonimChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnonim(e.target.checked);
  };

  const { data, isLoading, error } = useQuery<PaymentChannel[]>({
    queryKey: ["paymentChannels"],
    queryFn: async () => {
      const res = await fetchPaymentChannel();
      return res.data; // ambil array-nya saja
    },
  });

  const handlePaymentMethodClick = (methodId: string) => {
    setPaymentMethod(methodId);
    setExpandedMethod(expandedMethod === methodId ? "" : methodId);
    setSelectedPaymentOption("");
  };

  const handlePaymentOptionSelect = (option: string) => {
    setSelectedPaymentOption(option);
  };

  // ✅ Filter manual transfer dulu berdasar donation_payment_id
  const bankTransfer = data?.filter((item: PaymentChannel) => item.donation_payment_id === 1) ?? [];

  // ✅ Virtual Account selain yang manual
  const virtualAccount = data?.filter((item: PaymentChannel) => item.sender_type === "virtual_account" && item.donation_payment_id !== 1) ?? [];

  // ✅ E-Wallet
  const eWallet = data?.filter((item: PaymentChannel) => item.sender_type === "wallet_account") ?? [];

  const paymentMethods = [
    {
      id: "bank",
      name: "Bank Transfer",
      icon: Building2,
      options: bankTransfer.map((b) => `${b.payment_channel_name} (Manual)`),
    },
    {
      id: "va",
      name: "Virtual Account",
      icon: Building2,
      options: virtualAccount.map((v) => `${v.payment_channel_name} (VA)`),
    },
    {
      id: "ewallet",
      name: "E-Wallet",
      icon: Smartphone,
      options: eWallet.map((e) => e.payment_channel_name),
    },
  ];

  if (isLoading) return <p>Loading payment channels...</p>;
  if (error) return <p className="text-red-500">Failed to load payment channels.</p>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPaymentOption || !amount) return;

    const cleanName = selectedPaymentOption.replace(/\s*\(.*?\)\s*/g, "");

    // Tentukan kategori yang dipilih dari paymentMethod
    let selectedChannel;
    if (paymentMethod === "bank") {
      selectedChannel = data?.find((ch) => ch.payment_channel_name === cleanName && ch.donation_payment_id === 1);
    } else if (paymentMethod === "va") {
      selectedChannel = data?.find((ch) => ch.payment_channel_name === cleanName && ch.sender_type === "virtual_account");
    } else if (paymentMethod === "ewallet") {
      selectedChannel = data?.find((ch) => ch.payment_channel_name === cleanName && ch.sender_type === "wallet_account");
    }

    if (!selectedChannel) {
      alert("Payment channel not found.");
      return;
    }

    const payload = {
      user_id: userId,
      full_name: fullName,
      email,
      phone,
      payment_channel_id: String(selectedChannel.id),
      is_anonim: anonim,
      items: [
        {
          campaign_id: 18,
          quantity: 1,
          price: amount,
        },
      ],
    };

    try {
      let response: any;
      // console.log("🧩 Selected Channel:", selectedChannel);
      // console.log("sender_type:", selectedChannel.sender_type);
      // console.log("donation_payment_id:", selectedChannel.donation_payment_id);

      // Cek manual transfer dulu
      if (selectedChannel.donation_payment_id === 1) {
        response = await createTransactionBankTransfer(payload);
        // console.log("✅ Bank Transfer transaction created", response);
        setStep(2);
      }
      // Baru cek Flip
      else if (selectedChannel.sender_type === "virtual_account" || selectedChannel.sender_type === "wallet_account") {
        response = await createTransactionFlip(payload);
        // console.log("✅ Transaction Flip created", response);
        setStep(2);
        if (response?.flip_response?.payment_url) {
          setTimeout(() => {
            window.location.href = response.flip_response.payment_url;
          }, 2000);
        } else {
          console.warn("⚠️ Payment URL not found in response:", response);
        }
      }

      // 🔹 Case 3: Fallback (jika tidak terdeteksi)
      else {
        console.warn("⚠️ Unknown payment type:", selectedChannel);
      }
    } catch (err) {
      console.error("❌ Transaction error:", err);
      alert("Failed to create transaction. Please try again.");
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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        {step === 1 ? (
          <>
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-[#268ece] rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <DialogTitle className="text-2xl text-gray-700">One Time Donation</DialogTitle>
                  <p className="text-sm text-gray-600">Every contribution you make creates real change</p>
                </div>
              </div>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              {/* Donation Amount */}
              <div>
                <Label className="text-base mb-3 block text-gray-700">Select Donation Amount</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-3">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handleAmountSelect(preset)}
                      className={`p-4 rounded-xl text-gray-400 border-2 transition-all duration-300 ${
                        amount === preset && !customAmount ? "border-[#268ece] bg-[#268ece]/5 text-[#268ece] font-semibold" : "border-gray-200 hover:border-[#268ece]/50"
                      }`}
                    >
                      {formatCurrency(preset)}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">Rp</span>
                  <Input type="text" placeholder="Enter other amount" value={customAmount} onChange={(e) => handleCustomAmountChange(e.target.value)} className="pl-12 h-12 text-lg text-gray-300 placeholder:text-gray-400" />
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

              {/* Donor Information */}
              <div className="space-y-4">
                <Label className="text-base block text-gray-400">Donor Information</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm mb-2 block text-gray-400">
                      Full Name *
                    </Label>
                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} id="name" placeholder="Enter your full name" className="h-11 text-gray-200 placeholder:text-gray-400" required />
                    <input id="anonim-checkbox" type="checkbox" checked={anonim} onChange={handleAnonimChange} className="checkbox" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm mb-2 block text-gray-400">
                      Email *
                    </Label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="email@example.com" className="h-11 text-gray-200 placeholder:text-gray-400" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm mb-2 block text-gray-400">
                    Phone Number *
                  </Label>
                  {/* <Input id="phone" placeholder="08xxxxxxxxxx" className="h-11 text-gray-200 placeholder:text-gray-400" required /> */}
                  <PhoneInput
                    placeholder="Enter phone number"
                    international
                    defaultCountry="ID"
                    value={phone}
                    onChange={(setValue) => setPhone(setValue)}
                    className="border border-gray-200 placeholder:text-gray-400 text-gray-400 p-2 px-4 rounded-lg bg-white text-sm"
                    required
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <Label className="text-base mb-3 block text-gray-400">Payment Method</Label>
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
                        {isExpanded && method.options.length > 0 && (
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

                        {/* Fallback kalau tidak ada channel */}
                        {isExpanded && method.options.length === 0 && <p className="ml-4 mt-2 text-sm text-gray-400 italic">No available channels.</p>}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t">
                <Button type="submit" disabled={!amount || !paymentMethod || !selectedPaymentOption} className="w-full h-12 bg-[#268ece] hover:bg-[#1d7ab8] text-white text-base disabled:opacity-50">
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
              <DialogTitle className="text-2xl text-center text-gray-400">Thank You!</DialogTitle>
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
                <Button onClick={() => onOpenChange(false)} variant="outline" className="flex-1 h-12 bg-white border-2 border-[#268ece] text-[#268ece]">
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
