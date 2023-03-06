import React from 'react'

function Tv() {
  return (
    <div>
      <div className='hidden md:block'>
        <div className=' flex flex-col my-28 text-white items-center '>
          <h1 className='text-[40px] mb-28'>TV</h1>
          <img src="/assets/Images/TV/TV.png" alt="" />
        </div>
      </div>

      <div className='md:hidden'>
        <div className=' flex flex-col my-28 text-white items-center '>
          <h1 className='text-2xl mb-20'>TV</h1>
          <img src="/assets/Images/TV/ComingSoon.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Tv
