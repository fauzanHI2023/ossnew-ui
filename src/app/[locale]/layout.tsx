import { notFound } from "next/navigation";
import { Locale, hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import QueryProvider from "@/components/utility/QueryProvider";
import { ReactNode } from "react";
import { routing } from "@/i18n/routing";
import { Ubuntu, Raleway } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";
import AuthProvider from "../../../context/SessionProvider";
import { CartProvider } from "../../../context/CartContext";
import { Toaster } from "sonner";

type Props = {
  children: React.ReactNode;
  params: { locale: Locale };
};

const quattrocento = Ubuntu({
  weight: ["300", "400", "700"], // tergantung kebutuhan
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const fanwood_text = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html className="h-full" lang={params.locale}>
      <body className={`${fanwood_text.variable} ${quattrocento.variable} antialiased`}>
        <AuthProvider>
          <NextIntlClientProvider>
            <CartProvider>
              <QueryProvider>
                <Header />
                <Toaster />
                {children}
                <Footer />
              </QueryProvider>
            </CartProvider>
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
