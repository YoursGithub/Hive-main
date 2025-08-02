"use client";
import React from "react";
import Image from "next/image";

const restaurants = [
  {
    rank: 1,
    name: "Clock Tower Restaurant cum cafe",
    address: "Dak banglow road near saraswati vidya mandir",
    rating: 4.8,
    content: 102,
    points: 8.2,
    logo: "/assets/m.svg",
  },
  {
    rank: 2,
    name: "Fusion Frenzy",
    address: "Dak banglow road near saraswati vidya mandir",
    rating: 4.8,
    content: 102,
    points: 8.0,
    logo: "/assets/n.svg",
  },
  {
    rank: 3,
    name: "Lockup Cafe",
    address: "Dak banglow road near saraswati vidya mandir",
    rating: 4.8,
    content: 102,
    points: 7.1,
    logo: "/assets/p.svg",
  },
];

const RestaurantLeaderboard = () => {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <section className="bg-white text-black px-4 md:px-20 py-10">
      <div className="block md:hidden space-y-4">
        <h2 className="text-lg font-semibold mb-6">Restaurant Leaderboard</h2>
        {restaurants.map((r) => (
          <div
            key={r.rank}
            className="bg-gray-50 rounded-lg p-4 border border-gray-200"
          >
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-gray-600">#{r.rank}</span>
              </div>
              
              <div className="w-12 h-12 relative shrink-0">
                <Image
                  src={r.logo}
                  alt={r.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base leading-tight">
                  {truncateText(r.name, 10)}
                </h3>
                <p className="text-gray-500 text-sm mt-1 leading-tight">
                  {truncateText(r.address, 15)}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mt-3 text-sm ml-[-20px]">
                  <div className="text-center">
                    <span className="block text-gray-500 text-xs">Rating</span>
                    <span className="font-medium">{r.rating}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-500 text-xs">Content</span>
                    <span className="font-medium">{r.content}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-gray-500 text-xs">Points</span>
                    <span className="font-bold text-black">{r.points}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-x-auto w-full">
        <table className="w-full table-auto border-separate border-spacing-y-4">
          <thead className="text-left text-sm md:text-base font-semibold text-black border-b border-black border-dotted">
            <tr className="border border-black">
              <th className="py-2">Rank</th>
              <th className="py-2">Restaurants</th>
              <th className="text-center py-2">Ratings</th>
              <th className="text-center py-2">Content</th>
              <th className="text-center py-2">Points</th>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            {restaurants.map((r) => (
              <tr
                key={r.rank}
                className="border-b border-dotted border-gray-300"
              >
                <td className="py-4">{r.rank}</td>
                <td className="py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 relative shrink-0">
                      <Image
                        src={r.logo}
                        alt={r.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{r.name}</div>
                      <div className="text-gray-500 text-xs">{r.address}</div>
                    </div>
                  </div>
                </td>
                <td className="text-center py-4">{r.rating}</td>
                <td className="text-center py-4">{r.content}</td>
                <td className="text-center py-4 font-medium">{r.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-6">
        <button className="border border-black px-6 py-2 cursor-pointer rounded-full text-sm hover:bg-black hover:text-white transition-all">
          See More
        </button>
      </div>
    </section>
  );
};

export default RestaurantLeaderboard;