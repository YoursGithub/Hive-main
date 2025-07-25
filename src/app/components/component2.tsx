import React from "react";
import Image from "next/image";

const component2 = () => {
  return (
    <>
      <section className="mt-20 flex justify-center container">
        <div className="flex">
          <div className="mt-20">
            <h2 className="text-3xl text-black font-extrabold">
              Explore cuisines and learn some great <br /> facts about them
            </h2>

            <div className="flex gap-72">
              <div>
                <div className="flex flex-wrap mt-10 gap-20">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                      <img
                        src="/assets/pngwing.com (9).png"
                        alt="Indian Food"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-black">
                        Indian
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Biriyani, Naan, Roti
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                      <img
                        src="/assets/pngwing.com (9).png"
                        alt="Indian Food"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-black">
                        Indian
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Biriyani, Naan, Roti
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                      <img
                        src="/assets/pngwing.com (9).png"
                        alt="Indian Food"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-black">
                        Indian
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Biriyani, Naan, Roti
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second part */}

                <div className="flex flex-wrap mt-3 gap-20">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                      <img
                        src="/assets/pngwing.com (9).png"
                        alt="Indian Food"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-black">
                        Indian
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Biriyani, Naan, Roti
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                      <img
                        src="/assets/pngwing.com (9).png"
                        alt="Indian Food"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-black">
                        Indian
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Biriyani, Naan, Roti
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                      <img
                        src="/assets/pngwing.com (9).png"
                        alt="Indian Food"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-black">
                        Indian
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Biriyani, Naan, Roti
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="">
                  <Image
                    src="/assets/iPhone 16 Pro.png"
                    alt="icon3"
                    width={200}
                    height={200}
                    className="mt-[-130px]"
                  />
                </div>

                <div className="absolute top-[-80px] left-[-40px] z-10">
                  <Image
                    src="/assets/Frame 625298.png"
                    alt="Indian"
                    width={140}
                    height={32}
                  />
                </div>

                <div className="absolute top-[60px] right-[-65px] z-10">
                  <Image
                    src="/assets/Frame 625299.png"
                    alt="Thai"
                    width={140}
                    height={35}
                  />
                </div>

                <div className="absolute top-[120px] left-[-40px] z-10">
                  <Image
                    src="/assets/Frame 625300.png"
                    alt="Chinese"
                    width={140}
                    height={33}
                  />
                </div>

                <div className="absolute bottom-[40px] right-[-40px] z-10">
                  <Image
                    src="/assets/Frame 625301.png"
                    alt="American"
                    width={140}
                    height={36}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default component2;
