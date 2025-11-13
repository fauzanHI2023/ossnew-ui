import { Building2 } from "lucide-react";

interface BankIconProps {
  name: string;
  className?: string;
}

export function BankIcon({ name, className = "w-12 h-12" }: BankIconProps) {
  const getBankColor = (bankName: string) => {
    const colors: { [key: string]: string } = {
      BCA: "#0066AE",
      BNI: "#F37021",
      BRI: "#003A70",
      BSI: "#00A651",
    };
    return colors[bankName] || "#268ece";
  };

  const color = getBankColor(name);

  return (
    <div className={`${className} rounded-xl flex flex-col items-center justify-center text-white shadow-md relative overflow-hidden`} style={{ backgroundColor: color }}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
      <Building2 className="w-4 h-4 mb-0.5 relative z-10" />
      <span className="text-[10px] relative z-10">{name}</span>
    </div>
  );
}
