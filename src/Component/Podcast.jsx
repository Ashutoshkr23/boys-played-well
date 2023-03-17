import Image from 'next/legacy/image'
import React from 'react'
import PodcastComponent from '../Component/PodcastComponent'
import ComingSoon from '../Component/ComingSoon'
import { motion } from "framer-motion";


function Podcast() {
  return (
    <div id='podcast'>
      <div className='flex flex-col my-28 items-center '>
        <h1 className='text-2xl md:text-[40px] font-oswald tracking-light'>PODCAST</h1>
        <PodcastComponent
          img1={"/assets/Images/Podcast/podcast-11.png"}
          img2={"/assets/Images/Podcast/podcast-1.png"}
          title={'Real Talk'}
          date={'Date'}
          dropShadow={"drop-shadow-orange-2"}
        description={'This long form podcast is hosted by Krsna Daswani, a relationship coach/ expert. She interviews wide ranging guests to tease out their professional and personal lives to enlighten, educate and entertain audiences.'}
        />  
        <PodcastComponent
          img1={"/assets/Images/Podcast/podcast-32.png"}
          img2={"/assets/Images/Podcast/podcast-31.png"}
          title={'Unfiltered Banter'}
          date={'Date'}
          dropShadow={"drop-shadow-orange-2"}
          description={'Hosted by chaddi buddies— Addy (Aditya Joshi) and Sid (Siddharth Nair). They entertain audiences by reviewing & reacting to all things desi and videsi.'}
        />   
      </div>
      <div className='hidden md:block'>
        <div className='px-4 md:px-8 lg:px-28 mt-20 lg:mt-40 w-full'>
          <div className=' relative rounded-md p-7 flex items-center justify-center w-full bg-black  mx-auto h-[250px] md:h-[350px] bg-right bg-no-repeat drop-shadow-green-1 ' style={{ maxWidth: '1180px', backgroundImage: `url('/assets/Images/Podcast/podcast-42.png')` }}>
            <div className='flex mr-auto mb-auto'>
              <div className='h-[199px] w-[188px]'>
                <Image height={199} width={188} src="/assets/Images/Podcast/podcast-41.png" alt="Podcast Poster" className='rounded-lg' />
              </div>
              <div className='ml-4 mt-4'>
                <h1 className='text-2xl ml-2'>Bombay Bacchi</h1>
                <button className="border ml-2 h-10 w-[175px] rounded-md text-[#B6B6B6] border-[#ED5266] mt-4  pl-4 text-base flex items-center">
                  COMING SOON
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        <div className='px-4 md:px-8 lg:px-28 mt-20 lg:mt-40 w-full'>
          <div className=' relative rounded-md p-7 flex items-center justify-center w-full bg-black  mx-auto h-[250px] md:h-[350px] bg-right bg-no-repeat drop-shadow-green-1 ' >
            <div className='flex mr-auto mb-auto'>
              <div className='h-[111px] w-[111px]'>
                <Image height={111} width={111} src="/assets/Images/Podcast/podcast-41.png" alt="Podcast Poster" className='rounded-lg' />
              </div>
              <div className='ml-4 '>
                <h1 className='text-base ml-2'>Bombay Bacchi</h1>
                <button className="border ml-2 h-8 w-[127px] rounded-md text-[#B6B6B6] border-[#ED5266] mt-4  pl-6 text-xs flex items-center">
                  COMING SOON
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      
    </div>
  )
}

export default Podcast
