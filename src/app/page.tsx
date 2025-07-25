"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Component1 from "./components/component1";
import Component2 from "./components/component2";
import Image from "next/image";
import Footer from "./components/footer";

const HiveHomepage = () => {
  const [mounted, setMounted] = useState(false);
  const [activeLocation, setActiveLocation] = useState("Sribhumi");

  const locations = ["Dharmanagar", "Sribhumi", "Silchar"];

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

      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-24">
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
            src="/assets/mobile.png"
            width={480}
            height={480}
            alt="Mobile"
            className="mt-16 p-10"
          />
        </div>

        <div className="bg-[#0A0A0A] mt-[-200px] text-white py-6 relative">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-2xl md:text-3xl font-bold mt-5">
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

            <div className="mt-10 flex justify-end">
              <Image
                src="/assets/middleman.png"
                width={300}
                height={300}
                alt="Middleman"
                className="mt-[-80px] ml-[200px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 md:px-20 py-14 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[22px] md:text-[24px] font-bold text-black max-w-[450px] leading-snug">
            Not Just Another Delivery App, This one&apos;s Interesting
          </h2>

          <Image
            src="/assets/line.png"
            width={750}
            height={300}
            alt="Line"
            className="mx-auto left-20"
          />

          <div className="relative h-[160px] w-full">
            <div className="absolute right-20 mt-[-110px] text-black font-semibold text-3xl">
              How?
            </div>
          </div>
        </div>
      </section>

      <section>
        <Component1 />
      </section>

      <section>
        <Component2 />
      </section>

      <section className="container">
        <div className="flex gap-56">
          <div className="mt-40">
            <Image
              src="/assets/sidemob.png"
              alt="icon1"
              width={440}
              height={440}
              className=""
            />
          </div>

          <div className="mt-96 flex ml-44 2xl:ml-96">
            <h2 className="text-black font-extrabold text-2xl whitespace-nowrap">
              Scroll posts like
            </h2>
            <div className="">
              <Image
                src="/assets/insta.png"
                alt=""
                width={150}
                height={40}
                className="mt-[-55px] absolute"
              />
            </div>
            <br />

            <div>
              <h2 className="text-black ml-[-70px] font-extrabold text-2xl whitespace-nowrap text-right">
                and order <br /> whichever item you crave for
              </h2>

              <div className="">
                <div className="bg-[#F1B729] w-[450px] h-36 text-center text-black ml-[-180px] mt-6 p-2 max-w-screen absolute">
                  <p className="text-sm">
                    Our Curated Baskets make your work easy and affordable,
                    combining top talent and the right tools to speed up your
                    projects. Our Curated Baskets make your work easy and
                    affordable, combining top talent and the right tools to
                    speed up your projects. Our Curated Baskets make your work
                    easy and affordable, combining top talent and the right
                    tools to speed up your projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center">
          <h2 className="text-black text-2xl font-extrabold">
            Become Hive Creator and earn rewards just by <br /> uploading
          </h2>
        </div>

        <div className="relative">
          <div className="bg-black mb-10 mt-64 text-white py-16 relative overflow-hidden z-10">
            <div className="container mx-auto relative z-20 flex items-center justify-between">
              <div className="ml-10 space-y-5">
                <h3 className="text-xl font-semibold">
                  Join as a creator and Earn!
                </h3>
                <p className="text-sm  leading-relaxed">
                  Join as a NearHive creator and earn credits, offers, goodies{" "}
                  <br />
                  and many more by contributing to NearHive community.
                </p>
                <button className="bg-[#F1B729] text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
                  Join
                </button>
              </div>
            </div>

            <Image
              src="/assets/money.png"
              width={250}
              height={250}
              alt="Rewards"
              className="absolute right-20 top-14 z-0 pointer-events-none"
            />
          </div>

          <div className="absolute w-full top-[-270px] flex justify-center z-30 pointer-events-none">
            <Image
              src="/assets/iPhone 16.png"
              width={800}
              height={800}
              alt="Mobile"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="text-center">
          <h2 className="text-black text-2xl font-extrabold">
            Introducing HiveVerse
          </h2>
          <p className="text-black mt-3 text-sm">
            Creating an ecosystem of Hive services for the people of India, not
            just focusing on tier 1&2 cities, <br /> but to cater the actual
            India which compromises of lower tier cities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mb-20 m-20">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <Image
              src="/assets/Poila Boishak (6) 3.png"
              alt="DropHive"
              width={90}
              height={90}
              className=" mb-4 "
            />
            <h3 className="text-2xl font-semibold text-black mb-1 mt-20">
              DropHive
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Hyperlocal parcel drop & pickup service
            </p>
            <button className="bg-[#F1B729] text-black mt-2 px-8 py-3 textcenter hover:bg-yellow-500 transition-colors">
              Coming Soon
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <Image
              src="/assets/Poila Boishak (5) 2.png"
              alt="ShopHive"
              width={90}
              height={90}
              className=" mb-4"
            />
            <h3 className="text-2xl font-semibold text-black mb-1 mt-20">
              ShopHive
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Hyperlocal parcel drop & pickup service
            </p>
            <button className="bg-[#F1B729] text-black mt-2 px-8 py-3 textcenter hover:bg-yellow-500 transition-colors">
              Coming Soon
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <Image
              src="/assets/Poila Boishak (4) 2.png"
              alt="MediHive"
              width={90}
              height={90}
              className=" mb-4"
            />
            <h3 className="text-2xl font-semibold text-black mb-1 mt-20">
              MediHive
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Hyperlocal parcel drop & pickup service
            </p>
            <button className="bg-[#F1B729] text-black mt-2 px-8 py-3 textcenter hover:bg-yellow-500 transition-colors">
              Coming Soon
            </button>
          </div>
        </div>
      </section>

      <section className="mt-40">
        <div className="text-center">
          <h2 className="text-black text-2xl font-extrabold">
            Locations we are currently <br /> operating
          </h2>
          <p className="text-black mt-3 text-sm">
            our goal is to provide the best services to lower tier cities cause
            these big companies won’t do <br /> that as they just want profit so
            they ignore lower tier cities. We are here to provide better <br />{" "}
            service to those cities and make India smart
          </p>
        </div>

        <div className="flex gap-5 md:ml-[-40px] justify-center mt-4">
          {locations.map((location) => (
        <button
          key={location}
          onClick={() => setActiveLocation(location)}
          className={`mt-2 px-8 py-2 rounded-full text-center transition-colors duration-300 ease-in-out cursor-pointer border border-[#A7A7A7] 
            ${
              activeLocation === location
                ? "bg-yellow-500 text-black"
                : "bg-white text-[#949494] hover:bg-yellow-500 hover:text-black"
            }
          `}
        >
          {location}
        </button>
      ))}
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default HiveHomepage;
