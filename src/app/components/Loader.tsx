"use client";

import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#FBFBFB] flex items-center justify-center z-[9999]">
      <Image
        src="/animations/loader (2)_3.gif"
        alt="Loading..."
        width={200}
        height={200}
        className="w-[400px]"
      />
    </div>
  );
};

export default Loader;
