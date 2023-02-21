import React from 'react'

function Movie() {
  return (
    <div>
      <div className='my-20 mx-40'>
        <h1 className='text-5xl'>Films</h1>
        <div className='flex gap-10'>
          <div className='h-[500px] w-[300px] bg-white rounded-lg mt-20'>
            <div className='h-[250px] w-[300px] rounded-lg'>
              <img src="/assets/Images/Movie/Chaigarden.jpg" alt="" className='bg-cover rounded-lg' />
            </div>
            <div className='text-center'>
              <h1 className='text-2xl text-black'>CHAI GARDEN</h1>
              <h2 className='text-sm mt-2 text-black'>31 Min | Drama | 2023</h2>
              <p className='text-sm mt-2 px-4 text-black'> Follows the lives of tea garden labourers paid a wage of ₹132/day in West Bengal, India. The workers present their circumstance, experience of exploitation. The film focuses on two women from the village Jeewani and Jyoti, niece and aunt respectively.
              </p>
            </div>
          </div>
          <div className='h-[500px] w-[300px] bg-white rounded-lg mt-20'>
            <div className='h-[250px] w-[300px] rounded-lg'>
              <img src="/assets/Images/Movie/Kashmiri.png" alt="" className='h-full w-full rounded-lg' />
            </div>
            <div className='text-center'>
              <h1 className='text-2xl text-black'>Kashmiri Nazariya</h1>
              <h2 className='text-sm mt-2 text-black'>52 Min | Drama | 2023</h2>
              <p className='text-sm mt-2 px-4 text-black'> Follows a journalist and a politician. The former to elicit the ground reality and sentiment for ‘azadi’ in South Kashmir and the latter to highlight the campaign for Indian democracy in a conflict torn state. The film focuses on the 2019 parliamentary election campaign and the historic events that followed.
              </p>
            </div>
          </div>



          <div className='h-[500px] w-[300px] bg-white rounded-lg mt-20'>
            <div className='h-[250px] w-full'></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
