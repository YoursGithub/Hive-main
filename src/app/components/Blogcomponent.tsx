import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";

function Blogcomponent() {
  return (
    <>
      <div className="bg-[#F5F5F5] m-5 lg:m-0 overflow-hidden">
        <Image
          className="w-full h-48 object-cover p-4 md:p-0"
          src="/assets/photo.png"
          width={450}
          height={450}
          alt="Blog Image"
        />
        <div className="p-10">
          <p className="text-gray-400 text-xs mb-2">27 JULY 2025</p>
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
            Pastoral Care
          </h5>
          <p className="mb-4 text-sm text-gray-600">
            Learn how to become a testnet-O2 block producer, including setup for
            Cardano SPOs, dependency services, and node configuration.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-[#F1B729] rounded-md transition"
          >
            Read Full Blog <ArrowUpRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Blogcomponent;
