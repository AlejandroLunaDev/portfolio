// app/layout.js o app/layout.tsx

import Navbar from "../navbar/components/organism/Navbar";

export default function AboutLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <header>
        <Navbar />
        </header>
        {children}
        </body>
    </html>
  );
}
