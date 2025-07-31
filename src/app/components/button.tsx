import React, { useState } from 'react'

const Button = () => {

     const [activeLocation, setActiveLocation] = useState("Sribhumi");
    
      const locations = ["Dharmanagar", "Sribhumi", "Silchar"];


  return (
    <>
        <div className="flex gap-5 justify-center mt-4">
          {locations.map((location) => (
        <button
          key={location}
          onClick={() => setActiveLocation(location)}
          className={`mt-2 px-6 py-2 rounded-full text-center transition-colors duration-300 ease-in-out cursor-pointer border border-[#A7A7A7] 
            ${
              activeLocation === location
                ? "bg-yellow-500 text-black"
                : "bg-white text-[#949494] hover:bg-yellow-500 hover:text-black"
            }
          `}
        >
          {location}
        </button>
      ))}
        </div>
    </>
  )
}

export default Button