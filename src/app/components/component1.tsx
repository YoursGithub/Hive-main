"use client";

import React from "react";
import Image from "next/image";
import HoverExpand from "@/components/ui/hover-expand";

const Component1 = () => {
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
        <h2 className="text-[34px] font-extrabold">
          We are the World&apos;s First social experience <br /> Delivery App
        </h2>
        <p className="font-medium text-sm mt-2 max-w-[560px] mx-auto">
          Our Curated Baskets make your work easy and affordable, combining top
          talent and the right tools to speed up your projects.
        </p>
      </div>

      <div className="mt-10 mb-20 block md:hidden">
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

      <div className="mt-10 mb-20 hidden md:flex md:justify-center gap-1 px-0 max-w-[25vw] mx-auto scroll-smooth snap-x h-56">
        <HoverExpand
          images={images}
          initialSelectedIndex={0}
          thumbnailHeight={200}
          modalImageSize={400}
          maxThumbnails={11}
        />
      </div>
    </>
  );
};

export default Component1;
