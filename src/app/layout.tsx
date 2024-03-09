import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import {Footer, Hero} from '@/components';

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <div className="max-w-7xl mx-auto bg-[#0F1117]">
          <Hero />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
