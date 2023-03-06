import React from 'react'


function FilmsComponent({ img1, img2, dropShadow, movieName, aboutmovie, movieDescription }) {
  return (
    <div >
      {/*Laptop View*/}
      <div className='hidden md:block mx-28 mt-28'><div className={`w-full h-[357px] relative  mt-10 hover:scale-110 ease-in-out duration-300  rounded-lg bg-right bg-no-repeat ${dropShadow}`} style={{ maxWidth: '1180px', backgroundImage: `url('${img1}')` }}>
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
      </div></div>
      {/* Mobile View */}

      <div className='md:hidden'>
        <div className={`bg-black h-[250px] rounded-md  w-[350px] mt-14 mb-10 pt-3 pl-3 ${dropShadow}`}>
          <div className='flex'>
            <div className='h-[118px] w-[111px]'>
              <img src={img2} alt="" className='h-full w-full rounded-lg' />
            </div>
            <div className='ml-4 '>
              <h1 className='text-base text-white ml-2'>{movieName}</h1>
              <h2 className='text-[10px] mt-3 font-light text-[#ED5266] ml-2'>{aboutmovie}</h2>
              <button className="border h-8 w-[130px] rounded-md text-[#B6B6B6] border-[#ED5266] mt-9 ml-2 pl-3 text-[12px] flex items-center">
                WATCH NOW
                <img src="/assets/Images/Movie/playimg.png" alt="" className="ml-4 w-5 h-5" />
              </button>
            </div>
          </div>
          <p className='text-[10px] mt-5 mb-6 leading-normal mr-3 text-white'> {movieDescription}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FilmsComponent
