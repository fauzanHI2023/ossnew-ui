import { TrendingUp, HandHeart, Receipt, Heart, Home, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function DashboardSummary() {
  const cards = [
    {
      title: "Pengajuan Bantuan",
      value: "45",
      subtitle: "Total Submissions",
      change: "+12",
      changeLabel: "dari bulan lalu",
      isPositive: true,
      icon: HandHeart,
      gradient: "from-[#268ece] via-[#3da9f5] to-[#5eb8f7]",
      glowColor: "rgba(38, 142, 206, 0.4)",
      pattern: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
    },
    {
      title: "Jumlah Transaction",
      value: "234",
      subtitle: "Completed Orders",
      change: "+28",
      changeLabel: "dari bulan lalu",
      isPositive: true,
      icon: Receipt,
      gradient: "from-[#3da9f5] via-[#5eb8f7] to-[#7ac5f8]",
      glowColor: "rgba(61, 169, 245, 0.4)",
      pattern: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)",
    },
    {
      title: "Jumlah Donation",
      value: "189",
      subtitle: "Total Donations",
      change: "+15",
      changeLabel: "dari bulan lalu",
      isPositive: true,
      icon: Heart,
      gradient: "from-[#17a2b8] via-[#268ece] to-[#3da9f5]",
      glowColor: "rgba(23, 162, 184, 0.4)",
      pattern: "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)",
    },
    {
      title: "Donasi Qurban",
      value: "32",
      subtitle: "Qurban Registered",
      change: "+5",
      changeLabel: "dari bulan lalu",
      isPositive: true,
      icon: Home,
      gradient: "from-[#268ece] via-[#17a2b8] to-[#1a6ba8]",
      glowColor: "rgba(38, 142, 206, 0.4)",
      pattern: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <Card
            key={index}
            className="border-0 overflow-hidden relative group cursor-pointer hover:scale-105 transition-all duration-500"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
            }}
          >
            {/* Animated Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-100 transition-all duration-500 group-hover:opacity-90`}
              style={{
                animation: "gradientShift 6s ease infinite",
              }}
            />

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-30" style={{ background: card.pattern }} />

            {/* Glow Effect on Hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${card.glowColor}, transparent 70%)`,
                transform: "scale(1.5)",
              }}
            />

            {/* Floating Particles */}
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <Sparkles className="w-4 h-4 text-white animate-pulse" style={{ animationDuration: "2s" }} />
            </div>
            <div className="absolute bottom-6 left-6 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
              <Sparkles className="w-3 h-3 text-white animate-pulse" style={{ animationDuration: "3s", animationDelay: "1s" }} />
            </div>

            <CardContent className="p-6 relative z-10">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <p className="text-white/80 text-xs mb-1 uppercase tracking-wider">{card.title}</p>
                    <p className="text-white/60 text-xs">{card.subtitle}</p>
                  </div>

                  {/* Icon with Animated Ring */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500" />
                    <div className="relative bg-white/15 backdrop-blur-md p-3 rounded-2xl border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <Icon className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                    {/* Animated Ring */}
                    <div className="absolute inset-0 border-2 border-white/30 rounded-2xl animate-ping opacity-0 group-hover:opacity-100" style={{ animationDuration: "2s" }} />
                  </div>
                </div>

                {/* Value */}
                <div className="mb-3">
                  <div className="flex items-baseline gap-2">
                    <h1 className="text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-300" style={{ fontSize: "2.5rem", lineHeight: "1" }}>
                      {card.value}
                    </h1>
                  </div>
                </div>

                {/* Stats with Glass Effect */}
                <div className="mt-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl px-3 py-2 border border-white/20 group-hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 flex-1">
                        <div className="bg-white/20 rounded-full p-1">
                          <TrendingUp className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-white text-xs">{card.change}</span>
                      </div>
                      <span className="text-white/70 text-xs truncate">{card.changeLabel}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white/60 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: "75%",
                      animation: `progressFill 1.5s ease-out ${index * 0.2}s both`,
                    }}
                  />
                </div>
              </div>
            </CardContent>

            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ transform: "skewX(-20deg)" }} />
            </div>
          </Card>
        );
      })}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
            background-size: 200% 200%;
          }
          50% {
            background-position: 100% 50%;
            background-size: 200% 200%;
          }
        }

        @keyframes progressFill {
          from {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
}
