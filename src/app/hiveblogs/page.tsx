"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import Hiveblog from "../components/hiveblog1";
import Hiveblog2 from "../components/hiveblog2";
import Blogcomponent from "../components/Blogcomponent";

const Hiveblogs = () => {
  const [activeContent, setActiveContent] = useState("creator");

  const contents = {
    creator: {
      title: "Join as a creator and earn!",
      description1:
        "Join as a NearHive creator and earn credits, offers, goodies and many more by contributing to NearHive community. Join as a NearHive creator and earn credits, offers, goodies and many more by contributing to NearHive community.",
      description2:
        "Join as a NearHive creator and earn credits, offers, goodies and many more by contributing to NearHive community. Join as a NearHive creator and earn credits, offers, goodies and many more by contributing to NearHive community. Join as a NearHive creator and earn credits, offers, goodies and many more by contributing >",
      buttonText: "Read Full Blog →",
    },
    ecosystem: {
      title: "Creating an ecosystem of Hive services",
      description1:
        "Build and contribute to a thriving ecosystem of interconnected Hive services. Connect with developers, creators, and innovators who are shaping the future of decentralized applications.",
      description2:
        "Our ecosystem provides the tools and resources you need to create meaningful connections and build sustainable digital products. Join thousands of creators who are already part of our growing community.",
      buttonText: "Explore Ecosystem →",
    },
  };

  const currentContent = contents[activeContent as keyof typeof contents];

  const renderThumbnails = () => (
    <>
      <div
        className={`w-20 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 bg-white`}
        onClick={() => setActiveContent("creator")}
      >
        <div className="w-full h-20 relative">
          <Image
            src="/assets/Rectangle 3699.png"
            alt="Hive Creator"
            layout="fill"
            objectFit="cover"
            className="pr-2"
          />
        </div>
        <div className="p-2 hidden lg:block text-center text-black font-semibold text-[10px] whitespace-nowrap leading-tight">
          Join as a <br /> NearHive Creator
        </div>
      </div>

      <div
        className={`w-20 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 bg-white`}
        onClick={() => setActiveContent("ecosystem")}
      >
        <div className="w-full h-20 relative">
          <Image
            src="/assets/Rectangle 3699.png"
            alt="Hive Ecosystem"
            layout="fill"
            objectFit="cover"
            className="pr-2"
          />
        </div>
        <div className="p-2 hidden lg:block text-center text-black text-[10px] whitespace-nowrap font-semibold text-xs leading-tight">
          Creating an <br />
          ecosystem of <br />
          Hive services
        </div>
      </div>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-1">
        <div className="max-w-7xl mx-auto bg-white min-h-[500px] flex flex-col md:flex-row mt-24 lg:mt-0">
          <div className="lg:mt-40 mt-6 mx-auto flex flex-row items-start gap-2">
            <Image
              src="/assets/photo.png"
              width={800}
              height={800}
              alt="Main"
              className="object-cover w-[260px] lg:w-[400px] h-44 lg:h-64"
            />

            <div className="lg:hidden">
              <div className="flex flex-col justify-start gap-4">
                {renderThumbnails()}
              </div>
            </div>
          </div>

          <div className="flex-1 px-12 py-16 bg-white lg:text-left text-center relative flex flex-col justify-center">
            <div className="text-center lg:max-w-md">
              <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {currentContent.title}
              </h1>

              <p className="text-gray-600 text-base leading-relaxed mb-5">
                {currentContent.description1}
              </p>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {currentContent.description2}
              </p>

              <button className="bg-[#F1B729] text-black px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2">
                {currentContent.buttonText} →
              </button>
            </div>

            <div className="hidden md:flex absolute right-10 top-1/2 transform -translate-y-1/2 flex-col gap-4">
              {renderThumbnails()}
            </div>
          </div>
        </div>

        <div className="text-center py-10">
          <p className="text-xl text-black font-medium max-w-lg mx-auto">
            Damn guys, we&apos;ve achieved so many things. You should read some,
            its interesting ;)
          </p>
        </div>
      </div>

      <section className="w-full bg-black text-center py-16">
        <div className="space-y-10">
          <div className="text-white px-4">
            <h2 className="text-3xl">don’t just order, have fun</h2>
            <p className="text-sm mt-5 lg:max-w-md mx-auto text-center">
              Join as a NearHive creator and earn credits, offers, goodies and
              many more by contributing to NearHive community. Join as a
              NearHive creator and earn credits, offers, goodies and many more
              by contributing to NearHive community.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/assets/photo.png"
              width={500}
              height={500}
              alt="Fun Section"
            />
          </div>

          <div className="p-3 text-black bg-amber-400 w-52 whitespace-nowrap mx-auto mt-10">
            Read full blog
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="text-black text-center">
          <h2 className="text-3xl">don’t just order, have fun</h2>
          <p className="text-sm mt-2 text-[#313131]">
            Join as a NearHive creator and earn credits, offers, goodies and
            many more by <br /> contributing to NearHive community.
          </p>
        </div>

        <div>
          <Hiveblog />
          <Hiveblog2 />
          <Hiveblog />
        </div>
      </section>

      <section className="mt-20">
        <div className="text-center text-black">
          <p className="text-sm">HIVE BLOGS</p>
          <h2 className="text-xl m-3">
            Join as a NearHive creator and earn credits, offers, goodies.
          </h2>
        </div>

        <div className="max-w-5xl text-center mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Blogcomponent />
          <Blogcomponent />
          <Blogcomponent />
          <Blogcomponent />
          <Blogcomponent />
          <Blogcomponent />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Hiveblogs;
