import React from 'react'
import { motion , AnimatePresence } from 'framer-motion';

function Main() {
  const itemVariants = {
    visible: { scale: 0.8, opacity: 1 },
    hidden: { scale: 0.6, opacity: 0 },
  };

  const itemTransition = { duration: 0.5 };

  return (

    <div className='relative  bg-black text-white mt-10 pb-10'>
      {/*For Tablets And Laptop*/}
      <div className='hidden md:block'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-extrabold text-[160px]  leading-none' >BPW</h1>
          <h6 className='mx-auto mt-2 font-light text-xl tracking-[.7em]'>Boys Played Well</h6>
          <div className='flex w-full mt-20 items-center'>
            <div className='flex-1 h-[1px] bg-white'></div>
            <div>
              <h1 className='tracking-[.25em] text-4xl mx-8'><span className='hover:text-[#FF843F] hover:drop-shadow-text'>FILMS </span>|<span className='hover:text-[#FF843F] hover:drop-shadow-text'> TV </span>|<span className='hover:text-[#FF843F] hover:drop-shadow-text'> PODCAST</span></h1>
            </div>
            <div className='flex-1 h-[1px] bg-white'></div>
          </div>
          <button className='tracking-[.25em]  mt-20 w-44 h-11 hover:bg-gradient-to-r from-[#ED5266] to-[#FF843F] ' style={{
            border: '1px solid transparent',
            borderRadius: '0px',
            borderImage: 'linear-gradient(to right, #ED5266, #FF843F) 1',
          }}>
            Support
          </button>
          <ul className="flex flex-col items-center">
            <AnimatePresence>
              <motion.li
                key="item1"
                className="h-3 w-3 border border-white rounded-md mt-8"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ ...itemTransition, delay: 0 }}
              />
            </AnimatePresence>
            <AnimatePresence>
              <motion.li
                key="item2"
                className="h-2.5 w-2.5 border border-white border-opacity-60 rounded-[5px] mt-8 "
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ ...itemTransition, delay: 0.5 }}
              />
            </AnimatePresence>
            <AnimatePresence>
              <motion.li
                key="item3"
                className="h-2 w-2 border border-white border-opacity-30 rounded-[4px] mt-8"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ ...itemTransition, delay: 1 }}
              />
            </AnimatePresence>
          </ul>
        </div>
      </div>
      {/*For Mobiles*/}
      <div className='md:hidden'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-extrabold text-[120px]  leading-none' >BPW</h1>
          <h6 className='mx-auto mt-2 font-light text-base tracking-[.7em]'>Boys Played Well</h6>
          <h3 className='text-2xl tracking-[.25em] mt-28'>FILMS</h3>
          <div className='flex w-full mt-10 items-center'>
            <div className='flex-1 h-[1px] bg-white'></div>
            <div>
              <h1 className='tracking-[.25em] text-2xl mx-8'> TV </h1>
            </div>
            <div className='flex-1 h-[1px] bg-white'></div>
          </div>
          <h3 className='text-2xl tracking-[.25em] mt-10'>PODCAST</h3>
          <button className='tracking-[.25em] rounded-md mt-20 w-40 h-11 ' style={{
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
      
    </div>
  )
}

export default Main
