import React from 'react'
import Image from 'next/legacy/image'

function Merchandise() {
  return (
      <div id='merchandise'>
          <div className=''>
              <div className=' flex flex-col my-28  rounded-md  items-center '>
                  <h1 className='text-2xl md:text-[40px]  font-oswald tracking-light'>TV</h1>
                  <div className='px-4 md:px-8 lg:px-28 mt-20 lg:mt-40 w-full'>
                      <div className=''>
                          <div className=' relative flex items-center justify-center w-full bg-black  mx-auto h-[250px] md:h-[350px]  drop-shadow-green-1 ' style={{ maxWidth: '1180px' }}>
                              <h1 className='text-center bg-gradient-to-b from-[#4C8968] to-[#0C0C0F] bg-clip-text text-transparent text-xl lg:text-4xl tracking-[.7em]'>Coming soon</h1>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Merchandise
