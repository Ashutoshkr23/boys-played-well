import React from 'react'

function Landing() {
  return (
    <div>
      <div className='h-screen w-full text-white pb-10'>
              <video id='intro-video' src="/assets/Images/Main/video.mp4" autoPlay muted className='h-full w-full'></video>
      </div>
    </div>
  )
}

export default Landing
