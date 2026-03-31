import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#3B82F6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kotechdemo.com"),
  title: {
    default: "Kotech Demo | Smart Cleaning Solutions",
    template: "%s | Kotech Demo",
  },
  description: "Innovative smart cleaning solutions for modern homes and offices.",
  keywords: ["cleaning", "smart home", "professional cleaning", "kotech"],
  authors: [{ name: "Kotech Team" }],
  creator: "Kotech Team",
  publisher: "Kotech Demo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kotechdemo.com",
    siteName: "Kotech Demo",
    title: "Kotech Demo | Smart Cleaning Solutions",
    description: "Innovative smart cleaning solutions for modern homes and offices.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kotech Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kotech Demo | Smart Cleaning Solutions",
    description: "Innovative smart cleaning solutions for modern homes and offices.",
    images: ["/og-image.jpg"],
    creator: "@kotechdemo",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo-icon.png", // Using the logo as apple touch icon
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/logo-icon.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
