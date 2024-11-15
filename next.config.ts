import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

// Usa un string para indicar la ruta de los mensajes
const withNextIntl = createNextIntlPlugin(); // Ruta relativa donde están tus traducciones

const nextConfig: NextConfig = {
  
  // Agrega aquí otras configuraciones que necesites
};

export default withNextIntl(nextConfig);
