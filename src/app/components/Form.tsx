import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Form = () => {
  return (
    <>
      <div className="text-center text-black">
        <h2 className="text-4xl font-bold">Fill the Form</h2>
        <p className="mt-4 text-sm">
          Fill up the following details so that we can <br /> add you as a creator to our system
        </p>
      </div>

        <form className="max-w-3xl text-black mx-auto mt-10 space-y-6 px-4">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name (Full Name)</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ph. Number (Used while registering on Nearhive)</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Link (Instagram/ Facebook)</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tell us something interesting about yourself (we really do read it and if we find something interesting, we might give you a surprise too)
          </label>
          <textarea
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Write here..."
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What’s Your Favorite Cuisines? (you can choose more than 1)
          </label>
          <div className="flex flex-wrap gap-4">
            {['North Indian', 'South Indian', 'Japanese', 'Thai', 'Chinese', 'Italian', 'American'].map((item) => (
              <label key={item} className="inline-flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-black" />
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
              className="block w-full border border-gray-300 rounded-md mt-2 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your favorite cafe/restaurant"
            />
          </div>

          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-700 text-center mb-1">
              What’s your favorite Food Item?
            </label>
            <input
              type="text"
              className="block w-full border border-gray-300 mt-2 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your favorite food item"
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
