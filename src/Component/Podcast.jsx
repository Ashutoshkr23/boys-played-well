import React from 'react'

function Podcast() {
  return (
    <div>
      <div className='hidden md:block py-20 px-8 lg:px-40 bg-black text-white '>
        <h1 className='text-5xl'>Podcast</h1>
        <div className='mx-2 lg:mx-10 my-20 bg-white hover:scale-110 ease-in-out duration-300 h-80 lg:h-96 rounded-lg'>
            <div className='flex'>
                <div className='h-64 w-64 lg:h-80 lg:w-80 ml-3 lg:ml-7 mt-3 lg:mt-7 rounded-lg'>
                    <img src="/assets/Images/Podcast/podcast.png" alt="" className='h-full w-full rounded-lg' />
                </div>
                <div className='flex-1 mx-6'>
                    <h1 className='text-black text-3xl lg:text-4xl mt-4 lg:mt-12'>Conversations with Krsna:</h1>
                    <p className='text-black text-lg leading-8 mt-4'>This long form podcast is hosted by Krsna Daswani, a relationship coach/ expert. She interviews wide ranging guests to tease out their professional and personal lives to enlighten, educate and entertain audiences.</p>
                    <div className='flex gap-4 mt-2'>
                        <img src="/assets/Images/Podcast/Spotify.png" alt="" className='h-12 w-12' />
                        <img src="/assets/Images/Podcast/ApplePodcast.png" alt="" className='h-12 w-12' />
                        <button className='h-10 btn w-40 rounded hover:bg-blue-1 hover:font-bold hover:border-none text-white border border-white my-auto'>View Episodes</button>
                    </div>
                </div>
            </div>
          </div>
      </div>
      <div className='md:hidden bg-black '>
        <h1 className='py-10 pl-6 text-white text-3xl'>PODCAST</h1>
        <div className='bg-white mx-4 text-black rounded-lg'>
          <div className='flex  '>
            <img src="/assets/Images/Podcast/podcast.png" alt="" className=' w-2/5 rounded-lg mt-4 ml-4' />
            <div className='pl-4 pt-4'>
              <h1 className='text-2xl  mt-2 ml-2'>Conversations with Krsna:</h1>
              <div className='flex gap-4 mt-2'>
                <img src="/assets/Images/Podcast/Spotify.png" alt="" className='h-12 w-12' />
                <img src="/assets/Images/Podcast/ApplePodcast.png" alt="" className='h-12 w-12' />
              </div>
            </div>
          </div>
          <div >
            <p className='text-sm mt-6 pl-4 pr-4 pb-4'> Follows a journalist and a politician. The former to elicit the ground reality and sentiment for ‘azadi’ in South Kashmir and the latter to highlight the campaign for Indian democracy in a conflict torn state. The film focuses on the 2019 parliamentary election campaign and the historic events that followed.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Podcast
