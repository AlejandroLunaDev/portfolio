import type { Metadata } from "next";
import "./globals.scss";

// app/layout.js o app/layout.tsx


export const metadata: Metadata = {
  title: "Alejandro Ortiz Luna",
  description: "Showcasing the creative and functional web applications built by Alejandro, a passionate frontend developer skilled in JavaScript, React, and modern web technologies.",
  keywords: ["Frontend Developer", "JavaScript", "React", "Web Development", "Portfolio", "Alejandro"],
  icons: {
    icon: "/vite.svg",
  }
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
