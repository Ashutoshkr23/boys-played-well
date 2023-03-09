import React from 'react'
import Image from 'next/legacy/image'

function Tv() {
  return (
    <div id='tv'>
      <div className='hidden md:block'>
        <div className=' flex flex-col my-28 mx-8 lg:mx-28 rounded-md text-white items-center '>
          <h1 className='text-[40px] mb-28 font-oswald tracking-light'>TV</h1>
          <div className='relative w-full h-[350px] drop-shadow-green-1'>
            <Image layout='fill' objectFit="cover" src="/assets/Images/TV/TV.png"  alt="" />
          </div>

        </div>
      </div>

      <div className='md:hidden'>
        <div className=' flex flex-col my-28 text-white items-center '>
          <h1 className='text-2xl mb-20 font-oswald tracking-light'>TV</h1>
          <div className="drop-shadow-green-1">
          <Image height={250} width={353}  src="/assets/Images/TV/ComingSoon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tv
