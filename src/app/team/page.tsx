import Navbar from "@/app/components/navbar";
import React from "react";
import Footer from "../components/footer";
import Team1 from "../components/Team1";
import Image from "next/image";

function page() {
  return (
    <>
      <Navbar />

      <section>
        <div className="text-center text-black mt-10">
          <h2 className="text-2xl font-regular">Meet The Gang Members</h2>
          <Image src="/assets/arrow.svg" alt="" className="mx-auto w-48" width={100} height={100} />
        </div>

        <div className="flex justify-center items-center gap-4 mt-4 flex-col lg:flex-row">
          <Image src="/assets/kunal.svg" width={100} height={100} alt="" className="w-36" />
          <div className="text-black text-center lg:text-left">
            <h3 className="text-3xl">Kunal Deb</h3>
            <p className="text-xs font-light">
              Director & Chief Executive Officer
            </p>
          </div>
        </div>

        <div className="flex justify-center text-black mt-5">
          <p>
            “If it’s not popular, it doesn’t exist”{" "}
            <span className="text-[#818181]">~Kunal Deb</span>
          </p>
        </div>

        <div className="text-center mt-5">
          <div className="flex justify-center">
            <Image src="/assets/line.svg" width={100} height={100} alt="" className="w-[600px]" />
          </div>
          <div className="flex justify-center mt-5 px-4">
            <p className="text-black text-xs text-center max-w-xl">
              During the Redemption period, token allocations thaw and
              become redeemable. Successfully-claimed token allocations during
              Glacier Drop and Scavenger Mine are initially frozen (locked).
              Allocations thaw (unlock) following a staggered schedule in four
              equally-spaced, 25% installments over the course of 360 days.
            </p>
          </div>

          <div className="mt-5">
            <Image src="/assets/arrow.svg" width={100} height={100} alt="" className="mx-auto w-48" />
          </div>
        </div>
      </section>

      <Team1 />

      <Footer />
    </>
  );
}

export default page;
