import React , {useState} from 'react'
import Image from 'next/image'
import {Support} from '../components'
import { motion , AnimatePresence, easeInOut } from 'framer-motion';

function Main() {
  const itemVariants = {
    initial: { scale: 1, opacity: 1 , y: 5},
    animate: { scale: 0.5, opacity: 0, y: 20 },
    exit: { scale: 0.5, opacity: 0 , y: 40},
  };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
      setIsOpen(!isOpen);
    };

    const handleClickOutside = () => {
      setIsOpen(false);
    };


  const itemTransition = { duration: 0.5 };

  return (

    <div className='relative  bg-black mt-10 pb-10'>
      {/*For Tablets And Laptop*/}
      <div className='hidden md:block' >
        <div className='mt-28 fixed z-50 hidden lg:block'>
          <div className="flex flex-col bg-transparent font-oswald tracking-light  w-36">
            <div className="nav-link-container text-[#808080] hover:text-[#FF843F] border-[#808080] hover:border-[#FF843F] py-4 pl-4    border-b">
              <a href="#films" className="nav-link ">FILMS</a>
            </div>
            <div className="nav-link-container  pl-4 py-4 text-[#808080] hover:text-[#FF843F] border-[#808080] hover:border-[#FF843F] border-b ">
              <a href="#tv" className="nav-link ">TV</a>
            </div>
            <div className="nav-link-container  pl-4 py-4 text-[#808080] hover:text-[#FF843F] border-[#808080] hover:border-[#FF843F] border-b  ">
              <a href="#podcast" className="nav-link ">PODCAST</a>
            </div>
            <div className="nav-link-container  pl-4 py-4 text-[#808080] hover:text-[#FF843F] border-[#808080] hover:border-[#FF843F] border-b  ">
              <a href="#merchandise" className="nav-link ">MERCHANDISE</a>
            </div>
            <div className="nav-link-container  pl-4 py-4 text-[#808080] hover:text-[#FF843F] border-[#808080] hover:border-[#FF843F] border-b  ">
              <a href="#about" className="nav-link ">ABOUT</a>
            </div>
          </div>
          </div>
        <div className='flex flex-col justify-center items-center'>
          <Image width={425} height={275} className="mt-32"  src="/assets/Images/Main/logo.png" alt="logo"  />
          <div className='flex w-full mt-[77px] items-center'>
            <div className='flex-1 h-[1px] bg-white'></div>
            <div>
              <a href=""></a>
              <h1 className='tracking-light text-4xl '><span className='hover:text-[#FF843F] hover:drop-shadow-text mx-8 xl:mr-12 xl:ml-24 font-oswald'><a href="#films">FILMS</a> </span>|<span className='hover:text-[#FF843F] mx-9 xl:mx-12 hover:drop-shadow-text font-oswald'><a href="#tv"> TV </a> </span>|<span className='hover:text-[#FF843F] hover:drop-shadow-text mx-8 xl:ml-12 xl:mr-24 font-oswald'><a href="#podcast"> PODCAST </a></span></h1>
            </div>
            <div className='flex-1 h-[1px] bg-white'></div>
          </div>
          <button onClick={toggleDrawer} className='tracking-[.25em] rounded mt-20 w-44 h-11 bg-gradient-to-r from-[#ED5266] to-[#FF843F] '>
            <div className='bg-black w-[174px] h-[42px] hover:bg-gradient-to-r from-[#ED5266] to-[#FF843F] m-auto rounded font-extralight py-2'>Support </div>
          </button>
          <div className='lg:hidden'>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "800px" }}
                  exit={{ height: 0 }}
                  style={{ overflow: "hidden" }}
                >
                  <Support />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className='hidden lg:block'>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "400px" }}
                  exit={{ height: 0 }}
                  style={{ overflow: "hidden" }}
                >
                  <Support />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <ul className="flex flex-col items-center">
            <AnimatePresence>
              <motion.li
                key="item1"
                className="h-3 w-3 border border-white rounded-md mt-8 bg-white"
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...itemTransition, duration:.3, delay: 0 ,repeat: Infinity, repeatDelay:.9 ,  easeInOut }}
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
                transition={{ ...itemTransition, duration: .3, delay: .3, repeat: Infinity, repeatDelay: .9, easeInOut }}
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
                transition={{ ...itemTransition, duration: .3, delay: .6, repeat: Infinity, repeatDelay: .9, easeInOut }}
              />
            </AnimatePresence>
          </ul>
        </div>
      </div>
      {/*For Mobiles*/}
      <div className='md:hidden'>
        <div className='flex flex-col justify-center items-center'>
          <Image width={335} height={275} className="mt-32 mx-8"  src="/assets/Images/Main/logo.png" alt="logo"  />
          <h3 className='text-2xl tracking-light mt-28 font-oswald'>FILMS</h3>
          <div className='flex w-full mt-10 items-center'>
            <div className='flex-1 h-[1px] bg-white'></div>
            <div>
              <h1 className='tracking-light text-2xl mx-8 font-oswald'> TV </h1>
            </div>
            <div className='flex-1 h-[1px] bg-white'></div>
          </div>
          <h3 className='text-2xl tracking-light mt-10 font-oswald'>PODCAST</h3>
          <button onClick={toggleDrawer} className='tracking-[.25em] rounded mt-20 w-44 h-11 bg-gradient-to-r from-[#ED5266] to-[#FF843F] '>
            <div className='bg-black w-[174px] h-[42px] hover:bg-gradient-to-r from-[#ED5266] to-[#FF843F] m-auto rounded font-light py-2'>Support </div>
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "1620px" }}
                exit={{ height: 0 }}
                style={{ overflow: "hidden" }}
              >
                <Support />
              </motion.div>
            )}
          </AnimatePresence>

          <ul className="flex flex-col items-center">
            <AnimatePresence>
              <motion.li
                key="item1"
                className="h-3 w-3 border border-white rounded-md mt-8 bg-white"
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...itemTransition, duration: .3, delay: 0, repeat: Infinity, repeatDelay: .9, easeInOut }}
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
                transition={{ ...itemTransition, duration: .3, delay: .3, repeat: Infinity, repeatDelay: .9, easeInOut }}
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
                transition={{ ...itemTransition, duration: .3, delay: .6, repeat: Infinity, repeatDelay: .9, easeInOut }}
              />
            </AnimatePresence>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Main
