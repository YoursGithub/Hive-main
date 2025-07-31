import React from "react";
import { Restaurant } from "@/app/types/index";

type LeftSidebarProps = {
  restaurants: Restaurant[];
  activeRestaurant: Restaurant;
  onRestaurantClick: (restaurant: Restaurant) => void;
};

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  restaurants,
  activeRestaurant,
  onRestaurantClick,
}) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-80 bg-white mt-10 h-screen overflow-y-auto ml-10">
        <div className="p-2">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              onClick={() => onRestaurantClick(restaurant)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                activeRestaurant?.id === restaurant.id
                  ? "bg-blue-50 border border-blue-200"
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-lg">
                {restaurant.logo}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 text-sm">
                  {restaurant.name}
                </h3>
                <p className="text-xs text-gray-500">{restaurant.points}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Scrollable List */}
      <div className="md:hidden mt-6 px-4">
        <div
          className="flex space-x-4 overflow-x-auto pb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              onClick={() => onRestaurantClick(restaurant)}
              className={`min-w-[100px] flex-shrink-0 flex flex-col items-center cursor-pointer ${
                activeRestaurant?.id === restaurant.id
                  ? "opacity-100"
                  : "opacity-80"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-xl mb-2">
                {restaurant.logo}
              </div>
              <p className="text-sm font-medium text-black text-center">
                {restaurant.name.length > 8
                  ? restaurant.name.slice(0, 8) + "…"
                  : restaurant.name}
              </p>
              <p className="text-xs text-gray-500 text-center">
                {restaurant.points}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
