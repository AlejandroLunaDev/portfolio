// app/layout.js o app/layout.tsx

import TapHint from "../common/components/molecules/tapHint/TapHint";
import Navbar from "../navbar/components/organism/Navbar";
import { BsMouse } from "react-icons/bs";

export default function AboutLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <div>
        <header>
        <Navbar />
        </header>
        {children}
        <TapHint paragraphText="Scroll down ▼" Icon={BsMouse} />
        </div>

  );
}
