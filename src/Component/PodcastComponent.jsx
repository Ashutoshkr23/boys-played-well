import React from 'react'

function PodcastComponent({img1, img2, title , date , description}) {
  return (
    <div >
      <div className='h-[357px] bg-black rounded-lg drop-shadow-orange-1 w-[839px] flex  my-20  pl-7 '>
        <div className='h-full w-64 relative ml-auto '>
          <img className='w-full h-full bg-cover' src={img1} alt="" />
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
        </div>

        <div className='absolute w-full flex h-full pt-10'>
          <img src={img2} className='h-[275px] w-[275px]' alt="" />
          <div className='flex flex-col ml-8 pr-10'>
            <h1 className='text-2xl'>{title}</h1>
            <h3 className='text-[#ED5266] text-sm mt-2'>{date}</h3>
            <button className="border h-10 w-[175px] rounded-md text-[#B6B6B6] border-[#ED5266] mt-4  pl-5 text-base flex items-center">
              LISTEN NOW
              <img src="/assets/Images/Movie/playimg.png" alt="" className="ml-4" />
            </button>
            <div className='flex gap-4 mt-5'>
              <a href="#"><img src="/assets/Images/Podcast/Spotify.svg" alt="" className='h-12 w-12' /></a>
              <a href="#"><img src="/assets/Images/Podcast/ApplePodcast.svg" alt="" className='h-12 w-12' /></a>
            </div>
            <p className='text-sm mt-5 mr-16'>{description}</p>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default PodcastComponent
