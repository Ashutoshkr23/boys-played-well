import React from 'react'

function PodcastComponent() {
  return (
    <div>
        <div className='h-[357px] w-[839px] border drop-shadow-blue-1 flex border-white my-20 pt-10 pl-7 '>
            <img src="/assets/Images/Podcast/podcast-1.png" className='h-[275px] w-[275px]' alt="" />
            <div className='flex flex-col ml-8 pr-10'>
                <h1 className='text-2xl'>Real Talk</h1>
                <h3 className='text-[#ED5266] text-sm mt-2'>Date</h3>
                  <button className="border h-10 w-[175px] rounded-md text-[#B6B6B6] border-[#ED5266] mt-4  pl-5 text-base flex items-center">
                      LISTEN NOW
                      <img src="/assets/Images/Movie/playimg.png" alt="" className="ml-4" />
                  </button>
                  <div className='flex gap-4 mt-5'>
                      <a href="#"><img src="/assets/Images/Podcast/Spotify.svg" alt="" className='h-12 w-12' /></a>
                      <a href="#"><img src="/assets/Images/Podcast/ApplePodcast.svg" alt="" className='h-12 w-12' /></a>
                  </div>
                  <p className='text-sm mt-5 mr-16'>This long form podcast is hosted by Krsna Daswani, a relationship coach/ expert. She interviews wide ranging guests to tease out their professional and personal lives to enlighten, educate and entertain audiences.</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default PodcastComponent
