import type { Metadata } from "next";
import "../scss/globals.scss";

// app/layout.js o app/layout.tsx


export const metadata: Metadata = {
  title: "Alejandro Ortiz Luna",
  description: "Showcasing the creative and functional web applications built by Alejandro, a passionate frontend developer skilled in JavaScript, React, and modern web technologies.",
  keywords: ["Frontend Developer", "JavaScript", "React", "Web Development", "Portfolio", "Alejandro"],
  icons: {
    icon: "/images/LogoAle3D.webp",
  },
  robots: {
    index: true, // Asegura que Google indexe tu sitio
    follow: true, // Permite que los motores de búsqueda sigan los enlaces internos
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        {children}
      </body>
    </html>
  );
}
