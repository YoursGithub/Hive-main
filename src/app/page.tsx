"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Component1 from "./components/component1";
import Component2 from "./components/component2";
import Image from "next/image";
import Footer from "./components/footer";
import Button from "./components/button";
import HiveCreator from "./components/HiveCreator";
import How from "./components/How";
import Crave from "./components/Crave";
import Hiveverse from "./components/Hiveverse";
import RestaurantLeaderboard from "./components/Restaurantboard";
import { fetchBlogs, fetchBlogsById } from "@/services/blogs";

const HiveHomepage = () => {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const datafn = async () => {
    console.log(await fetchBlogs(),

    await fetchBlogsById("31eb8a4b-0949-44ae-8b19-d9aa69cad08d")
  
  );
  };

  useEffect(() => {
    datafn();
  }, []);

  useEffect(() => {
    setMounted(true);

    const style = document.createElement("style");
    style.textContent = `
      @keyframes float1 {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        50% { transform: translateY(-15px) translateX(-10px) rotate(3deg); }
      }
      @keyframes float2 {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        50% { transform: translateY(-12px) translateX(8px) rotate(-2deg); }
      }
      @keyframes float3 {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        50% { transform: translateY(-18px) translateX(12px) rotate(4deg); }
      }
      @keyframes float4 {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        50% { transform: translateY(-10px) translateX(-8px) rotate(-3deg); }
      }
      .animate-float1 { animation: float1 3s ease-in-out infinite; }
      .animate-float2 { animation: float2 3.5s ease-in-out infinite; }
      .animate-float3 { animation: float3 2.8s ease-in-out infinite; }
      .animate-float4 { animation: float4 3.2s ease-in-out infinite; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen overflow-x-hidden bg-white relative">
      <Navbar />
      <main className="relative flex flex-col items-center justify-center mt-36 lg:mt-0 px-6 pt-24">
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative w-[200px] h-[80px] flex justify-between mb-2">
            <Image
              src="/assets/Frame 625292.png"
              alt="icon1"
              width={40}
              height={40}
              className="absolute left-0 animate-float1"
            />
            <Image
              src="/assets/Frame 625293.png"
              alt="icon2"
              width={40}
              height={40}
              className="absolute left-[45px] animate-float2 mt-[-20px]"
            />
            <Image
              src="/assets/Frame 625294.png"
              alt="icon3"
              width={40}
              height={40}
              className="absolute left-[95px] animate-float3 mt-[-20px]"
            />
            <Image
              src="/assets/Frame 625295.png"
              alt="icon4"
              width={40}
              height={40}
              className="absolute left-[140px] animate-float4"
            />
          </div>

          <Image
            src="/assets/Hive1.png"
            width={180}
            height={180}
            alt="Hive Logo"
            className="mt-[-40px]"
          />
        </div>
      </main>

      <section>
        <div className="flex justify-center z-0">
          <Image
            src="/assets/mobile.svg"
            width={480}
            height={480}
            alt="Mobile"
            className="mt-16 p-10"
          />
        </div>

        <div className="bg-[#0A0A0A] mt-[-200px] text-white relative lg:min-h-[400px] min-h-[700px] flex items-center">
          <div className="max-w-4xl mx-auto text-center px-6 relative">
            <h2 className="text-[27px] font-bold lg:mt-[-100px] mt-[-250px]">
              <span className="text-yellow-500">#</span>don&apos;t just order,
              have fun
            </h2>
            <p
              className="text-gray-300 text-sm max-w-2xl mt-2 mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-sfpro)" }}
            >
              Our Curated Baskets make your work easy and affordable, combining
              top talent and the right tools to speed up your projects.
            </p>

            <div className="flex lg:flex-row text-center items-center flex-col mt-20 gap-10 justify-center">
              <div className="flex gap-3">
                <div className="bg-[#F1B729] w-3 h-3"></div>
                <p className="mt-[-5px]">FASTEST DELIVERY</p>
              </div>

              <div className="flex gap-3">
                <div className="bg-[#F1B729] w-3 h-3"></div>
                <p className="mt-[-5px]">BEST SERVICE</p>
              </div>

              <div className="flex gap-3">
                <div className="bg-[#F1B729] w-3 h-3"></div>
                <p className="mt-[-5px]">HYBRID COMMERCE</p>
              </div>
            </div>

            <div className="absolute lg:top-[20px] top-36 right-10  lg:right-[-40%]">
              <Image
                src="/assets/middleman.png"
                width={300}
                height={300}
                alt="Middleman"
              />
            </div>
          </div>
        </div>
      </section>

      <How />
      <section>
        <Component1 />
      </section>

      <section>
        <Component2 />
      </section>

      <Crave />

      <HiveCreator />

      <Hiveverse />

      <section className="mt-40">
        <div className="text-center">
          <h2 className="text-black text-2xl font-extrabold">
            Locations we are currently <br /> operating
          </h2>
          <p className="text-black mt-3 text-sm m-10">
            our goal is to provide the best services to lower tier cities cause
            these big companies won’t do <br /> that as they just want profit so
            they ignore lower tier cities. We are here to provide better <br />{" "}
            service to those cities and make India smart
          </p>
        </div>

        <Button />

        <RestaurantLeaderboard />
      </section>

      <section className="mb-10">
        <div className="flex lg:flex-row text-center items-center flex-col mt-20 gap-10 justify-center">
          <div className="flex gap-3">
            <div className="bg-[#F1B729] w-3 h-3"></div>
            <p className="mt-[-5px] text-black font-bold">FASTEST DELIVERY</p>
          </div>

          <div className="flex gap-3">
            <div className="bg-[#F1B729] w-3 h-3"></div>
            <p className="mt-[-5px] text-black font-bold">BEST SERVICE</p>
          </div>

          <div className="flex gap-3">
            <div className="bg-[#F1B729] w-3 h-3"></div>
            <p className="mt-[-5px] text-black font-bold">HYBRID COMMERCE</p>
          </div>
        </div>
      </section>

      <div className="text-center pt-8 lg:hidden md:block mb-10">
        <p className="text-lg uppercase text-black tracking-wider">
          ©ALL RIGHTS RESERVED 2025
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default HiveHomepage;
