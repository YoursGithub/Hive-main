import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 mt-20">
      <div>
        <Image
          src="/assets/Hive..png"
          alt="icon1"
          width={40}
          height={40}
          className=""
        />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
              HIVE BLOGS
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Trending
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
              HIVE CREATORS
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Join
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
              COMMUNITY
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Sribhumi
                </a>
              </li>
            </ul>
          </div>

          {/* Work With Us */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
              WORK WITH US
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Franchise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  Franchise
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Follow Us */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-6 uppercase tracking-wider">
              FOLLOW US ON
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-yellow-400 hover:text-black transition-colors px-4 py-2 rounded flex items-center space-x-2"
              >
                <FaInstagram size={16} />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-yellow-400 hover:text-black transition-colors px-4 py-2 rounded flex items-center space-x-2"
              >
                <FaLinkedin size={16} />
                <span className="text-sm">Linkedin</span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-6 uppercase tracking-wider">
              HAVE SOMETHING IMPORTANT TO TELL US?
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white mb-2">Email*</label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex items-start space-x-2">
                <input type="checkbox" id="privacy" className="mt-1" />
                <label htmlFor="privacy" className="text-xs text-gray-400">
                  By checking this box, I agree to allow Nearhive to store and
                  process the personal data submitted above to provide me
                  content consistent with the{" "}
                  <a href="#" className="text-yellow-400 hover:underline">
                    Nearhive Privacy Policy
                  </a>
                </label>
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-medium transition-colors">
                Submit →
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Links */}
        <div className="flex flex-wrap justify-between items-center text-sm text-gray-400 mb-8">
          <div className="flex flex-wrap space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Report Issue
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Help
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy & policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & condition
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies policy
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            ©ALL RIGHTS RESERVED 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
