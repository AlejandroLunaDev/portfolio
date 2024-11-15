import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import '../../scss/globals.scss';

export const metadata: Metadata = {
  title: 'Alejandro Ortiz Luna',
  description:
    'Showcasing the creative and functional web applications built by Alejandro, a passionate frontend developer skilled in JavaScript, React, and modern web technologies.',
  keywords: [
    'Frontend Developer',
    'JavaScript',
    'React',
    'Web Development',
    'Portfolio',
    'Alejandro',
  ],
  icons: {
    icon: '/images/LogoAle3D.webp',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Verifica si el locale es válido
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  // Carga los mensajes de traducción
  const messages = await getMessages();
  console.log('messages', messages);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
