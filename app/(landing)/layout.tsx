import type { Metadata } from 'next';
import '../scss/globals.scss';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
