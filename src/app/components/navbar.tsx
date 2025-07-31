"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { label: "Nearhive", href: "/" },
    { label: "Community", href: "/community" },
    { label: "Team", href: "" },
    { label: "Hive Blogs", href: "/hiveblogs" },
  ];

  return (
    <nav className="relative z-50 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/logo.png" width={35} height={35} alt="" />
          </Link>

          <div className="hidden md:flex space-x-6 text-gray-600 ">
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

        <div className="hidden md:flex fixed top-3 left-1/2 -translate-x-1/2 items-center rounded-lg overflow-hidden bg-black border border-black p-1 ">
          {tabs.map((tab, index) => {
            const isActive = pathname === tab.href;
            const isNearhive = tab.label === "Nearhive";

            return (
              <button
                key={`${tab.href}-${tab.label}-${index}`}
                onClick={() => router.push(tab.href)}
                className={`px-7 py-2 text-[15px] cursor-pointer font-medium transition-all duration-200 ${
                  isActive ? "bg-[#202020] text-white rounded-lg" : "text-white"
                } ${!isNearhive ? "" : ""}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <section className="lg:hidden">
          <div className="fixed bottom-7 left-1/2 -translate-x-1/2 z-50 w-[90%] bg-black text-white rounded-xl px-4 py-3 flex justify-around items-center shadow-lg border border-gray-800">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/assets/Rectangle 3610.svg"
                alt="Home"
                width={24}
                height={24}
              />
            </Link>

            <Link href="/community" className="flex items-center justify-center">
              <Image
                src="/assets/Vector.svg"
                alt="Activity"
                width={24}
                height={24}
              />
            </Link>

            <Link href="" className="flex items-center justify-center">
              <Image
                src="/assets/Vector-1.svg"
                alt="Team"
                width={24}
                height={24}
              />
            </Link>

            <Link
              href="/hiveblogs"
              className="flex items-center justify-center"
            >
              <Image
                src="/assets/Vector-2.svg"
                alt="Blog"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </section>

        <div className="hidden md:flex space-x-6 text-gray-600 ">
          {/* <Link href="#" className="hover:text-gray-900 transition-colors">
            Login Dashboard
          </Link> */}
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
                alt=""
              />
            </Link>
            <Image src="/assets/apple.svg" width={20} height={20} alt="" className="mt-[-6px]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
