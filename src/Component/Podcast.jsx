import Image from 'next/legacy/image'
import React from 'react'
import PodcastComponent from '../Component/PodcastComponent'
import ComingSoon from '../Component/ComingSoon'


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
      </div>
      <ComingSoon />
    </div>
  )
}

export default Podcast
