import React from 'react'
import {ComingSoon} from '../components'

function Merchandise() {
  return (
      <div id='merchandise'>
              <div className=' flex flex-col my-28  rounded-md  items-center '>
                  <h1 className='text-2xl md:text-[40px]  font-oswald tracking-light'>MERCHANDISE</h1>
              </div>
          <ComingSoon />
      </div>
  )
}

export default Merchandise
