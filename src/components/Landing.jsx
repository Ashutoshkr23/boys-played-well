import React ,{useEffect , useState} from 'react'

function Landing() {

    const [showVideo, setShowVideo] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideo(false)
        }, 7000)
        return () => clearTimeout(timer)
    }, [])
  return (
    <div className='h-screen' style={{ display: showVideo ? 'block' : 'none' }}>
      <div className='h-screen w-full flex justify-center items-center '>
        <img src="/assets/Images/Main/Logo.gif" className=' object-cover lg:h-full sm:w-3/5 w-10/12 lg:w-auto mx-auto' alt='logo'></img>
      </div>
    </div>
  )
}

export default Landing
