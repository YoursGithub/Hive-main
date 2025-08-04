import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Local Font
const sfPro = localFont({
  src: "/fonts/SFPRODISPLAYREGULAR.woff2", // relative to /public
  variable: "--font-sf-pro",
  weight: "400", // Optional for single weight
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nearhive",
  description: "don't just order, have fun",
  icons: {
    icon: "/assets/favicon-modified.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sfPro.variable} antialiased`}
        style={{ fontFamily: "var(--font-sf-pro)" }} // Apply SF Pro Display by default
      >
        {children}
      </body>
    </html>
  );
}
