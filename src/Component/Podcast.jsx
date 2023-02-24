import React from 'react'

function Podcast() {
  return (
    <div>
      <div className='py-20 px-40 bg-black text-white '>
          <h1 className='text-5xl'>Podcast</h1>
        <div className='mx-10 my-20 bg-white hover:scale-110 ease-in-out duration-300 h-[360px] rounded-lg'>
            <div className='flex'>
                <div className='h-[300px] w-[300px] ml-7 mt-7 rounded-lg'>
                    <img src="/assets/Images/Podcast/podcast.png" alt="" className='h-full w-full rounded-lg' />
                </div>
                <div className='flex-1 mx-6'>
                    <h1 className='text-black text-4xl mt-12'>Conversations with Krsna:</h1>
                    <p className='text-black text-lg leading-8 mt-4'>This long form podcast is hosted by Krsna Daswani, a relationship coach/ expert. She interviews wide ranging guests to tease out their professional and personal lives to enlighten, educate and entertain audiences.</p>
                    <div className='flex gap-4 mt-2'>
                              {/*<img src="/assets/Images/Podcast/Play-Button.png" alt="" className='h-12 w-12' />
                        <img src="/assets/Images/Podcast/Spotify.png" alt="" className='h-12 w-12' />
                        <img src="/assets/Images/Podcast/ApplePodcast.png" alt="" className='h-12 w-12' />*/}
                        <button className='h-10 btn w-40 mt-4 rounded hover:bg-blue-1 hover:font-bold hover:border-none text-white border border-white my-auto'>View Episodes</button>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Podcast
