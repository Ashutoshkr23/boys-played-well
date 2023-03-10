import Image from 'next/image'
import React, {useState , useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion';


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

  return (
    <div className='text-white'>
      <div className='lg:hidden '>
        <nav className="bg-dark fixed w-full z-40 top-0 left-0">
          <div className="container  flex justify-end  mx-auto">
            <div className="flex justify-end ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button">
                <div className={`relative border-none mt-6 mr-6 z-50  bg-transparent`}>
                  <div className='  h-3.5 w-5'>
                    <div
                      className={` h-0.5 bg-white w-5 origin-top-left rounded-md ${isOpen ? 'rotate-45 translate-x-px' : 'rotate-0'}`}
                    />
                    <div
                      className={` h-0.5 w-5 bg-white rounded-md mt-1 ${isOpen ? 'hidden' : 'block'}`}
                    />
                    <div
                      className={` h-0.5 w-5 bg-white  rounded-md mt-1  ${isOpen ? '-rotate-45 -translate-x-0.5 ' : 'rotate-0 '}`}
                    />
                  </div>
                </div>
              </button>
              {isOpen && (
                <div className="absolute w-full h-screen bg-black  border-white border-8 bg-dark shadow-lg z-10">
                  <div className='flex flex-col h-full  content-between'>
                    <div className="flex flex-col mx-auto mt-20 text-center font-oswald tracking-light text-white w-10/12 z-20">
                      <div className="nav-link-container  py-2  border-b-2 border-white ">
                        <a href="#films" className="nav-link ">FILMS</a>
                      </div>
                      <div className="nav-link-container py-4  border-b-2 border-white">
                        <a href="#tv" className="nav-link ">TV</a>
                      </div>
                      <div className="nav-link-container py-4  border-b-2 border-white ">
                        <a href="#podcast" className="nav-link ">PODCAST</a>
                      </div>
                      <div className="nav-link-container py-4  border-b-2 border-white ">
                        <a href="#about" className="nav-link ">ABOUT</a>
                      </div>
                      <div className="nav-link-container  border-b-2 border-white py-4   ">
                        <a href="#merchandise" className="nav-link ">MERCHANDISE</a>
                      </div>
                    </div>
                    <div className="text-center mt-auto pb-6 text-white text-base opacity-80 ">© {date} BY BOYS PLAYED WELL</div>
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
