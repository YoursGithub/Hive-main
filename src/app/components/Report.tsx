import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Report = () => {
  return (
    <>
      <div className="text-center text-black">
        <h2 className="text-4xl font-bold mt-10">Fill the Form</h2>
        <p className="mt-4 text-sm">
          Help us resolve your issue quickly by filling in the details below.
        </p>
      </div>

      <form className="max-w-2xl text-black mx-auto mt-10 space-y-6 px-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Enter your full name"
          />
        </div>

        <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Is the app up to date?
  </label>
  <div className="flex gap-6">
    <label className="inline-flex items-center space-x-2">
      <input
        type="radio"
        name="appUpToDate"
        value="yes"
        className="form-radio text-black"
      />
      <span className="text-sm">Yes</span>
    </label>
    <label className="inline-flex items-center space-x-2">
      <input
        type="radio"
        name="appUpToDate"
        value="no"
        className="form-radio text-black"
      />
      <span className="text-sm">No</span>
    </label>
  </div>
</div>


        <div>
          <label className="block text-sm font-medium text-gray-700">Issue</label>
          <textarea
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Describe the issue you're facing"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Screenshots (if any)</label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="flex justify-center">
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

export default Report;
