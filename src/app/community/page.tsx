"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SearchBar from "../components/search";
import Button from "../components/button";
import LeftSidebar from "../components/LeftSidebar";
import RightImageGrid from "../components/RightGrid";

const Community = () => {
  const restaurantData = [
    {
      id: 1,
      name: "Zykas Restaurant & cafe",
      points: "120 points",
      logo: "🏪",
      images: [
        "/assets/imagee.png",
        "/assets/imagee.png",
        "/assets/imagee.png",
        "/assets/imagee.png",
        "/assets/imagee.png",
        "/assets/imagee.png",
      ],
    },
    {
      id: 2,
      name: "Lashup Cafe",
      points: "120 points",
      logo: "☕",
      images: [
        "/assets/image1.png",
        "/assets/image1.png",
        "/assets/image1.png",
        "/assets/image1.png",
        "/assets/image1.png",
        "/assets/image1.png",
      ],
    },
    {
      id: 3,
      name: "Fusion Frenzy",
      points: "120 points",
      logo: "🍜",
      images: [
        "/assets/imagee.png",
        "/assets/imagee.png",
        "/assets/imagee.png",
        "/assets/imagee.png",
        "/assets/imagee.png",
        "/assets/imagee.png",
      ],
    },
    {
      id: 4,
      name: "Clock Tower Restaurant cum cafe",
      points: "10 points",
      logo: "🍽️",
      images: [
        "/assets/image1.png",
        "/assets/image1.png",
        "/assets/image1.png",
        "/assets/image1.png",
        "/assets/image1.png",
        "/assets/image1.png",
      ],
    },
    {
      id: 5,
      name: "Metauspace",
      points: "120 points",
      logo: "🚀",
      images: [
        "/assets/imagee.png",
        "/assets/imagee.png",
        "/assets/imagee.png",
        "/assets/imagee.png",
        "/assets/imagee.png",
        "/assets/imagee.png",
      ],
    },
    {
      id: 6,
      name: "NearHive",
      points: "120 points",
      logo: "🏠",
      images: [
        "/assets/image1.png",
        "/assets/image1.png",
        "/assets/image1.png",
        "/assets/image1.png",
        "/assets/image1.png",
        "/assets/image1.png",
      ],
    },
  ];

  type Restaurant = (typeof restaurantData)[0];

  const [activeRestaurant, setActiveRestaurant] = useState<Restaurant>(
    restaurantData[0]
  );

  const handleRestaurantClick = (restaurant: Restaurant) => {
    setActiveRestaurant(restaurant);
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col lg:flex-row mt-20 lg:mt-0">
        <div className="text-black lg:ml-10 mt-8">
          <div className="ml-5">
            <h2 className="text-xl">Hive Store</h2>
            <p>List of all Hive Stores available at your location</p>
          </div>
          <Button />
        </div>

        <SearchBar />
      </div>

      <div className="flex flex-col md:flex-row ">
        <LeftSidebar
          restaurants={restaurantData}
          activeRestaurant={activeRestaurant}
          onRestaurantClick={handleRestaurantClick}
        />
        <RightImageGrid restaurant={activeRestaurant} />
      </div>

      <Footer />
    </>
  );
};

export default Community;
