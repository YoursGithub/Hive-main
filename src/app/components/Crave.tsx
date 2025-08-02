import Image from "next/image";
import React from "react";

function Crave() {
  return (
    <>
      <section className="container hidden lg:block">
        <div className="flex lg:gap-56">
          <div className="lg:mt-40 mt-0">
            <Image
              src="/assets/sidemob.png"
              alt="icon1"
              width={440}
              height={440}
              className=""
            />
          </div>

          <div className="mt-96 flex ml-44 2xl:ml-96">
            <h2 className="text-black font-extrabold text-2xl whitespace-nowrap">
              Scroll posts like
            </h2>
            <div className="">
              <Image
                src="/assets/insta.png"
                alt=""
                width={150}
                height={40}
                className="mt-[-55px] absolute"
              />
            </div>
            <br />

            <div>
              <h2 className="text-black ml-[-70px] font-extrabold text-2xl whitespace-nowrap text-right">
                and order <br /> whichever item you crave for
              </h2>

              <div className="">
                <div className="bg-[#F1B729] w-[450px] h-36 text-center text-black ml-[-180px] mt-6 p-2 max-w-screen absolute">
                  <p className="text-sm">
                    Our Curated Baskets make your work easy and affordable,
                    combining top talent and the right tools to speed up your
                    projects. Our Curated Baskets make your work easy and
                    affordable, combining top talent and the right tools to
                    speed up your projects. Our Curated Baskets make your work
                    easy and affordable, combining top talent and the right
                    tools to speed up your projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden">
        <div>
          <div className="mt-36 text-left px-4 lg:px-0">
            <h2 className="text-black font-extrabold text-2xl">
              Scroll posts like{" "}
              <div className="">
                <Image
                  src="/assets/insta.png"
                  alt=""
                  width={150}
                  height={40}
                  className="absolute mt-[-87px] ml-44"
                />
              </div>
            </h2>
            <h2 className="text-black font-extrabold text-2xl mt-2">
              and order whichever item you crave for
            </h2>
          </div>

          <div className="w-full px-4 mt-6">
            <div className="bg-[#F1B729] max-w-[450px] w-full h-auto text-center text-black p-4 mx-auto">
              <p className="text-sm">
                Our Curated Baskets make your work easy and affordable,
                combining top talent and the right tools to speed up your
                projects. Our Curated Baskets make your work easy and
                affordable, combining top talent and the right tools to speed up
                your projects. Our Curated Baskets make your work easy and
                affordable, combining top talent and the right tools to speed up
                your projects.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <Image
              src="/assets/sidemob.png"
              alt="icon1"
              width={440}
              height={440}
              className=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Crave;
