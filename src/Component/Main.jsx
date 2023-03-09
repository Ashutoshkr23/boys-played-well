import React from 'react'
import Image from 'next/image'
import { motion , AnimatePresence, easeInOut } from 'framer-motion';

function Main() {
  const itemVariants = {
    initial: { scale: 1, opacity: 1 , y: 5},
    animate: { scale: 0.5, opacity: 0, y: 20 },
    exit: { scale: 0.5, opacity: 0 , y: 40},
  };

  const itemTransition = { duration: 0.5 };

  return (

    <div className='relative  bg-black text-white mt-10 pb-10'>
      {/*For Tablets And Laptop*/}
      <div className='hidden md:block'>
        <div className='mt-40 fixed hidden lg:block'>
          <div class="flex flex-col bg-transparent font-oswald tracking-light text-white w-36">
            <div class="nav-link-container pl-4 py-2  border-b-2 border-white ">
              <a href="#films" class="nav-link ">FILMS</a>
            </div>
            <div class="nav-link-container pl-4 py-2  border-b-2 border-white">
              <a href="#tv" class="nav-link ">TV</a>
            </div>
            <div class="nav-link-container pl-4 py-2  border-b-2 border-white ">
              <a href="#podcast" class="nav-link ">PODCAST</a>
            </div>
            <div class="nav-link-container pl-4 py-2  border-b-2 border-white ">
              <a href="#about" class="nav-link ">ABOUT</a>
            </div>
            <div class="nav-link-container pl-4 py-2   ">
              <a href="#merchandise" class="nav-link ">MERCHANDISE</a>
            </div>
          </div>
          </div>
        <div className='flex flex-col justify-center items-center'>
          <Image width={425} height={275}  src="/assets/Images/Main/logo.png" alt="logo"  />
          <div className='flex w-full mt-20 items-center'>
            <div className='flex-1 h-[1px] bg-white'></div>
            <div>
              <a href=""></a>
              <h1 className='tracking-light text-4xl mx-8'><span className='hover:text-[#FF843F] hover:drop-shadow-text font-oswald'><a href="#films">FILMS</a> </span>|<span className='hover:text-[#FF843F] hover:drop-shadow-text font-oswald'><a href="#tv"> TV </a> </span>|<span className='hover:text-[#FF843F] hover:drop-shadow-text font-oswald'><a href="#podcast"> PODCAST </a></span></h1>
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
                className="h-3 w-3 border border-white rounded-md mt-8 bg-white"
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...itemTransition, duration:.2, delay: 0 ,repeat: Infinity, repeatDelay:.6 ,  easeInOut }}
              />
            </AnimatePresence>
            <AnimatePresence>
              <motion.li
                key="item2"
                className="h-2.5 w-2.5 bg-white border border-white border-opacity-60 rounded-[5px] mt-8 "
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...itemTransition, duration: .2, delay: .2, repeat: Infinity, repeatDelay: .6, easeInOut }}
              />
            </AnimatePresence>
            <AnimatePresence>
              <motion.li
                key="item3"
                className="h-2 w-2 bg-white border border-white border-opacity-30 rounded-[4px] mt-8"
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...itemTransition, duration: .2, delay: .4, repeat: Infinity, repeatDelay: .6, easeInOut }}
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
          <h3 className='text-2xl tracking-light mt-28 font-oswald'>FILMS</h3>
          <div className='flex w-full mt-10 items-center'>
            <div className='flex-1 h-[1px] bg-white'></div>
            <div>
              <h1 className='tracking-light text-2xl mx-8 font-oswald'> TV </h1>
            </div>
            <div className='flex-1 h-[1px] bg-white'></div>
          </div>
          <h3 className='text-2xl tracking-light mt-10 font-oswald'>PODCAST</h3>
          <button className='tracking-light rounded-md mt-20 w-40 h-11 ' style={{
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
