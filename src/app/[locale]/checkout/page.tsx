"use client";
import React, { useState, useEffect } from "react";
import { CartSection } from "@/components/section/checkout/CartSection";
import { ContactSection } from "@/components/section/checkout/ContactSection";
import { PaymentSection } from "@/components/section/checkout/PaymentSection";
import { SummarySidebar } from "@/components/section/checkout/SummarySidebar";
import { useCart } from "../../../../context/CartContext";
import { createTransactionFlip } from "../../../../services/donation/transaction/auth-create-transaction";
import { createTransactionBankTransfer } from "../../../../services/donation/transaction/auth-create-transaction";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
import { User } from "@/app/types/user";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { fetchDeleteCart } from "../../../../services/donation/transaction/auth-delete-cart";

export default function Checkout() {
  const { data: session, status } = useSession();
  const [userId, setUserId] = useState<number | null>(null);
  const { cartItems, clearCart } = useCart();
  const [openDialog, setOpenDialog] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (status === "authenticated" && session) {
      const user = session.user as User;
      setUserId(user.phpDonorData.id);
    }
  }, [status]);

  // ✅ State contact
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phoneCode: "+62",
    phoneNumber: "",
  });

  // ✅ State payment
  const [paymentData, setPaymentData] = useState<{
    paymentMethod: string;
    selectedChannel: any | null;
  }>({
    paymentMethod: "",
    selectedChannel: null,
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.amount, 0);
  const total = subtotal;
  const isCartComplete = cartItems.length > 0;
  const isContactComplete = !!contactData.fullName && !!contactData.email && !!contactData.phoneNumber;
  const isPaymentComplete = !!paymentData.selectedChannel;

  const canCheckout = isCartComplete && isContactComplete && isPaymentComplete;

  const handlePay = async () => {
    if (!canCheckout) {
      toast.error("Mohon lengkapi semua informasi checkout");
      return;
    }

    setIsProcessing(true);

    try {
      // ✅ Ambil snapshot aman dari selectedChannel (deep clone)
      const selectedChannelRaw = paymentData.selectedChannel;
      if (!selectedChannelRaw) {
        toast.error("Pilih metode pembayaran terlebih dahulu");
        return;
      }
      const selectedChannel = typeof structuredClone === "function" ? structuredClone(selectedChannelRaw) : JSON.parse(JSON.stringify(selectedChannelRaw));

      console.log("🧭 Selected Payment Channel:", selectedChannel);

      // 🔹 Susun payload berdasarkan snapshot (bukan state langsung)
      const payload = {
        user_id: userId,
        full_name: contactData.fullName,
        email: contactData.email,
        phone: `${contactData.phoneCode}${contactData.phoneNumber}`,
        payment_channel_id: String(selectedChannel.id),
        is_anonim: false,
        items: cartItems.map((item) => ({
          campaign_id: item.campaign_id,
          quantity: item.quantity,
          price: item.amount,
        })),
      };

      let response: any;

      // --- Gunakan snapshot untuk branching (deterministik) ---
      if (selectedChannel.donation_payment_id === 1) {
        // Bank transfer manual
        response = await createTransactionBankTransfer(payload);

        // tampilkan dialog lalu tunggu 1.5s sebelum melanjutkan cleanup
        setOpenDialog(true);
        await new Promise((res) => setTimeout(res, 5000));
        setOpenDialog(false);
      } else if (selectedChannel.sender_type === "wallet_account" || selectedChannel.sender_type === "virtual_account") {
        // Flip (VA / ewallet)
        response = await createTransactionFlip(payload);
        toast.success("✅ Transaksi Flip berhasil dibuat");

        // redirect ke payment_url jika ada (tunggu sebentar biar UX)
        if (response?.flip_response?.payment_url) {
          setTimeout(() => {
            window.location.href = response.flip_response.payment_url;
          }, 1500);
        }
      } else {
        toast.warning("⚠️ Jenis pembayaran tidak dikenali");
        return;
      }

      // --- Setelah transaksi sukses: hapus cart, reset state ---
      const cookiesId = Cookies.get("osscart");
      if (cookiesId) {
        await fetchDeleteCart(cookiesId);
      }
      clearCart();

      setContactData({
        fullName: "",
        email: "",
        phoneCode: "+62",
        phoneNumber: "",
      });
      setPaymentData({
        paymentMethod: "",
        selectedChannel: null,
      });

      setResetKey((prev) => prev + 1);
      console.log("🧾 Transaction Response:", response);
    } catch (error) {
      console.error("❌ Transaction error:", error);
      toast.error("Gagal memproses transaksi");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div className="min-h-screen relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 py-32">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <CartSection key={`cart-${resetKey}`} />
              <ContactSection key={`contact-${resetKey}`} onChange={setContactData} />
              <PaymentSection key={`payment-${resetKey}`} onChange={setPaymentData} />
            </div>

            <div className="lg:col-span-1">
              <SummarySidebar
                campaignCount={cartItems.length}
                subtotal={subtotal}
                total={total}
                isCartComplete={isCartComplete}
                isContactComplete={isContactComplete}
                isPaymentComplete={isPaymentComplete}
                onPay={handlePay}
                isProcessing={isProcessing}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Dialog Sukses */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-md text-center bg-white">
          <DialogHeader>
            <DialogTitle className="text-hi-blue-500">🎉 Transaksi Berhasil!</DialogTitle>
            <DialogDescription className="text-gray-600">Terima kasih! Silakan lakukan transfer manual ke rekening yang tertera pada halaman konfirmasi transaksi Anda."</DialogDescription>
          </DialogHeader>

          <Button onClick={() => setOpenDialog(false)} className="mt-4 w-full bg-[#268ece] hover:bg-[#1f7cc1] text-white">
            Tutup
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
