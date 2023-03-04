import React from 'react'
import { motion } from 'framer-motion';

function Main() {
  return (

    <div className='relative  bg-black text-white mt-10 pb-10'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-extrabold text-[160px]  leading-none' >BPW</h1>
        <h6 className='mx-auto mt-2 font-light text-xl tracking-[.7em]'>Boys Played Well</h6>
        <div className='flex w-full mt-20 items-center'>
          <div className='flex-1 h-[1px] bg-white'></div>
          <div>
            <h1 className='tracking-[.25em] text-4xl mx-8'>FILMS | TV | PODCAST</h1>
          </div>
          <div className='flex-1 h-[1px] bg-white'></div>
        </div>
        <button className='tracking-[.25em] rounded-md mt-20 w-44 h-11 ' style={{
          border: '1px solid transparent',
          borderRadius: '8px',
          borderImage: 'linear-gradient(to right, #ED5266, #FF843F) 1',  
        }}>
          Support
        </button>
        <ul className="flex flex-col items-center">
          <li className='h-3 w-3 border border-white rounded-md mt-8'></li>
          <li className='h-2.5 w-2.5 border border-white border-opacity-60 rounded-[5px] mt-8 '></li>
          <li className='h-2 w-2 border border-white border-opacity-30 rounded-[4px] mt-8'></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Main
