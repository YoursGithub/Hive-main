import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Form from "../components/Form";
import Footer from "../components/footer";

function Hivecreators() {
  return (
    <>
      <Navbar />

      <section>
        <div>
          <div className="bg-black gap-10 lg:mt-5">
            <div className="flex flex-col md:flex-row gap-36 justify-center p-10 items-center">
              <div className="text-white space-y-5 mt-7 lg:mt-10">
                <p className="text-xs">HIVE BLOG</p>
                <h2 className="text-3xl whitespace-nowrap font-extrabold">Join as a creator and earn!</h2>
                <p className="text-lg lg:text-sm lg:mt-0 mt-10">
                  Join as a NearHive creator and earn credits, offers, goodies
                  and many more by <br /> contributing to NearHive community.
                  Join as a NearHive creator and earn <br /> credits, offers,
                  goodies and many more by contributing to NearHive <br />{" "}
                  community.
                </p>
              </div>

              <div className="lg:mt-10 mt-0 hidden lg:block">
                <Image
                  src="/assets/money.png"
                  width={450}
                  height={450}
                  alt=""
                  className="ml-auto w-64"
                />
              </div>
              <div className="lg:mt-10 mt-0 lg:hidden">
                <Image
                  src="/assets/money.svg"
                  width={450}
                  height={450}
                  alt=""
                  className="ml-auto"
                />
              </div>
            </div>

            <div className="w-full h-px bg-gray-300 my-4 mt-20" />

            <div className="flex flex-col md:flex-row mt-[-10px] p-3 items-center md:m-0">
              <p className="text-xs text-center">
                GET EARLY ACCESS TO HIVE CREATOR COMMUNITY
              </p>
              <button className="bg-[#F1B729] mt-5 lg:mt-0 lg:ml-auto text-black font-semibold px-6 py-2 transition duration-200">
                Join
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <Form />
      </section>

      <section className="mt-10">
        <div className="text-center text-2xl m-3 lg:m-0 text-black font-extralight">
          <h2>
            So guys, let’s see what perks you’ll get if you become Hive <br />{" "}
            Creators and contribute to our Hive Community
          </h2>
        </div>

        <section className="px-4 py-10 space-y-10 max-w-4xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm md:flex justify-center items-center text-center md:text-left">
            <div className="md:w-2/3 mt-4 md:mt-0 md:pl-6 flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold text-gray-900">
                Earn Hive Points and Spend
              </h3>
              <p className="text-xs text-gray-600 mr-0 md:mr-20 mt-3">
                Join as a NearHive creator and earn credits, offers, goodies and
                many more by contributing to NearHive community. Join as a
                NearHive creator and earn credits, offers, goodies and many more
                by contributing to NearHive community.
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex justify-center">
              <Image src="/assets/image3.png" width={300} height={300} alt="" />
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-sm md:flex justify-between items-center text-center md:text-left">
            <div className="flex justify-center md:block">
              <Image src="/assets/image3.png" width={300} height={300} alt="" />
            </div>

            <div className="md:w-2/3 mt-4 md:mt-0 md:pl-6 flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold text-gray-900">
                Earn Hive Points and Spend
              </h3>
              <p className="text-xs text-gray-600 mt-3">
                Join as a NearHive creator and earn credits, offers, goodies and
                many more by contributing to NearHive community. Join as a
                NearHive creator and earn credits, offers, goodies and many more
                by contributing to NearHive community.
              </p>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default Hivecreators;
