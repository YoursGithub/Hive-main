"use client";

import React, { useState } from "react";
import Image from "next/image";

const Component1 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    "/assets/Rectangle 3697.png",
    "/assets/Rectangle 3697.png",
    "/assets/Rectangle 3697.png",
    "/assets/Rectangle 3697.png",
    "/assets/Rectangle 3697.png",
  ];

  return (
    <>
      <div className="text-center text-black px-4 mt-10">
        <h2 className="text-2xl font-extrabold">
          We are the World&apos;s First social experience
          <br />
          Delivery App
        </h2>
        <p className="font-light text-sm mt-2 max-w-xl mx-auto">
          Our Curated Baskets make your work easy and affordable, combining top
          talent and the right tools to speed up your projects.
        </p>
      </div>

      <div className="mt-10 mb-20 block md:hidden">
        {/* Full-width top image */}
        <div className="w-full h-72">
          <Image
            src={images[0]}
            alt="Main mobile image"
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex w-full">
          <div className="w-3/4 h-40">
            <Image
              src={images[1]}
              alt="Mobile small 1"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/4 h-40">
            <Image
              src={images[2]}
              alt="Mobile small 2"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 mb-20 hidden md:flex md:justify-center gap-1 px-0 max-w-6xl mx-auto scroll-smooth snap-x h-56">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative snap-start flex-shrink-0 transition-all duration-300 ease-in-out ${
              hoveredIndex === index ? "px-2" : "px-0"
            } w-56 h-40 overflow-visible`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`absolute cursor-pointer top-1/2 left-1/2 transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2 ${
                hoveredIndex === index ? "w-72 h-48 z-10" : "w-52 h-40"
              }`}
            >
              <Image
                src={image}
                alt={`Carousel ${index + 1}`}
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Component1;
