import React ,{useEffect , useState} from 'react'
import ReactPlayer from 'react-player';

function Landing() {

    const [showVideo, setShowVideo] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideo(false)
        }, 7000)
        return () => clearTimeout(timer)
    }, [])
  return (
      <div style={{ display: showVideo ? 'block' : 'none' }}>
      <div className='h-screen w-full text-white pb-10'>
              <video id='intro-video' src="/assets/Images/Main/video.mp4" autoPlay muted className='h-full w-full'></video>
      </div>
    </div>
  )
}

export default Landing
