import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

function About() {

    const fadeIn = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 4
            }
        }
    }
  return (
      <div id='about '>
          
              <div className='flex flex-col my-28 items-center text-white'>
              <h1 className='text-2xl font-oswald md:text-[40px] tracking-light'>ABOUT</h1>
              <div className='hidden md:block mx-8 lg:mx-28 mt-28 '>
              <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className={`w-full  flex relative  mt-10 lg:hover:scale-110 ease-in-out mx-auto duration-300 bg-black rounded-lg bg-right drop-shadow-About text-white bg-no-repeat py-7 px-7`} style={{ maxWidth: '1180px' }}>
            <div className='w-[284px] '>
                <Image width={284} height={301} src="/assets/Images/About/About.png" alt="" />
            </div>
            <div className='w-3/5 ml-16 my-auto'>
                      <h1 className='text-xl font-oswald '>FOUNDER : Tanishq Kaura</h1>
                      <p className='text-sm mt-8'>Boys Played Well is a production company focused on non-fiction content.
                      Founded by Tanishq Kaura, a New York University-Tisch School of the Arts graduate.</p>
                          
            </div>
          </motion.div>
          </div>
          </div>
          <div className='md:hidden'>
              <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className={`bg-black h-[250px] rounded-md  w-[350px] mt-14 mb-10 mx-auto pt-3 text-white pl-3 drop-shadow-About`}>
                <div className='flex flex-col'>
                <div className='flex'>
                      <div className=' '>
                          <Image width={140} height={150} src="/assets/Images/About/About.png" alt="" />
                      </div>
                      <h1 className='text-base font-oswald ml-4 my-auto'>FOUNDER : Tanishq Kaura</h1>
                </div>
                      <p className='text-[10px] mt-4'>Boys Played Well is a production company focused on non-fiction content.
                          Founded by Tanishq Kaura, a New York University-Tisch School of the Arts graduate.</p>
                </div>

              </motion.div>

          </div>
    </div>
  )
}

export default About
