// app/layout.js o app/layout.tsx

import TapHint from '../common/components/tapHint/TapHint';
import Navbar from '../common/navbar/Navbar';
import { BsMouse } from 'react-icons/bs';
import '../scss/globals.scss';

export default function AboutLayout({
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
