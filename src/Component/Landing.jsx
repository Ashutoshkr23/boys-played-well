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
      <div className='h-screen w-full lg:w-3/5 flex justify-center items-center '>
              <img  src="/assets/Images/Main/Logo.gif" className=' object-cover my-auto mx-auto'></img>
      </div>
    </div>
  )
}

export default Landing
