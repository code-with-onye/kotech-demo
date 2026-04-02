import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./beauty.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Chelsea Sloan Studios | Premium Beauty & Wellness",
  description: "Feel. Breathe. Release. Chelsea Sloan Studios is your sanctuary of stillness and rejuvenation.",
  keywords: ["beauty", "spa", "wellness", "chelsea sloan studios", "massage", "rejuvenation"],
};

export default function BeautyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${playfair.variable} ${inter.variable} antialiased`}>
      {children}
    </div>
  );
}
