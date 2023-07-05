import Image from 'next/legacy/image'
import React from 'react'
import {PodcastComponent} from '../components'


function Podcast() {
  return (
    <div id='podcast'>
      <div className='flex flex-col my-28 items-center '>
        <h1 className='text-2xl md:text-[40px] font-oswald tracking-light'>PODCASTS</h1>
        <PodcastComponent
          img1={"/assets/Images/Podcast/podcast-11.png"}
          img2={"/assets/Images/Podcast/podcast-1.png"}
          title={'@RealVoicePodcast'}
          date={'Date'}
          dropShadow={"drop-shadow-orange-2"}
          description={'Invites wide ranging guests to enlighten, educate and entertain audiences. Co-hosted by Krsna Daswani and Neel Nakra. Krsna is a Matchmaker/ relationship expert and Neel is a writer/ former talent agent.'}
        />  
        <PodcastComponent
          img1={"/assets/Images/Podcast/podcast-32.png"}
          img2={"/assets/Images/Podcast/podcast-31.png"}
          title={'@WealthWellnessLab'}
          date={'Date'}
          dropShadow={"drop-shadow-blue-2"}
          description={'Is a finance and health podcast discussing all things prosperity and vigor related, Co-hosted by Shefali Sood and …'}
        />   
        <PodcastComponent
          img1={"/assets/Images/Podcast/podcast-42.png"}
          img2={"/assets/Images/Podcast/podcast-41.png"}
          title={'@UndividedIndia'}
          date={'Date'}
          dropShadow={"drop-shadow-orange-2"}
          description={'Invites wide ranging guests to discuss all things India in detail. From culture & history to entrepreneurship & politics.'}
        /> 
      </div>
    </div>
  )
}

export default Podcast
