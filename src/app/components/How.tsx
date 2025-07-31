import Image from 'next/image'
import React from 'react'

function How() {
  return (
    <>
        <section className="hidden lg:block w-full px-6 md:px-20 py-14 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[22px] md:text-[24px] font-bold text-black max-w-[450px] leading-snug">
            Not Just Another Delivery App, This one&apos;s Interesting
          </h2>

          <Image
            src="/assets/line.png"
            width={750}
            height={300}
            alt="Line"
            className="mx-auto left-20"
          />

          <div className="relative h-[160px] w-full">
            <div className="absolute right-20 mt-[-110px] text-black font-semibold text-3xl">
              How?
            </div>
          </div>
        </div>
      </section>


      <section className='lg:hidden'>
        <div className="mx-auto">
          <h2 className="text-[22px] text-center mt-10 md:text-[24px] font-bold text-black max-w-[450px] leading-snug">
            Not Just Another Delivery App, This one&apos;s Interesting
          </h2>

          <Image
            src="/assets/Vector 717.png"
            width={120}
            height={120}
            alt="Line"
            className="mx-auto mt-6"
          />

          <div className="">
            <div className="mt-10 mb-20 text-center text-black font-semibold text-3xl">
              How?
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default How