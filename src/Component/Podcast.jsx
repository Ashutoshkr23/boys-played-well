import Image from 'next/legacy/image'
import React from 'react'
import PodcastComponent from '../Component/PodcastComponent'


function Podcast() {
  return (
    <div id='podcast'>
      <div className='flex flex-col my-28 items-center text-white'>
        <h1 className='text-2xl md:text-[40px] font-oswald tracking-light'>PODCAST</h1>
        <PodcastComponent
          img1={"/assets/Images/Podcast/podcast-11.png"}
          img2={"/assets/Images/Podcast/podcast-1.png"}
          title={'Real Talk'}
          date={'Date'}
          dropShadow={"drop-shadow-orange-2"}
        description={'This long form podcast is hosted by Krsna Daswani, a relationship coach/ expert. She interviews wide ranging guests to tease out their professional and personal lives to enlighten, educate and entertain audiences.'}
        />
        <div className='px-8 lg:px-28 mt-40 w-full'>
        <div className=' relative w-full h-[350px] '>
          <Image layout='fill' objectFit="cover" src="/assets/Images/TV/TV.png" alt="" />
        </div>
        </div>

      </div>
    </div>
  )
}

export default Podcast
