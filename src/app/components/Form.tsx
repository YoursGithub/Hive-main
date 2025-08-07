"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { createHiveCreator } from "@/services/hivecreator";
import { useSearchParams } from "next/navigation";

const Form = () => {

    const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    link: "",
    about: "",
    cuisines: [] as string[],
    favoriteCafe: "",
    favoriteFood: "",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCuisineChange = (cuisine: string) => {
    setFormData((prev) => {
      const cuisines = prev.cuisines.includes(cuisine)
        ? prev.cuisines.filter((c) => c !== cuisine)
        : [...prev.cuisines, cuisine];
      return { ...prev, cuisines };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add API call or further processing

    try {
      

    await createHiveCreator(userId, {
      description: formData.about,
      email: formData.email,
      favfood: formData.favoriteFood,
      name: formData.name,
      phone: formData.phone,
      social: formData.link,
      store: formData.favoriteCafe,
      cuisines : formData.cuisines
    });

    
    } catch (error) {
      console.log(error);
      
    }

  };
  return (
    <>
      <div className="text-center text-black">
        <h2 className="text-4xl font-bold">Fill the Form</h2>
        <p className="mt-4 text-sm">
          Fill up the following details so that we can <br /> add you as a
          creator to our system
        </p>
      </div>

      <form
        className="max-w-3xl text-black mx-auto mt-10 space-y-6 px-4"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name (Full Name)
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ph. Number (Used while registering on Nearhive)
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              required

            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
              />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Link (Instagram/ Facebook)
            </label>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              required


            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tell us something interesting about yourself
          </label>
          <textarea
            rows={4}
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Write here..."
            required

          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What’s Your Favorite Cuisines? (you can choose more than 1)
          </label>
          <div className="flex flex-wrap gap-4">
            {[
              "North Indian",
              "South Indian",
              "Japanese",
              "Thai",
              "Chinese",
              "Italian",
              "American",
            ].map((item) => (
              <label key={item} className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.cuisines.includes(item)}
                  onChange={() => handleCuisineChange(item)}
                  className="form-checkbox text-black"
                />
                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-700 text-center mb-1 mt-2">
              What’s your favorite Cafe/Restaurant in your locality?
            </label>
            <input
              type="text"
              name="favoriteCafe"
              value={formData.favoriteCafe}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md mt-2 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your favorite cafe/restaurant"
              required

            />
          </div>

          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-700 text-center mb-1">
              What’s your favorite Food Item?
            </label>
            <input
              type="text"
              name="favoriteFood"
              value={formData.favoriteFood}
              onChange={handleChange}
              className="block w-full border border-gray-300 mt-2 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your favorite food item"
              required

            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-[#F1B729] transition-all duration-200 text-black py-2 px-6 rounded-md inline-flex items-center gap-2"
          >
            Submit <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
