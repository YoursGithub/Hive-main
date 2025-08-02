"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { label: "Nearhive", href: "/" },
    { label: "Community", href: "/community" },
    { label: "Team", href: "/team" },
    { label: "Hive Blogs", href: "/hiveblogs" },
  ];

  return (
    <nav className="relative z-50">
      {/* 🖥️ Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/logo.png" width={35} height={35} alt="Logo" />
          </Link>

          <div className="md:flex space-x-6 text-gray-600">
            <Link
              href="/hivecreators"
              className={`hover:text-gray-900 transition-colors md:ml-40 px-4 py-2 rounded-md ${
                pathname === "/hivecreators" ? "bg-[#F1B729] text-black" : ""
              }`}
            >
              Hive Creators
            </Link>
          </div>
        </div>

        <div className="fixed top-3 left-1/2 -translate-x-1/2 flex items-center rounded-lg overflow-hidden bg-black border border-black p-1">
          {tabs.map((tab, index) => {
            const isActive = pathname === tab.href;
            return (
              <button
                key={`${tab.href}-${tab.label}-${index}`}
                onClick={() => router.push(tab.href)}
                className={`px-7 py-2 text-[15px] cursor-pointer font-medium transition-all duration-200 ${
                  isActive ? "bg-[#202020] text-white rounded-lg" : "text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex space-x-6 text-gray-600">
          <Link
            href="/report"
            className="hover:text-gray-900 transition-colors"
          >
            Report Issue
          </Link>
          <div className="flex gap-6">
            <Link
              href="https://play.google.com/store/apps/details?id=com.deliverybuzz.hive&hl=en"
              target="_blank"
            >
              <Image
                src="/assets/googleplay.svg"
                width={20}
                height={20}
                alt="Google Play"
              />
            </Link>
            <Image
              src="/assets/apple.svg"
              width={20}
              height={20}
              alt="Apple"
              className="mt-[-6px]"
            />
          </div>
        </div>
      </div>

      {/* 📱 Mobile Navbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-black flex items-center justify-between px-4 py-2 z-50">
        <div className="flex items-center gap-7">
          <Link
            href="https://play.google.com/store/apps/details?id=com.deliverybuzz.hive&hl=en"
            target="_blank"
          >
            <Image
              src="/assets/googleplay.svg"
              alt="Play Store"
              width={22}
              height={22}
            />
          </Link>
          <Image src="/assets/apple1.svg" alt="Apple" width={22} height={22} />
        </div>

        <Link href="/hivecreators">
          <Image
            src="/assets/creator.svg"
            alt="Creator"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </Link>

        <button onClick={() => setIsMenuOpen(true)}>
          <Image src="/assets/bars.svg" alt="Menu" width={24} height={24} />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-black transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)}>
              <Image src="/assets/xmark.png" alt="Close" width={28} height={28} />
            </button>
          </div>

          <div className="flex-1 text-white flex flex-col items-center justify-center space-y-8 text-lg font-semibold">
            <Link href="" onClick={() => setIsMenuOpen(false)}>Report us</Link>
            <Link href="" onClick={() => setIsMenuOpen(false)}>Need help?</Link>
            <Link href="" onClick={() => setIsMenuOpen(false)}>Terms and conditions</Link>
            <Link href="" onClick={() => setIsMenuOpen(false)}>Privacy Policy</Link>
          </div>

          <div className="flex justify-center gap-6 pb-8">
            <Link
              href="https://play.google.com/store/apps/details?id=com.deliverybuzz.hive&hl=en"
              target="_blank"
            >
              <Image src="/assets/googleplay.svg" alt="Google Play" width={28} height={28} />
            </Link>
            <Image src="/assets/apple.svg" alt="Apple" width={28} height={28} />
          </div>
        </div>
      </div>

      <section className="lg:hidden">
        <div className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50 w-[90%] bg-black text-white rounded-xl px-4 py-3 flex justify-around items-center shadow-lg">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src={
                pathname === "/"
                  ? "/assets/Rectangle 3610.svg"
                  : "/assets/Rectangle 3610 (1).svg"
              }
              alt="Home"
              width={24}
              height={24}
            />
          </Link>
          <Link href="/community" className="flex items-center justify-center">
            <Image
              src={
                pathname === "/community"
                  ? "/assets/Vector (1).svg"
                  : "/assets/Vector.svg"
              }
              alt="Activity"
              width={24}
              height={24}
            />
          </Link>
          <Link href="/team" className="flex items-center justify-center">
            <Image
              src={
                pathname === "/team"
                  ? "/assets/Vector (2).svg"
                  : "/assets/Vector-1.svg"
              }
              alt="Team"
              width={24}
              height={24}
            />
          </Link>
          <Link href="/hiveblogs" className="flex items-center justify-center">
            <Image
              src={
                pathname === "/hiveblogs"
                  ? "/assets/Vector (3).svg"
                  : "/assets/Vector-2.svg"
              }
              alt="Blog"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
