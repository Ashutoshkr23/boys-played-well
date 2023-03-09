import React from 'react'

function Tv() {
  return (
    <div id='tv'>
      <div className='hidden md:block'>
        <div className=' flex flex-col my-28 mx-32 rounded-md text-white items-center '>
          <h1 className='text-[40px] mb-28 font-oswald tracking-light'>TV</h1>
          <img src="/assets/Images/TV/TV.png" className='drop-shadow-green-2' alt="" />
        </div>
      </div>

      <div className='md:hidden'>
        <div className=' flex flex-col my-28 text-white items-center '>
          <h1 className='text-2xl mb-20 font-oswald tracking-light'>TV</h1>
          <img src="/assets/Images/TV/ComingSoon.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Tv
