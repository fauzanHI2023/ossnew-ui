import { Wallet } from "lucide-react";

interface EwalletIconProps {
  name: string;
  className?: string;
}

export function EwalletIcon({ name, className = "w-12 h-12" }: EwalletIconProps) {
  const getEwalletColor = (walletName: string) => {
    const colors: { [key: string]: string } = {
      GOPAY: "#00AA13",
      DANA: "#118EEA",
      ShopeePay: "#EE4D2D",
      LinkAja: "#E21D2F",
      QRIS: "#FF6B00",
    };
    return colors[walletName] || "#268ece";
  };

  const color = getEwalletColor(name);

  return (
    <div className={`${className} rounded-xl flex flex-col items-center justify-center text-white shadow-md relative overflow-hidden`} style={{ backgroundColor: color }}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
      <Wallet className="w-4 h-4 mb-0.5 relative z-10" />
      <span className="text-[10px] relative z-10">{name}</span>
    </div>
  );
}
