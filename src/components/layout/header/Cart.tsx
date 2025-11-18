"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ShoppingCart, Languages, Menu, Heart, Trash2, ArrowRight, X, LogIn } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useCart } from "../../../../context/CartContext";
import { fetchCampaign } from "../../../../services/donation/campaign/auth-campaign";
import { CartItem } from "@/app/types/cart";
import Link from "next/link";
import Image from "next/image";

interface TopHeaderProps {
  onMenuClick?: () => void;
  onCartHover?: (isHovered: boolean) => void;
}

export function Cart({ onCartHover }: TopHeaderProps) {
  const { data: session } = useSession();
  const user: any = session?.user;
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [cartDetails, setCartDetails] = useState<CartItem[]>([]);
  const { cartItems, setCartItems, cartCount, removeItemFromCart } = useCart();

  useEffect(() => {
    const fetchCartDetails = async () => {
      try {
        const allCampaigns = await fetchCampaign();

        const updatedCartItems = cartItems.map((item) => {
          const campaignData = allCampaigns.find((campaign) => campaign.id === item.campaign_id);

          return {
            ...item,
            campaign_name: campaignData?.campaign_name || "Unknown Campaign",
            campaign_img: campaignData?.campaign_img || "/default-image.jpg",
            slug: campaignData?.slug || "not-found",
          };
        });

        // Cek apakah data baru berbeda dari data lama sebelum update
        const isChanged = JSON.stringify(cartItems) !== JSON.stringify(updatedCartItems);
        if (isChanged) {
          setCartItems(updatedCartItems);
        }
      } catch (error) {
        console.error("Error fetching campaign data:", error);
      }
    };

    if (cartItems.length > 0) {
      fetchCartDetails();
    }
  }, [cartItems]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleDeleteItem = (campaignId: number) => {
    removeItemFromCart(campaignId);
  };

  return (
    <div
      className="relative hidden md:block"
      onMouseEnter={() => {
        setIsCartHovered(true);
        onCartHover?.(true);
      }}
      onMouseLeave={() => {
        setIsCartHovered(false);
        onCartHover?.(false);
      }}
    >
      <Button variant="ghost" size="icon" className="relative rounded-xl hover:bg-[#268ece]/5 text-[#7a99b3] hover:text-[#268ece] transition-all duration-200 group w-9 h-9 md:w-11 md:h-11">
        <div className="absolute inset-0 bg-gradient-to-br from-[#268ece]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 relative z-10 transition-transform duration-200 group-hover:scale-110" />
        {cartItems.length > 0 && (
          <div className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-[#268ece] to-[#3da9f5] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-[10px] md:text-xs">{cartItems.length}</span>
          </div>
        )}
      </Button>

      {/* Cart Dropdown */}
      <div className={`absolute right-0 top-full mt-0 transition-all duration-200 ease-out ${isCartHovered ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"}`} style={{ zIndex: 100 }}>
        <div className="w-[340px] p-0 border-0 shadow-2xl bg-transparent">
          <div className="relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-2xl border-2 border-[#268ece]/20 shadow-2xl shadow-[#268ece]/20">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#268ece] via-[#3da9f5] to-[#17a2b8]" />

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#268ece]/10 to-transparent rounded-full blur-3xl" />

            {/* Header */}
            <div className="relative p-3.5 border-b border-[#268ece]/10">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-gradient-to-br from-[#268ece] to-[#3da9f5] rounded-lg shadow-md">
                  <ShoppingCart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm text-[#0a2540]">Donation Cart</h4>
                  <p className="text-xs text-[#7a99b3]">{cartItems.length} items</p>
                </div>
              </div>
            </div>

            {/* Cart Items */}
            <div className="relative max-h-[320px] overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="w-14 h-14 mx-auto mb-3 bg-[#268ece]/5 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-7 h-7 text-[#268ece]/30" />
                  </div>
                  <p className="text-sm text-[#7a99b3]">Your cart is empty</p>
                </div>
              ) : (
                <div className="p-3 space-y-2">
                  {cartItems.map((item, index) => (
                    <div
                      key={item.campaign_id}
                      className="group relative overflow-hidden rounded-xl bg-white border border-[#268ece]/10 hover:border-[#268ece]/20 transition-all duration-200 hover:shadow-sm"
                      style={{
                        animation: `slideInRight 0.3s ease-out ${index * 0.05}s both`,
                      }}
                    >
                      <Link href={`/campaign/${item.slug}`}>
                        <div className="p-2.5">
                          <div className="flex items-center gap-2.5">
                            {/* Icon */}
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#268ece]/10 to-[#3da9f5]/10 rounded-lg flex items-center justify-center text-lg border border-[#268ece]/20">
                              <Image src={`https://cdnx.human-initiative.org/image/${item.campaign_img}`} width={100} height={100} alt={item.campaign_name} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <h5 className="text-sm text-[#0a2540] mb-1 leading-tight h-[1rem] overflow-hidden">{item.campaign_name}</h5>
                              <span className="text-xs text-[#268ece]">{formatPrice(item.amount)}</span>
                            </div>

                            {/* Delete Button */}
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteItem(item.campaign_id)}
                              className="rounded-lg hover:bg-red-50 text-[#7a99b3] hover:text-red-500 w-7 h-7 transition-all duration-200 opacity-0 group-hover:opacity-100 flex-shrink-0"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="relative p-3 border-t border-[#268ece]/10 bg-[#f8fcff]">
                {/* Action Button */}
                <Button className="w-full rounded-xl bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white hover:shadow-md hover:shadow-[#268ece]/30 transition-all duration-200 group h-9">
                  <span className="text-sm">Checkout Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Button>
              </div>
            )}
          </div>

          <style jsx>{`
            @keyframes slideInRight {
              from {
                opacity: 0;
                transform: translateX(10px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
