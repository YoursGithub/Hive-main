import Image from 'next/image'
import React from 'react'

function Hiveblog() {
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row justify-center items-center mt-20 gap-10'>
        <div className='text-black text-center md:text-left'>
          <h2 className='font-extrabold text-2xl mb-5'>Pastoral Care</h2>
          <p className='text-[#313131] text-sm'>
            Our Curated Baskets make your work easy and affordable, <br /> combining top talent and the right.
          </p>
          <p className='text-[#313131] text-sm mt-3'>
            Our Curated Baskets make your work easy and affordable, <br /> combining top talent and the right.
          </p>
        </div>

        <div>
          <Image src="/assets/photo.png" alt="" width={500} height={500} className='p-4 md:p-0' />
        </div>
      </div>
    </>
  )
}

export default Hiveblog
