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

            <div className='flex flex-col my-28 items-center '>
                <h1 className='text-2xl font-oswald md:text-[40px] tracking-light'>ABOUT</h1></div>
                
            {/*Laptop View*/}
            <div className='hidden md:block mx-8 lg:mx-28 mt-28'>
                <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className={`w-full h-[357px] relative  mt-10 lg:hover:scale-110 bg-black mx-auto ease-in-out duration-300  rounded-lg bg-right bg-no-repeat drop-shadow-About`} style={{ maxWidth: '1180px', backgroundImage: `url('/assets/Images/About/logo1.png')` }}>
                    <div className="relative pl-7 bg-gradient-to-r from-black lg:via-black to-transparent  pt-7 rounded-lg  z-10 h-full flex flex-col ">
                        <div className='w-4/5 lg:w-3/5'>
                            <div className='flex'>
                                <div className='h-[199px] w-[188px]'>
                                    <Image height={199} width={188} src="/assets/Images/About/tanishq.png" alt="Founder Illustration" className='rounded-lg' />
                                </div>
                                <div className='ml-4 mt-4'>
                                    <h1 className='text-2xl  ml-2'>Boys Played Well</h1>
                                    <h2 className='text-sm mt-2 font-light text-[#ED5266] ml-2'>Founded by Tanishq Kaura</h2>
                                    <button className="border h-10 w-[175px] rounded-md text-[#B6B6B6] border-[#ED5266] mt-4  pl-4 text-base flex items-center">
                                        Learn More
                                        <img src="/assets/Images/Movie/playimg.png" alt="Play Image" className="ml-4" />
                                    </button>
                                </div>
                            </div>
                            <div className='  lg:pr-16'>
                                <p className='text-sm mt-5 mb-6 lg:mb-10 '> We are a production company with a focus on non-fiction content.<br />
                                    Our founder is a Filmmaker, Author and New York University, Tisch Graduate.
                                </p>
                            </div>
                        </div>
                    </div>
                    </motion.div></div>
            {/* Mobile View */}

            <div className='md:hidden'>
                <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className={`bg-black h-[250px] rounded-md  w-[350px] mt-14 mx-auto mb-10 pt-3 pl-3 drop-shadow-About`}>
                    <div className='flex'>
                        <div className='h-[118px] w-[111px]'>
                            <img src="/assets/Images/About/tanishq.png" alt="Founder Illustration" className='h-full w-full rounded-lg' />
                        </div>
                        <div className='ml-4 '>
                            <h1 className='text-base  ml-2'>Boys Played Well</h1>
                            <h2 className='text-[10px] mt-3 font-light text-[#ED5266] ml-2'>Founded by Tanishq Kaura</h2>
                            <button className="border h-8 w-[127px] rounded-md text-[#B6B6B6] border-[#ED5266] mt-2  pl-2 text-xs flex items-center">
                                Learn More
                                <Image height={20} width={20} src="/assets/Images/Movie/playimg.png" alt="Play Image" className="ml-2 h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <p className='text-[10px] mt-5 mb-6 leading-normal mr-3'>We are a production company with a focus on non-fiction content.
                        Our founder is a Filmmaker, Author and New York University, Tisch Graduate.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default About
