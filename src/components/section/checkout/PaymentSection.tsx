"use client";
import { CreditCard, Building2, Wallet, Check } from "lucide-react";
import { motion } from "motion/react";
import { PaymentMethodCard } from "./PaymentMethodCard";
import { BankIcon } from "./BankIcon";
import { EwalletIcon } from "./WalletSection";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { fetchPaymentChannel } from "../../../../services/donation/transaction/auth-payment-channel";

interface PaymentSectionProps {
  onPaymentChange?: (isComplete: boolean) => void;
  onChange?: (data: { paymentMethod: string; selectedChannel: any | null }) => void;
}

interface PaymentChannel {
  id: number;
  donation_payment_id: number;
  donation_method_id: number;
  payment_channel_name: string;
  account_no: string;
  is_active: boolean;
  channel_name: string;
  code_payment: string;
  sender_type: string;
}

export function PaymentSection({ onPaymentChange, onChange }: PaymentSectionProps) {
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [selectedChannelId, setSelectedChannelId] = useState<number | null>(null);
  const [expandedPayment, setExpandedPayment] = useState<string>("");

  // ✅ Fetch payment channels via TanStack Query
  const {
    data: paymentChannels,
    isLoading,
    isError,
  } = useQuery<PaymentChannel[]>({
    queryKey: ["paymentChannels"],
    queryFn: async () => {
      const res = await fetchPaymentChannel();
      return res.data; // ambil array-nya saja
    },
  });

  const banks = paymentChannels?.filter((c) => c.donation_payment_id === 1 && c.is_active) || [];

  const virtual = paymentChannels?.filter((c) => c.sender_type === "virtual_account" && c.is_active) || [];

  const ewallets = paymentChannels?.filter((c) => c.sender_type === "wallet_account" && c.is_active) || [];

  const isPaymentComplete = !!paymentMethod && !!selectedChannelId;

  const [userHasSelected, setUserHasSelected] = useState(false);

  useEffect(() => {
    if (!paymentChannels || !userHasSelected || !selectedChannelId) return;

    const channel = paymentChannels.find((ch) => ch.id === selectedChannelId);

    if (channel) {
      const safeChannel = {
        ...channel,
        sender_type: channel.donation_payment_id === 1 ? null : channel.sender_type,
      };

      onChange?.({
        paymentMethod,
        selectedChannel: safeChannel,
      });
    }

    onPaymentChange?.(isPaymentComplete);
  }, [isPaymentComplete, selectedChannelId, paymentMethod, paymentChannels, userHasSelected]);

  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method);
    setExpandedPayment(method);
  };

  const handleChannelSelect = (channel: PaymentChannel) => {
    setSelectedChannelId(channel.id);
    setUserHasSelected(true);
    setExpandedPayment("");
    toast.success(`${channel.payment_channel_name} dipilih`);
  };

  if (isLoading) {
    return <motion.section className="p-8 bg-white/70 rounded-2xl border border-white/50 text-gray-500">Memuat metode pembayaran...</motion.section>;
  }

  if (isError || !paymentChannels) {
    return <motion.section className="p-8 bg-white/70 rounded-2xl border border-white/50 text-red-500">Gagal memuat channel pembayaran</motion.section>;
  }

  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/50">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isPaymentComplete ? "bg-gradient-to-r from-[#268ece] to-[#3da9f5] hover:shadow-xl hover:shadow-[#268ece]/40 text-white" : "bg-[#268ece]/10 text-[#268ece]"}`}>
          {isPaymentComplete ? <Check className="w-5 h-5" /> : <CreditCard className="w-5 h-5" />}
        </div>
        <div>
          <h2 className="text-gray-900">Metode Pembayaran</h2>
          <p className="text-sm text-gray-500">Pilih cara pembayaran yang Anda inginkan</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Bank Transfer */}
        <PaymentMethodCard
          id="bank"
          name="Transfer Bank"
          description="Transfer langsung ke rekening bank"
          icon={<Building2 className="w-5 h-5" />}
          selected={paymentMethod === "bank"}
          expanded={expandedPayment === "bank"}
          selectedOption={selectedChannelId ? paymentChannels?.find((ch) => ch.id === selectedChannelId)?.payment_channel_name : undefined}
          onSelect={handlePaymentMethodSelect}
          onToggle={() => setExpandedPayment(expandedPayment === "bank" ? "" : "bank")}
        >
          <div className="grid grid-cols-2 gap-3">
            {banks.map((bank) => (
              <motion.button
                key={bank.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleChannelSelect(bank)}
                className={`p-4 rounded-xl border-2 flex items-center gap-3 ${selectedChannelId === bank.id ? "border-[#268ece] bg-[#268ece]/5" : "border-gray-200 hover:border-[#268ece]/50"}`}
              >
                <BankIcon name={bank.payment_channel_name} className="w-12 h-12" />
                <span className="text-gray-900 text-sm">{bank.payment_channel_name}</span>
              </motion.button>
            ))}
          </div>
        </PaymentMethodCard>

        {/* Vitual Account */}
        <PaymentMethodCard
          id="virtual"
          name="Virtual Account"
          description="Transfer langsung ke virtual account"
          icon={<Building2 className="w-5 h-5" />}
          selected={paymentMethod === "virtual"}
          expanded={expandedPayment === "virtual"}
          selectedOption={selectedChannelId ? paymentChannels?.find((ch) => ch.id === selectedChannelId)?.payment_channel_name : undefined}
          onSelect={handlePaymentMethodSelect}
          onToggle={() => setExpandedPayment(expandedPayment === "virtual" ? "" : "virtual")}
        >
          <div className="grid grid-cols-2 gap-3">
            {virtual.map((virtuals) => (
              <motion.button
                key={virtuals.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleChannelSelect(virtuals)}
                className={`p-4 rounded-xl border-2 flex items-center gap-3 ${selectedChannelId === virtuals.id ? "border-[#268ece] bg-[#268ece]/5" : "border-gray-200 hover:border-[#268ece]/50"}`}
              >
                <BankIcon name={virtuals.payment_channel_name} className="w-12 h-12" />
                <span className="text-gray-900 text-sm">{virtuals.payment_channel_name}</span>
              </motion.button>
            ))}
          </div>
        </PaymentMethodCard>

        {/* E-Wallet */}
        <PaymentMethodCard
          id="ewallet"
          name="E-Wallet"
          description="Bayar dengan dompet digital"
          icon={<Wallet className="w-5 h-5" />}
          selected={paymentMethod === "ewallet"}
          expanded={expandedPayment === "ewallet"}
          selectedOption={selectedChannelId ? paymentChannels?.find((ch) => ch.id === selectedChannelId)?.payment_channel_name : undefined}
          onSelect={handlePaymentMethodSelect}
          onToggle={() => setExpandedPayment(expandedPayment === "ewallet" ? "" : "ewallet")}
        >
          <div className="grid grid-cols-2 gap-3">
            {ewallets.map((ewallet) => (
              <motion.button
                key={ewallet.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleChannelSelect(ewallet)}
                className={`p-4 rounded-xl border-2 flex items-center gap-3 ${selectedChannelId === ewallet.id ? "border-[#268ece] bg-[#268ece]/5" : "border-gray-200 hover:border-[#268ece]/50"}`}
              >
                <EwalletIcon name={ewallet.payment_channel_name} className="w-12 h-12" />
                <span className="text-gray-900 text-sm">{ewallet.payment_channel_name}</span>
              </motion.button>
            ))}
          </div>
        </PaymentMethodCard>
      </div>
    </motion.section>
  );
}
