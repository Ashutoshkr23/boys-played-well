import React from 'react'


function FilmsComponent({img1 , img2 , dropShadow , movieName , aboutmovie , movieDescription}) {
  return (
    <div className='mx-28 mt-28'>
      <div className={`w-full h-[357px] relative  mt-10 hover:scale-110 ease-in-out duration-300  rounded-lg bg-right bg-no-repeat ${dropShadow}`} style={{ maxWidth: '1180px', backgroundImage: `url('${img1}')` }}>
              <div className="relative pl-7 lg:pl-10 pt-7  lg:pt-10 rounded-lg bg-gradient-to-r from-black via-black to-transparent z-10 h-full flex flex-col ">
                  <div className='w-3/5'>
                      <div className='flex'>
                          <div className='h-[199px] w-[188px]'>
                              <img src={img2} alt="" className='h-full w-full rounded-lg' />
                          </div>
                          <div className='ml-4 mt-4'>
                              <h1 className='text-2xl text-white ml-2'>{movieName}</h1>
                              <h2 className='text-sm mt-2 font-light text-[#ED5266] ml-2'>{aboutmovie}</h2>
                <button className="border h-10 w-[175px] rounded-md text-[#B6B6B6] border-[#ED5266] mt-20 ml-2 pl-5 text-base flex items-center">
                  WATCH NOW
                  <img src="/assets/Images/Movie/playimg.png" alt="" className="ml-4" />
                </button>

                          </div>
                      </div>
            
                      <div className='pr-16'>
                          <p className='text-sm mt-5 mb-6 lg:mb-10 text-white'> {movieDescription}
                          </p>
                      </div>
                  </div>
              </div>
          </div>

      {/*
         <div className="relative shadow-xl hover:shadow-green-600  shadow-green-300  h-auto mt-10 hover:scale-110 ease-in-out duration-300  rounded-lg">
          <div
            className="absolute top-0 rounded-lg left-0 w-full h-full bg-center bg-cover filter "
            style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
          />
          <div className="relative pl-4 lg:pl-10 pt-4  lg:pt-10 rounded-lg bg-gradient-to-r from-black via-black to-transparent z-10 h-full flex flex-col ">
            <div className='w-1/2'>
              <div className='flex'>
                <div className='h-40 w-40'>
                  <Image src="/assets/Images/Movie/Chaigarden.jpg" alt="" className='h-full w-full rounded-lg mt-2 ml-2' />
                </div>
                <div className='ml-4 mt-4'>
                  <h1 className='text-2xl text-white mt-2 ml-2'>CHAI GARDEN</h1>
                  <h2 className='text-sm mt-2 text-white ml-2'>31 Min | Drama | 2023</h2>
                </div>
              </div>
              <div className='pr-16'>
                <p className='text-sm mt-6 lg:mt-10 pl-4 mb-6 lg:mb-10 text-white'> Follows the lives of tea garden labourers paid a wage of ₹132/day in West Bengal, India. The workers present their circumstance, experience of exploitation. The film focuses on two women from the village Jeewani and Jyoti, niece and aunt respectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      */}
    </div>
  )
}

export default FilmsComponent
