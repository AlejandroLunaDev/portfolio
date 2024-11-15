import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt'],
  },
  reactStrictMode: true,
};

export default nextConfig;
