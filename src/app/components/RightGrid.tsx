'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Restaurant } from '@/app/types';

type RightImageGridProps = {
  restaurant: Restaurant | null;
};


const boxHeights = [
  'h-[180px]',
  'h-[220px]',
  'h-[260px]',
  'h-[300px]',
  'h-[340px]',
  'h-[380px]',
  'h-[420px]',
];

const RightImageGrid: React.FC<RightImageGridProps> = ({ restaurant }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  if (!restaurant) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">Select a restaurant to view images</p>
      </div>
    );
  }

  return (
    <div className="flex-1 px-4 py-10 md:px-6 overflow-y-auto bg-white mt-6 md:mt-10 ml-0 md:ml-10">
      {/* 2-column masonry grid for all breakpoints */}
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {restaurant.images.map((src, index) => {
          const heightClass = boxHeights[Math.floor(Math.random() * boxHeights.length)];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-in-out break-inside-avoid ${heightClass}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`${restaurant.name} food ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10" />

                {/* Top tag */}
                <div className="absolute top-2 left-2 px-3 py-1 bg-[#d2b48c] text-black text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  #fusionfrenzy
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-2 left-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  Handi chicken dum biryani at your table by clock tower
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default RightImageGrid;
