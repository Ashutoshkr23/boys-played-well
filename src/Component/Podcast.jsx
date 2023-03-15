import Image from 'next/legacy/image'
import React from 'react'
import PodcastComponent from '../Component/PodcastComponent'


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
        <div className='px-4 md:px-8 lg:px-28 mt-20 lg:mt-40 w-full'>
          <div className=''>
            <div className=' relative flex items-center justify-center w-full bg-black  mx-auto h-[250px] md:h-[350px]  drop-shadow-green-1 ' style={{ maxWidth: '1180px' }}>
              <h1 className='text-center bg-gradient-to-b from-[#4C8968] to-[#0C0C0F] bg-clip-text text-transparent text-xl lg:text-4xl tracking-[.7em]'>Coming soon</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Podcast
