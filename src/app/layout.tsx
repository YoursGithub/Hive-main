import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sfPro = localFont({
  src: "/fonts/SFPRODISPLAYREGULAR.woff2",
  variable: "--font-sf-pro",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nearhive: Don't just order, have fun",
  description:
    "We bring you the fastest delivery and the best service with our hybrid commerce. It's like online shopping, but with superhero speed.",
  keywords: [
    "Nearhive",
    "food delivery",
    "online food ordering",
    "restaurant delivery",
    "doorstep food delivery",
    "food takeaway",
    "order food online",
    "instant food delivery",
    "home delivery service",
    "North Indian food delivery",
    "Chinese food delivery",
    "pizza delivery",
    "biryani delivery",
    "food delivery in Karimganj",
    "food delivery in Assam",
    "Karimganj food delivery app",
    "best restaurants in Karimganj",
    "contactless food delivery",
    "best food delivery app",
  ],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.nearhive.in",
  },
  openGraph: {
    type: "website",
    title: "Nearhive: Don't just order, have fun",
    description:
      "We bring you the fastest delivery and the best service with our hybrid commerce. It's like online shopping, but with superhero speed.",
    url: "https://www.nearhive.in",
    siteName: "Nearhive",
    locale: "en_US",
  },
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
      <head>
        <meta name="geo.region" content="IN-AS" />
        <meta name="geo.placename" content="Karimganj" />
        <meta name="geo.position" content="24.8620;92.3530" />
        <meta name="ICBM" content="24.8620, 92.3530" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sfPro.variable} antialiased`}
        style={{ fontFamily: "var(--font-sf-pro)" }}
      >
        {children}
      </body>
    </html>
  );
}
