import Image from 'next/image'
import React from 'react'

function PodcastComponent({img1, img2, title , date , description , dropShadow}) {
  return (
    <div >
      <div className='hidden md:block'><div className={`h-[357px] bg-black rounded-lg ${dropShadow} w-[839px] flex  my-20  pl-7`}>
        <div className='h-full w-64 relative ml-auto '>
          <Image height={329} width={275} className='w-full h-full bg-cover' src={img1} alt="" />
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
        </div>

        <div className='absolute w-full flex h-full pt-7'>
          <Image height={275} width={275} src={img2}  alt="" />
          <div className='flex flex-col ml-8 pr-10'>
            <h1 className='text-2xl'>{title}</h1>
            <h3 className='text-[#ED5266] text-sm mt-2'>{date}</h3>
            <button className="border h-10 w-[175px] rounded-md text-[#B6B6B6] border-[#ED5266] mt-4  pl-5 text-base flex items-center">
              LISTEN NOW
              <img src="/assets/Images/Movie/playimg.png" alt="" className="ml-4" />
            </button>
            <div className='flex gap-4 mt-5'>
              <a href="#"><Image height={48} width={48} src="/assets/Images/Podcast/Spotify.svg" alt=""  /></a>
              <a href="#"><Image height={48} width={48} src="/assets/Images/Podcast/ApplePodcast.svg" alt=""  /></a>
            </div>
            <p className='text-sm mt-5 mr-16'>{description}</p>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile View */}
      <div className='md:hidden'>
        <div className={`bg-black h-[250px] rounded-md  w-[350px] mt-14 mb-10 pt-3 pl-3 ${dropShadow}`}>
          <div className='flex'>
            <div className='h-[111px] w-[111px]'>
              <Image height={111} width={111} src={img1} alt="" className='h-full w-full rounded-lg' />
            </div>
            <div className='ml-4 '>
              <h1 className='text-base'>{title}</h1>
              <h3 className='text-[#ED5266] text-[10px] mt-0.5'>{date}</h3>
              <button className="border h-8 w-[127px] rounded-md text-[#B6B6B6] border-[#ED5266] mt-2  pl-3 text-xs flex items-center">
                LISTEN NOW
                <Image height={20} width={20} src="/assets/Images/Movie/playimg.png" alt="" className="ml-4 h-5 w-5" />
              </button>
              <div className='flex gap-2.5 mt-3'>
                <a href="#"><Image height={20} width={20} src="/assets/Images/Podcast/Spotify.svg" alt="" className='h-5 w-5' /></a>
                <a href="#"><Image height={20} width={20} src="/assets/Images/Podcast/ApplePodcast.svg" alt="" className='h-5 w-5' /></a>
              </div>
            </div>
          </div>
          <p className='text-[10px] mt-8 leading-relaxed mb-6 mr-3 text-white'> {description}
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default PodcastComponent
