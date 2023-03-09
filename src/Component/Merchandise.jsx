import React from 'react'
import Image from 'next/legacy/image'

function Merchandise() {
  return (
      <div id='merchandise'>
          <div className='hidden md:block'>
              <div className=' flex flex-col my-28 mx-32 rounded-md text-white items-center '>
                  <h1 className='text-[40px] mb-28 font-oswald tracking-light'>MERCHANDISE</h1>
                  <div className='relative w-full h-[350px]'>
                      <Image layout='fill' objectFit="cover" src="/assets/Images/TV/TV.png" className='drop-shadow-red-1' alt="" />
                  </div>

              </div>
          </div>

          <div className='md:hidden'>
              <div className=' flex flex-col my-28 text-white items-center '>
                  <h1 className='text-2xl mb-20 font-oswald tracking-light'>MERCHANDISE</h1>
                  <img src="/assets/Images/TV/ComingSoon.png" alt="" />
              </div>
          </div>

      </div>
  )
}

export default Merchandise
