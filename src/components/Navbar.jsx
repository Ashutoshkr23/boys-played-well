
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { exit } from 'process';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setDarkMode] = React.useState(true)
  const [date, setDate] = useState();

  function getYear() {
    setDate(new Date().getFullYear());
  }

  useEffect(() => {
    getYear();
  }, [])

  const fadeIn = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
    }
  }

  return (
    <div className=''>
      <div className='lg:hidden '>
        <nav className="bg-dark fixed w-full z-40 top-0 left-0">
          <div className=" w-full flex justify-end">
            <div className="flex justify-end ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button">
                <div className={`relative border-none mt-6 mr-6 z-50  bg-transparent`}>
                  <div className='  h-3.5 w-5'>
                    <div
                      className={` h-0.5 bg-white w-5 origin-top-left ease-in duration-200 rounded-md ${isOpen ? 'rotate-45 translate-x-px' : 'rotate-0'}`}
                    />
                    <div
                      className={` h-0.5 w-5 bg-white ease-in duration-200 rounded-md mt-1 ${isOpen ? 'hidden' : 'block'}`}
                    />
                    <div
                      className={` h-0.5 w-5 bg-white ease-in duration-200  rounded-md mt-1  ${isOpen ? '-rotate-45 -translate-x-0.5 ' : 'rotate-0 '}`}
                    />
                  </div>
                </div>
              </button>
              {isOpen && (
                <AnimatePresence>
                  <motion.div variants={fadeIn} initial="initial" whileInView="animate" exit="exit" viewport={{ once: false }} className="absolute ease-in duration-800  w-full h-screen bg-black  border-white border-8 bg-dark shadow-lg z-10">
                    <div className='flex flex-col h-full  content-between'>
                      <div className="flex flex-col mx-auto mt-20 text-center font-oswald tracking-light w-10/12 z-20">
                        <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container  py-2  border-b-2 border-white ">
                          <a href="#films" className="nav-link ">FILMS</a>
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container py-4  border-b-2 border-white">
                          <a href="#tv" className="nav-link ">TV</a>
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container py-4  border-b-2 border-white ">
                          <a href="#podcast" className="nav-link ">PODCAST</a>
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container py-4  border-b-2 border-white ">
                          <a href="#merchandise" className="nav-link ">MERCHANDISE</a>
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container  border-b-2 border-white py-4   ">
                          <a href="#merchandise" className="nav-link ">ABOUT</a>
                        </div>
                      </div>
                      <div className='mt-auto'>
                        <div className="flex flex-row flex-wrap justify-center mx-auto my-4 min-w-0 items-center" style={{ height: '40px', borderRadius: '19px', margin: 'auto' }}>
                          <a href="#" target="blank" className="w-11 h-10">
                            <img className="w-6 h-6 hover:scale-125 inline-block" src={"assets/Images/footer/fb.svg"} alt="facebook icon" />
                          </a>
                          <a href="#" target="blank" className="w-11 h-10">
                            <img className="w-6 h-6 hover:scale-125 inline-block" src="assets/Images/footer/linkedin.ico" alt="linkedin icon" />
                          </a>
                          <a href="#" target="blank" className="w-11 h-10">
                            <img className="w-6 h-6 hover:scale-125 inline-block" src={"assets/Images/footer/instagram-light.ico"} alt="instagram icon" />
                          </a>
                        </div>
                        <div className="text-center pb-6 text-white text-base opacity-80 ">© {date} BY BOYS PLAYED WELL</div>
                      </div>

                    </div>

                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </nav>
      </div>

    </div>
  )
}

export default Navbar