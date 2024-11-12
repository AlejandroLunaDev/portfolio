/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.cache = false; // Desactiva el caché
    return config;
  },
}

module.exports = nextConfig;
