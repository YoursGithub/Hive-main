import Image from "next/image";
import React from "react";

function HiveCreator() {
  return (
    <>
      <section className="hidden md:block">
        <div className="text-center">
          <h2 className="text-black text-2xl font-extrabold">
            Become Hive Creator and earn rewards just by <br /> uploading
          </h2>
        </div>

        <div className="relative">
          <div className="bg-black mb-10 mt-64 text-white py-16 relative overflow-hidden">
            <div className="container mx-auto relative z-20 flex items-center justify-between">
              <div className="ml-10 space-y-5">
                <h3 className="text-xl font-semibold">
                  Join as a creator and Earn!
                </h3>
                <p className="text-sm  leading-relaxed">
                  Join as a NearHive creator and earn credits, offers, goodies{" "}
                  <br />
                  and many more by contributing to NearHive community.
                </p>
                <button className="bg-[#F1B729] text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
                  Join
                </button>
              </div>
            </div>

            <Image
              src="/assets/money.png"
              width={250}
              height={250}
              alt="Rewards"
              className="absolute right-20 top-14 z-0 pointer-events-none"
            />
          </div>

          <div className="absolute w-full top-[-270px] flex justify-center z-10 pointer-events-none">
            <Image
              src="/assets/iPhone 16.png"
              width={800}
              height={800}
              alt="Mobile"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="lg:hidden relative bg-white">
        <div className="text-center px-6 pt-10 mt-20">
          <h2 className="text-black text-2xl font-extrabold leading-snug">
            Become Hive Creator and earn rewards just by uploading
          </h2>
        </div>

        <div className="absolute w-[700px] flex justify-center ml-[-160px] items-center">
          <Image
            src="/assets/iPhone 16.png"
            width={700}
            height={700}
            alt="Mobile"
            className="mx-auto mt-[-30px]"
          />
        </div>

        <div className="bg-black text-white mt-[300px] px-6 h-[700px] flex flex-col justify-center text-center">
          <h3 className="text-3xl font-semibold mb-2 mt-96">
            Join as a creator and Earn!
          </h3>
          <p className="text-sm leading-relaxed mb-4 px-4">
            Join as a NearHive creator and earn credits, offers, goodies and
            many more by contributing to NearHive community.
          </p>
          <button className="bg-[#F1B729] text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors mb-6">
            Join
          </button>

          
        <div className="flex justify-center gap-6 mt-10 mb-60">
            <Image
              src="/assets/money.png"
              width={250}
              height={250}
              alt="Rewards"
              className=" z-0 pointer-events-none"
            />
          </div>
        </div>

      </section>
    </>
  );
}

export default HiveCreator;
