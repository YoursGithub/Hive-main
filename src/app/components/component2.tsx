import React from "react";
import Image from "next/image";

const component2 = () => {
  return (
    <>
      <section className="mt-20 flex justify-center container">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="mt-20">
            <h2 className="text-xl lg:text-3xl p-3 text-center lg:text-left md:m-0 text-black font-extrabold relative">
              Explore <span className="parallelogram-highlight">cuisines</span>{" "}
              and learn some great <br className="hidden md:block" />
              facts about them
              <style jsx>{`
                .parallelogram-highlight {
                  position: relative;
                  display: inline-block;
                  padding: 0 0.25rem;
                  z-index: 1;
                  color: black;
                }

                .parallelogram-highlight::before {
                  content: "";
                  position: absolute;
                  inset: 0;
                  background-color: #facc15; /* Tailwind yellow-400 */
                  transform: skew(-20deg);
                  z-index: -1;
                  border-radius: 2px;
                }
              `}</style>
            </h2>

            <div className="flex flex-col md:flex-row gap-10 md:gap-40 mt-10 items-center md:items-start">
              <div className="px-4 sm:px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-20 lg:mb-0">
  <div className="flex items-center gap-3">
    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
      <Image
        src="/assets/image1.png"
        alt="Indian Food"
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h3 className="text-base font-semibold text-black">Indian</h3>
      <p className="text-xs text-[#AEAEAE] whitespace-nowrap mt-1">
        Biriyani, Naan, Roti
      </p>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
      <Image
        src="/assets/pngwing.com (5).png"
        alt="Japanese Food"
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h3 className="text-base font-semibold text-black">Japanese</h3>
      <p className="text-xs text-[#AEAEAE] whitespace-nowrap mt-1">
        Noodles, Dumplings
      </p>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
      <Image
        src="/assets/pngwing.com (1).png"
        alt="Chinese Food"
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h3 className="text-base font-semibold text-black">Chinese</h3>
      <p className="text-xs text-[#AEAEAE] whitespace-nowrap mt-1">
        Noodles, Dumplings
      </p>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
      <Image
        src="/assets/pngwing.com (2).png"
        alt="Thai Food"
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h3 className="text-base font-semibold text-black">Thai</h3>
      <p className="text-xs text-[#AEAEAE] whitespace-nowrap mt-1">
        Thukpa, Sea Salad
      </p>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
      <Image
        src="/assets/pngwing.com (6).png"
        alt="Italian Food"
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h3 className="text-base font-semibold text-black">Italian</h3>
      <p className="text-xs text-[#AEAEAE] whitespace-nowrap mt-1">
        Pasta, Pizza, Lasagna
      </p>
    </div>
  </div>

  <div className="flex items-center gap-3">
    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
      <Image
        src="/assets/pngwing.com (9).png"
        alt="American Food"
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h3 className="text-base font-semibold text-black">American</h3>
      <p className="text-xs text-[#AEAEAE] whitespace-nowrap mt-1">
        Burger, Fries, Steak
      </p>
    </div>
  </div>
  </div>
</div>


              <div className="relative mt-36 md:mt-0">
                <div>
                  <Image
                    src="/assets/iPhone 16 Pro.png"
                    alt="icon3"
                    width={800}
                    height={800}
                    className="mt-[-130px] w-[250px] md:mt-[-130px] mx-auto"
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
