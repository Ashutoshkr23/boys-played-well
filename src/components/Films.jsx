import React from 'react'
import {FilmsComponent} from '../components'


function Films() {

  
  return (
    <div id='films'>
      <div className='flex flex-col my-28 items-center'>
        <h1 className='text-2xl font-oswald md:text-[40px] tracking-light'>FILMS</h1>
        <FilmsComponent 
        img1={'/assets/Images/Movie/kashmiri-1.png'}
        img2={'/assets/Images/Movie/KM-1.png'}
        dropShadow={'drop-shadow-blue-1'}
          movieName={'Kashmiri Nazariya'}
          aboutmovie={'52 Min | Documentary | 2023'}
          movieDescription={'Follows the lives of a journalist and a politician. The former to elicit the ground reality and sentiment for ‘azadi’ (freedom) in South Kashmir and the latter to highlight the campaign for Indian democracy in a conflict torn state. The film focuses on the 2019 Parliamentary campaign and the historic events that followed.'}
        />
        <FilmsComponent
          img1={'/assets/Images/Movie/ChaiGarden-2.png'}
          img2={'/assets/Images/Movie/ChaiGarden-1.png'}
          dropShadow={'drop-shadow-orange-1'}
          movieName={'Chai Garden'}
          aboutmovie={'27 Min | Documentary | 2019'}
          movieDescription={'Follows the lives of three neighbours living on tea plantations in West Bengal, India. A tribal leader protesting exploitative wages, an alcohol vendor trying to make ends meet, and a prohibition proponent empowering women. The film focuses on the struggle to live a fulfilling life in a region plagued by indigence and illiteracy.'}
        />

      </div>
    </div>
  )
}

export default Films
