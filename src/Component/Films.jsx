import React from 'react'
import FilmsComponent from '../Component/FilmsComponent'


function Films() {
  return (
    <div id='films'>
      <div className='flex flex-col my-28 items-center text-white'>
        <h1 className='text-2xl font-oswald md:text-[40px] tracking-light'>FILMS</h1>
        <FilmsComponent 
        img1={'/assets/Images/Movie/kashmiri-1.png'}
        img2={'/assets/Images/Movie/KM-1.png'}
        dropShadow={'drop-shadow-blue-1'}
          movieName={'Kashmiri Nazariya'}
          aboutmovie={'52 Min | Documentary | 2023'}
          movieDescription={'Follows a journalist and a politician. The former to elicit the ground reality and sentiment for ‘azadi’ in South Kashmir and the latter to highlight the campaign for Indian democracy in a conflict torn state. The film focuses on the 2019 parliamentary election campaign and the historic events that followed.'}
        />
        <FilmsComponent
          img1={'/assets/Images/Movie/ChaiGarden-2.png'}
          img2={'/assets/Images/Movie/ChaiGarden-1.png'}
          dropShadow={'drop-shadow-orange-1'}
          movieName={'Chai Garden'}
          aboutmovie={'27 Min | Documentary | 2023'}
          movieDescription={'Follows the lives of exploited tea garden workers in West Bengal, India. The film focuses on the struggles of three neighbours. Jeevani, an alcohol vendor, Jyoti, a prohibition proponent and Leos, a tribal leader and minimum wage activist.'}
        />

      </div>
    </div>
  )
}

export default Films
