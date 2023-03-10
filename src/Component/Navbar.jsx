import Image from 'next/image'
import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setDarkMode] = React.useState(true)
  return (
    <div className='text-white'>
      <div className='lg:hidden '>
        <nav className="bg-dark px-2  sm:px-4 py-2.5  fixed w-full z-50 top-0 left-0">
          <div className="container  flex justify-end  mx-auto">
            <div className="flex justify-end ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <div className={`relative btn border-none btn-circle bg-transparent ${isDarkMode ? 'hover:bg-bg-grey-light' : 'hover:bg-white'}`}>
                  <div className='  h-3.5 w-5'>
                    <div
                      className={` h-0.5 w-5 origin-top-left rounded-md ${isDarkMode ? 'bg-white' : 'bg-black'} ${isOpen ? 'rotate-45 translate-x-px' : 'rotate-0'}`}
                    />
                    <div
                      className={` h-0.5 w-5 rounded-md mt-1 ${isDarkMode ? 'bg-white' : 'bg-black'} ${isOpen ? 'hidden' : 'block'}`}
                    />
                    <div
                      className={` h-0.5 w-5  rounded-md mt-1 ${isDarkMode ? 'bg-white' : 'bg-black'} ${isOpen ? '-rotate-45 -translate-x-0.5 ' : 'rotate-0 '}`}
                    />
                  </div>
                </div>
              </button>
              {isOpen && (
                <div className="absolute w-full right-0 mt-12 bg-black bg-dark rounded-md shadow-lg z-10">
                  <div className="flex flex-col mx-auto text-center font-oswald tracking-light text-white w-44 z-20">
                    <div className="nav-link-container  opacity-70 hover:opacity-100  py-2  border-b-2 border-white ">
                      <a href="#films" className="nav-link ">FILMS</a>
                    </div>
                    <div className="nav-link-container opacity-70 hover:opacity-100  py-4  border-b-2 border-white">
                      <a href="#tv" className="nav-link ">TV</a>
                    </div>
                    <div className="nav-link-container opacity-70 hover:opacity-100  py-4  border-b-2 border-white ">
                      <a href="#podcast" className="nav-link ">PODCAST</a>
                    </div>
                    <div className="nav-link-container opacity-70 hover:opacity-100  py-4  border-b-2 border-white ">
                      <a href="#about" className="nav-link ">ABOUT</a>
                    </div>
                    <div className="nav-link-container  border-b-2 border-white opacity-70 hover:opacity-100  py-4   ">
                      <a href="#merchandise" className="nav-link ">MERCHANDISE</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>

    </div>
  )
}

export default Navbar
