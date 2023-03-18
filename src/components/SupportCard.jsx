import Image from 'next/image'
import React from 'react'

function SupportCard({dropShadow,border,  img , value , textColor , text , btnText}) {
  return (
    <div>
      <div className={`flex bg-black flex-col items-center w-[232px] h-[365px] ${border} ${dropShadow} rounded-md drop-shadow-Support-blue border`}>
        <Image height={64} width={140} src={img} alt='100 currency photo' className='mt-8'/>
        <h3 className='text-2xl mt-7'>{value}</h3>
        <p className='font-light text-sm mt-1.5 text-[#6C6C6C]'>per month</p>
        <button className='tracking-[.25em] rounded mt-9 w-44 h-11 bg-gradient-to-r from-[#ED5266] to-[#FF843F] '>
          <div className='bg-black w-[174px] h-[42px] hover:bg-gradient-to-r from-[#ED5266] to-[#FF843F] m-auto tracking-light rounded font-extralight py-2'>{btnText}</div>
        </button>
        <p className={`text-xs mt-7 mx-5 text-center ${textColor}`}>{text}</p>
      </div>
    </div>
  )
}

export default SupportCard
