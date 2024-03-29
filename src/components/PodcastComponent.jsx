import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

function PodcastComponent({img1, img2, title , date , description , dropShadow}) {

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
    <div >
      <motion.div variants={fadeIn} initial="initial" whileInView="animate" transition={{delay: 7}} viewport={{ once: true }} className='hidden md:block mx-8 lg:mx-28 mt-28'><div className={`w-full h-[357px] relative bg-black mt-10 lg:hover:scale-110 ease-in-out duration-300  rounded-lg bg-right bg-no-repeat ${dropShadow}`} style={{ maxWidth: '1180px',}}>
        <Image className='absolute top-0 rounded-md right-0' height={357} width={499} src={img1} alt="" />
        <div className="relative pl-7 bg-gradient-to-r from-black via-black to-transparent  pt-7 rounded-lg  z-10 h-full flex flex-col ">
          <div className='w-4/5 lg:w-3/5'>
            <div className='flex'>
              <div className='h-[199px] w-[188px]'>
                <Image height={199} width={188} src={img2} alt="Podcast Poster" className='rounded-lg cover' />
              </div>
              <div className='ml-4 mt-4'>
                <h1 className='text-2xl ml-2'>{title}</h1>
                <button className="border h-10 w-[175px] rounded-md text-[#B6B6B6] border-[#ED5266] mt-4  pl-4 text-base flex items-center">
                  Watch Trailer
                  <img src="/assets/Images/Movie/playimg.png" alt="Play Image" className="ml-4" />
                </button>
                <div className='flex gap-4 mt-5'>
                  <a href="#"><Image height={48} width={48} src="/assets/Images/Podcast/Spotify.svg" alt="Spotify Logo" /></a>
                  <a href="#"><Image height={48} width={48} src="/assets/Images/Podcast/ApplePodcast.svg" alt="Apple Podcast Logo" /></a>
                </div>
              </div>
            </div>
            <div className='  lg:pr-16'>
              <p className='text-sm mt-5 mb-6 lg:mb-10 '> {description}<span className='invisible'>Is a finance and health podcast discussing all things prosperity and vigor related, Co-hosted by Shefali Sood and …</span>
              </p>
            </div>
          </div>
        </div> 
      </div>
      </motion.div>


     

      {/* Mobile View */}
      <div className='md:hidden'>
        <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className={`bg-black h-[250px] rounded-md  w-[350px] mt-14 mb-10 pt-3 pl-3 ${dropShadow}`}>
          <div className='flex'>
            <div className='h-[111px] w-[111px]'>
              <Image height={111} width={111} src={img2} alt="Podcast Logo" className='h-full w-full rounded-lg' />
            </div>
            <div className='ml-4 '>
              <h1 className='text-base'>{title}</h1>
              <h3 className='text-[#ED5266] text-[10px] mt-0.5'>{date}</h3>
              <button className="border h-8 w-[127px] rounded-md text-[#B6B6B6] border-[#ED5266] mt-2  pl-2 text-xs flex items-center">
                Watch Trailer
                <Image height={20} width={20} src="/assets/Images/Movie/playimg.png" alt="Play Image" className="ml-2 h-5 w-5" />
              </button>
              <div className='flex gap-2.5 mt-3'>
                <a href="#"><Image height={20} width={20} src="/assets/Images/Podcast/Spotify.svg" alt="Spotify logo" className='h-5 w-5' /></a>
                <a href="#"><Image height={20} width={20} src="/assets/Images/Podcast/ApplePodcast.svg" alt="Apple Podcast Logo" className='h-5 w-5' /></a>
              </div>
            </div>
          </div>
          <p className='text-[10px] mt-8 leading-relaxed mb-6 mr-3 '> {description}
          </p>
        </motion.div>
      </div>
      
    </div>
  )
}

export default PodcastComponent
