import Image from "next/image";
import React from "react";

function Blogcomponent() {
  return (
    <>
      <div className=" overflow-hidden">
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
            Read Full Blog
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default Blogcomponent;
