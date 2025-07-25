import React, { useState } from 'react'

const component1 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(2);

  const images = [
    '/assets/Rectangle 3697.png',
    '/assets/Rectangle 3697.png',
        '/assets/Rectangle 3697.png',

            '/assets/Rectangle 3697.png',

                '/assets/Rectangle 3697.png',


  ];

  return (
    <>
        <div className='text-center text-black'>
            <h2 className='text-2xl font-extrabold'>We are the World's First social experience<br /> Delivery App</h2>
            <p className='font-light text-sm mt-2'>Our Curated Baskets make your work easy and affordable, combining top talent and the right tools to speed up your projects.</p>
        </div>
        
        <div className='flex justify-center items-end mt-8 gap-2 overflow-hidden max-w-6xl mx-auto mb-10'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-all mt-[20px] duration-500 ease-out cursor-pointer overflow-hidden flex-shrink-0 ${
                hoveredIndex === index 
                  ? 'w-96 h-56 shadow-2xl z-10' 
                  : 'w-28 h-40 opacity-75'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(2)}
            >
              <img 
                src={image} 
                alt={`Carousel ${index + 1}`}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>
    </>
  )
}

export default component1