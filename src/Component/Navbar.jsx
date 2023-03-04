import Image from 'next/image'
import React, {useState} from 'react'

function Navbar() {
  const [isDarkMode, setDarkMode] = React.useState(true)
  return (
    <div className='text-white px-28 py-5'>
      <div className='flex justify-between'>
        <div><h1 className='text-white text-2xl font-extrabold'>BPW</h1></div>
        <div>
          <ul className='flex gap-8 '>
            <li><a className='text-sm tracking-[.25em]'>FILM</a></li>
            <li><a className='text-sm tracking-[.25em]'>TV</a></li>
            <li><a className='text-sm tracking-[.25em]'>PODCAST</a></li>
            <li><a className='text-sm tracking-[.25em]'>ABOUT</a></li>
            <li><a className='text-sm tracking-[.25em]'>TEAM</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
