import React from 'react'
import Image from 'next/legacy/image'

function Merchandise() {
  return (
      <div id='merchandise'>
          <div className='hidden md:block'>
              <div className=' flex flex-col my-28 mx-8 lg:mx-28 rounded-md items-center '>
                  <h1 className='text-[40px] mb-28 font-oswald tracking-light'>MERCHANDISE</h1>
                  <div className='relative w-full h-[350px] rounded-md drop-shadow-red-1' style={{ maxWidth: '1180px' }}>
                      <Image layout='fill' objectFit="cover" src="/assets/Images/TV/TV.png" className='drop-shadow-red-1 rounded-md' alt="" />
                  </div>

              </div>
          </div>

          <div className='md:hidden'>
              <div className=' flex flex-col my-28  items-center '>
                  <h1 className='text-2xl mb-20 font-oswald tracking-light'>MERCHANDISE</h1>
                  <div className="drop-shadow-red-1 " >
                  <Image height={250} width={353} className="drop-shadow-red-1 " src="/assets/Images/TV/ComingSoon.png" alt="" />
                  </div>
              </div>
          </div>

      </div>
  )
}

export default Merchandise
