import Image from 'next/image'
import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';


function Navbar() {
  const [isDarkMode, setDarkMode] = React.useState(true)
  return (
    <div className='text-white px-28 py-5 hidden md:block'>
      <div className='flex justify-between'>
        <div><h1 className='text-white text-2xl font-extrabold'>BPW</h1></div>
        <div>
          <ul className='flex gap-8 '>
            <li><a href='#films' className='text-sm tracking-[.25em]'>FILM</a></li>
            <li><a href='#tv' className='text-sm tracking-[.25em]'>TV</a></li>
            <li><a href='#podcast' className='text-sm tracking-[.25em]'>PODCAST</a></li>
            <li><a href='#about' className='text-sm tracking-[.25em]'>ABOUT</a></li>
            <li><a href='#' className='text-sm tracking-[.25em]'>TEAM</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
