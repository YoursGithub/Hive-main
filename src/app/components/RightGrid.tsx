import Image from "next/image";
import React from "react";
import { Restaurant } from "@/app/types/index";

type RightImageGridProps = {
  restaurant: Restaurant | null;
};

const RightImageGrid: React.FC<RightImageGridProps> = ({ restaurant }) => {
  if (!restaurant) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">Select a restaurant to view images</p>
      </div>
    );
  }

  const chunkImages = (arr: string[], size = 4): string[][] => {
    const result: string[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const imageChunks = chunkImages(restaurant.images);

  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-white mt-6 md:mt-10 ml-0 md:ml-10">
      {/* Mobile View */}
      <div className="block md:hidden">
        {imageChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="flex gap-2 mb-4">
            {[0, 1].map((colIndex) => {
              const isReversed = chunkIndex % 2 !== 0;
              const images = chunk.slice(colIndex * 2, colIndex * 2 + 2);

              return (
                <div
                  key={colIndex}
                  className={`flex flex-1 ${
                    isReversed ? "flex-col-reverse" : "flex-col"
                  } gap-2`}
                >
                  {images.map((image, imageIndex) => {
                    const absoluteIndex =
                      chunkIndex * 4 + colIndex * 2 + imageIndex;
                    return (
                      <div
                        key={absoluteIndex}
                        className="relative overflow-hidden bg-white group"
                      >
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10" />

                        <Image
                          src={image}
                          width={96}
                          height={96}
                          alt={`${restaurant.name} food ${absoluteIndex + 1}`}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 z-0"
                        />

                        <div className="absolute top-2 left-2 px-3 py-1 bg-[#d2b48c] text-black text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          #fusionfrenzy
                        </div>

                        <div className="absolute bottom-2 left-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          Handi chicken dum biryani at your table by clock tower
                        </div>

                        <div className="flex items-center gap-2 px-3 py-2 border-t bg-white relative z-20">
                          <div className="w-5 h-5 bg-gray-400 rounded-full" />
                          <span className="text-sm font-medium text-gray-800">
                            Kunal Deb
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 auto-rows-[minmax(150px,_auto)] gap-4">
        {restaurant.images.map((image, index) => {
          const isBig = index % 7 === 1 || index % 7 === 4;

          return (
            <div
              key={index}
              className={`bg-white group ${
                isBig ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              } flex flex-col`}
            >
              <div className="relative flex-1 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10" />

                <Image
                  src={image}
                  width={96}
                  height={96}
                  alt={`${restaurant.name} food ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 z-0"
                />

                <div className="absolute top-2 left-2 px-3 py-1 bg-[#d2b48c] text-black text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  #fusionfrenzy
                </div>

                <div className="absolute bottom-3 left-2 text-white text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  Handi chicken dum biryani at your table by clock tower
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 border-t bg-white">
                <div className="w-5 h-5 bg-gray-400 rounded-full" />
                <span className="text-sm font-medium text-gray-800">
                  Kunal Deb
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightImageGrid;
