"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Button } from "@/components/ui/button"; // pastikan kamu punya shadcn/ui button
import { ChevronDown } from "lucide-react";
import { Locale } from "next-intl";

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const t = useTranslations("LocaleSwitcher");
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const handleChange = (nextLocale: Locale) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace(
        // @ts-expect-error — next-intl routing type issue
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      {/* Tombol utama */}
      <Button variant="ghost" disabled={isPending} className="flex items-center rounded-xl hover:bg-[#268ece]/5 text-[#7a99b3] hover:text-[#268ece] transition-all duration-300 h-9 md:h-11 px-2 md:px-3 gap-2">
        <span className="">{locale}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 w-32 bg-white backdrop-blur-2xl border-2 border-[#268ece]/20 shadow-2xl rounded-2xl p-2 z-50 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#268ece] via-[#3da9f5] to-[#17a2b8]" />
          {routing.locales.map((cur) => (
            <button
              key={cur}
              onClick={() => handleChange(cur as Locale)}
              className={`w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${cur === locale ? "bg-[#268ece]/10 text-[#268ece] font-semibold" : "hover:bg-[#268ece]/5 text-slate-600"}`}
            >
              {t("locale", { locale: cur })}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
