import Image from 'next/image'
import React, {useState} from 'react'

function Navbar() {
  const [isDarkMode, setDarkMode] = React.useState(true)
  return (
    <div className='bg-black text-white px-28 py-5'>
      <div className='flex justify-between'>
        <div><h1 className='text-white text-2xl font-extrabold'>BPW</h1></div>
        <div>
          <ul className='flex gap-8 '>
            <li><a className='text-base'>FILM</a></li>
            <li><a className='text-base'>TV</a></li>
            <li><a className='text-base'>PODCAST</a></li>
            <li><a className='text-base'>ABOUT</a></li>
            <li><a className='text-base'>TEAM</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
