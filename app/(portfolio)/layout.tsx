// app/layout.js o app/layout.tsx

import TapHint from '../shared/components/tapHint/TapHint';
import Navbar from '../shared/navbar/Navbar';
import { BsMouse } from 'react-icons/bs';
import '../scss/globals.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Alejandro Ortiz Luna",
  description: "Showcasing the creative and functional web applications built by Alejandro, a passionate frontend developer skilled in JavaScript, React, and modern web technologies.",
  keywords: ["Frontend Developer", "JavaScript", "React", "Web Development", "Portfolio", "Alejandro"],
  icons: {
    icon: "/images/LogoAle3D.webp",
  }
}

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html>
      <body>
        <header>
          <Navbar />
        </header>
        {children}
        <TapHint paragraphText="Scroll down ▼" Icon={BsMouse} />
      </body>
    </html>
  );
}
