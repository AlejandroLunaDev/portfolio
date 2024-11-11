// app/layout.js o app/layout.tsx

import TapHint from "../common/components/molecules/tapHint/TapHint";
import Navbar from "../navbar/components/organism/Navbar";
import { BsMouse } from "react-icons/bs";

export default function ProjectsLayout({
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
        <TapHint paragraphText="Scroll down ▼" Icon={BsMouse} />
        </body>
    </html>
  );
}
