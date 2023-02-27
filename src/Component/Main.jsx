import React from 'react'
import { motion } from 'framer-motion';

function Main() {
  return (

    <div className='relative  bg-black'>
      <div className='py-20 md:py-28 lg:py-40 px-10 md:px-28 lg:px-40 text-center bg-black text-white'>
        <h1 className='text-xl md:text-4xl  lg:text-5xl font-bold'>FILMS , TV , PODCAST</h1>
        <h2 className='text-lg md:text-3xl lg:text-4xl mt-4 md:mt-8 font-bold'>Boys Played Well.</h2>
      </div>
      <div className='-mt-60 fixed'>
        <div class="flex flex-col bg-transparent text-slate-200 w-24">
          <div class="nav-link-container mt-2 pb-1 border-b-2 border-white ">
            <a href="#movie" class="nav-link text-lg pl-4 hover:text-white">Films</a>
          </div>
          <div class="nav-link-container mt-2 pb-1 border-b-2 border-white">
            <a href="#tv" class="nav-link text-lg pl-4 hover:text-white">TV</a>
          </div>
          <div class="nav-link-container mt-2 pb-1 border-b-2 border-white ">
            <a href="#podcast" class="nav-link text-lg pl-4 hover:text-white">Podcast</a>
          </div>
          <div class="nav-link-container mt-2 pb-1 border-b-2 border-white ">
            <a href="#about" class="nav-link text-lg pl-4 hover:text-white">About</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
