import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: "./messages/en.json",
  },
});

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: false, // <-- FIX PALING PENTING
  },
  images: {
    domains: [
      "f422107f67f1f1e4da5fa8080e3349b8.r2.cloudflarestorage.com",
      "poskota.co", // Hostname tambahan
      "cdn.rri.co.id",
      "human-initiative.org",
      "cdnx.human-initiative.org",
      "asset-2.tstatic.net",
      "static.promediateknologi.id",
      "cloud.jpnn.com",
      "img2.beritasatu.com",
      "pict.sindonews.net",
      "images.unsplash.com",
    ],
  },
};

export default withNextIntl(nextConfig);
