import React from 'react'
import { motion } from 'framer-motion';

function Main() {
  return (
    <div className='py-20 md:py-28 lg:py-40 px-10 md:px-28 lg:px-40 text-center bg-black text-white'>
          <h1 className='text-xl md:text-4xl  lg:text-5xl font-bold'>FILMS , TV , PODCAST</h1>
          <h2 className='text-lg md:text-3xl lg:text-4xl mt-4 md:mt-8 font-bold'>Boys Played Well.</h2>
          <h3 className='mt-4 md:mt-10 text-base md:text-xl lg:text-2xl'>We are the production company that brings your favorite stories to life on the big screen and in your headphones through our amazing movies and podcasts.</h3>
          <button className='h-10 btn w-40 mt-6 md:mt-10  rounded hover:bg-blue-1 hover:font-bold hover:border-none text-white border border-white my-auto'>Explore</button>
    </div>
  )
}

export default Main
