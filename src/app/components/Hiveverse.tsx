import Image from 'next/image'
import React from 'react'

function Hiveverse() {
  return (
    <>
        <section className="mt-20">
                <div className="text-center m-10">
                  <h2 className="text-black text-3xl md:text-2xl font-extrabold">
                    Introducing HiveVerse
                  </h2>
                  <p className="text-black mt-3 text-sm">
                    Creating an ecosystem of Hive services for the people of India, not
                    just focusing on tier 1&2 cities, <br /> but to cater the actual
                    India which compromises of lower tier cities
                  </p>
                </div>
        
                <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-8 mt-10 mb-20 px-8 sm:px-6 lg:px-20
">
                  <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                    <Image
                      src="/assets/Poila Boishak (6) 3.png"
                      alt="DropHive"
                      width={90}
                      height={90}
                      className=" mb-4 mx-auto md:mx-0 md:ml-0"
                    />
                    <h3 className="text-2xl font-semibold text-black mb-1 mt-20">
                      DropHive
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Hyperlocal parcel drop & pickup service
                    </p>
                    <button className="bg-[#F1B729] text-black mt-2 px-8 py-3 textcenter hover:bg-yellow-500 transition-colors">
                      Coming Soon
                    </button>
                  </div>
        
                  <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                    <Image
                      src="/assets/Poila Boishak (5) 2.png"
                      alt="ShopHive"
                      width={90}
                      height={90}
                      className=" mb-4 mx-auto md:mx-0 md:ml-0"
                    />
                    <h3 className="text-2xl font-semibold text-black mb-1 mt-20">
                      ShopHive
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Hyperlocal parcel drop & pickup service
                    </p>
                    <button className="bg-[#F1B729] text-black mt-2 px-8 py-3 textcenter hover:bg-yellow-500 transition-colors">
                      Coming Soon
                    </button>
                  </div>
        
                  <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                    <Image
                      src="/assets/Poila Boishak (4) 2.png"
                      alt="MediHive"
                      width={90}
                      height={90}
                      className="mb-4 mx-auto md:mx-0 md:ml-0"
                    />
        
                    <h3 className="text-2xl font-semibold text-black mb-1 mt-20">
                      MediHive
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Hyperlocal parcel drop & pickup service
                    </p>
                    <button className="bg-[#F1B729] text-black mt-2 px-8 py-3 textcenter hover:bg-yellow-500 transition-colors">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </section>
    </>
  )
}

export default Hiveverse