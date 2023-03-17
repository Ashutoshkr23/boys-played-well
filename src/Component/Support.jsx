import React from 'react'
import SupportCard from '../Component/SupportCard'

function Support() {
  return (
    <div>
          <div className='px-4 py-8 w-[264px] sm:w-auto mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8'>
              <SupportCard dropShadow='drop-shadow-Support-blue' border='border-[#A298DD]' img='/assets/Images/About/hundered.png' value='₹ 100' textColor='text-[#A298DD]' text='Will receive gratitude' btnText='SUPPORTER'/>
              <SupportCard dropShadow='drop-shadow-Support-yellow' border='border-[#DFAE7C]' img='/assets/Images/About/twohundered.png' value='₹ 200' textColor='text-[#DFAE7C]' text='Will be informed of upcoming podcast episodes in advance.' btnText='FRIEND' />
              <SupportCard dropShadow='drop-shadow-Support-green' border='border-[#6A8F6E]' img='/assets/Images/About/fivehundered.png' value='₹ 500' textColor='text-[#6A8F6E]' text='Will have access to behind the scenes podcast footage.' btnText='FAMILY' />
              <SupportCard dropShadow='drop-shadow-Support-pink' border='border-[#D592DA]' img='/assets/Images/About/twothousand.png' value='₹ 2000' textColor='text-[#D592DA]' text='Will have their names appear in the credits of our podcast series.' btnText='SPONSOR' />

        </div>
      
    </div>
  )
}

export default Support
