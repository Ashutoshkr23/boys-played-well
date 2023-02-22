import React from 'react'
import { motion } from 'framer-motion';

function Merchandise() {
  return (
    <div className='my-20'>
          <div style={{ overflowX: 'hidden' }}>
              <motion.p
                  initial={{ x: '100%', opacity: 1, overflowY: 'hidden' }}
                  animate={{
                      x: '-100%',
                      opacity: 1,
                      transition: { duration: 12, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0 }
                  }}
                  className='text-3xl font-bold'
                  style={{ wordSpacing: '0.5em' }}
              >
                  COMING SOON &nbsp; COMING SOON &nbsp;  COMING SOON
              </motion.p>
          </div>
          
          <div className='mx-24 flex gap-40 justify-center '>
            <div className='merchnadise-card h-[400px] w-[250px] rounded-lg bg-white my-20'>
                <div className='w-full h-3/4'>
                      <img src="/assets/Images/Merchandise/T-shirt.jpg" alt="T-shirt" className='w-full h-full rounded-lg ' />
                      <h1 className='text-lg text-black text-center mt-2'>T-shirt</h1>
                      <div className='flex justify-center'>
                      <button className='h-8 btn w-28 mt-2 mx-auto rounded hover:bg-blue-1 hover:font-bold hover:border-none text-white border border-white my-auto'>Shop Now</button>
                      </div>
                </div>   
            </div>
              <div className='merchnadise-card h-[400px] w-[250px] rounded-lg bg-white my-20'>
                  <div className='w-full h-3/4'>
                      <img src="/assets/Images/Merchandise/Hoodie.jpg" alt="T-shirt" className='w-full h-full rounded-lg ' />
                      <h1 className='text-lg text-black text-center mt-2'>Hoodie</h1>
                      <div className='flex justify-center'>
                          <button className='h-8 btn w-28 mt-2 mx-auto rounded hover:bg-blue-1 hover:font-bold hover:border-none text-white border border-white my-auto'>Shop Now</button>
                      </div>
                  </div>
              </div>
          </div>


          <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
              <motion.p
                  initial={{ x: '100%', opacity: 1 }}
                  animate={{
                      x: '-100%',
                      opacity: 1,
                      transition: { duration: 12, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }
                  }}
                    className='text-3xl font-bold'
                  style={{ wordSpacing: '0.5em' }}
              >
                  COMING SOON &nbsp; COMING SOON &nbsp;  COMING SOON
              </motion.p>
          </div>
    </div>
  )
}

export default Merchandise
