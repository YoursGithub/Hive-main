import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 mt-20 hidden lg:block">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Image
            src="/assets/Hive..png"
            alt="Hive Logo"
            width={60}
            height={60}
            className=""
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">
              HIVE BLOGS
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors text-sm"
                >
                  Trending
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">
              HIVE CREATORS
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors text-sm"
                >
                  Join
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">
              COMMUNITY
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors text-sm"
                >
                  Sribhumi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">
              WORK WITH US
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors text-sm"
                >
                  Franchise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors text-sm"
                >
                  Franchise
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors text-sm">
                  Report Issue
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors text-sm">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors text-sm">
                  Privacy & policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors text-sm">
                  Terms & condition
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors text-sm">
                  Cookies policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xs font-medium text-white mb-6 uppercase tracking-wider">
              FOLLOW US ON
            </h3>
            <div className="space-y-3 max-w-xs">
              <a
                href="#"
                className="bg-gray-800 hover:bg-yellow-400 hover:text-black transition-colors px-4 py-2 rounded flex items-center space-x-3 w-36"
              >
                <FaYoutube size={16} />
                <span className="text-sm">Youtube</span>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-yellow-400 hover:text-black transition-colors px-4 py-2 rounded flex items-center space-x-3 w-36"
              >
                <FaInstagram size={16} />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-yellow-400 hover:text-black transition-colors px-4 py-2 rounded flex items-center space-x-3 w-36"
              >
                <FaLinkedin size={16} />
                <span className="text-sm">Linkedin</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium text-white mb-6 uppercase tracking-wider">
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
                <label htmlFor="privacy" className="text-xs text-white leading-relaxed">
                  By checking this box, I agree to allow Nearhive to store and
                  process the personal data submitted above to provide me
                  content consistent with the{" "}
                  <a href="#" className="text-yellow-400 hover:underline">
                    Nearhive Privacy Policy
                  </a>
                </label>
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-medium transition-colors flex items-center space-x-2">
                <span>SUBMIT</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <p className="text-xs uppercase tracking-wider">
            ©ALL RIGHTS RESERVED 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;