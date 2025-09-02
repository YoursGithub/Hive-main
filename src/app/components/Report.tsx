"use client" ;

import React, { useState, ChangeEvent, FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { createReport, ReportFormData } from "@/services/report";
import { toast } from "react-toastify";



const Report: React.FC = () => {
  const [formData, setFormData] = useState<ReportFormData>({
    fullName: "",
    appUpToDate: "",
    issue: "",
    screenshots: [],
  });

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, files } = e.target as HTMLInputElement;
    if (type === "file" && files) {
      setFormData((prev) => ({ ...prev, screenshots: Array.from(files) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting Report:", formData);

    await createReport(formData)
    // 🔥 send `formData` to Firestore or backend
    alert("Report submitted successfully!");
  };

  return (
    <>
      <div className="text-center text-black">
        <h2 className="text-4xl font-bold mt-10">Fill the Form</h2>
        <p className="mt-4 text-sm">
          Help us resolve your issue quickly by filling in the details below.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl text-black mx-auto mt-10 space-y-6 px-4"
      >
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Radio: Is app up to date? */}
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
                checked={formData.appUpToDate === "yes"}
                onChange={handleChange}
                className="form-radio text-black"
              />
              <span className="text-sm">Yes</span>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="appUpToDate"
                value="no"
                checked={formData.appUpToDate === "no"}
                onChange={handleChange}
                className="form-radio text-black"
              />
              <span className="text-sm">No</span>
            </label>
          </div>
        </div>

        {/* Issue */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Issue</label>
          <textarea
            rows={4}
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Describe the issue you're facing"
            required
          ></textarea>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Screenshots (if any)
          </label>
          <input
            type="file"
            name="screenshots"
            multiple
            accept="image/*"
            onChange={handleChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Submit Button */}
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
