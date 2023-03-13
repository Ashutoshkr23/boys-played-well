import React ,{useEffect , useState} from 'react'
import ReactPlayer from 'react-player';
import Image from 'next/image'

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
              <img  src="/assets/Images/Main/Logo.gif" className='h-full mx-auto w-3/5 object-cover'></img>
      </div>
    </div>
  )
}

export default Landing
