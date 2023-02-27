import React ,{useState, useEffect} from 'react'
import { motion } from 'framer-motion';

function Merchandise() {
    const fadeSlideIn = {
        initial: {
         opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 5,
                
            }
        },
        exit: {
            opacity: 0
        }
    }

    const fadeSlideInOut = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.6,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1,
            },
        },
    };

        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const timeoutId = setTimeout(() => {
                setIsVisible(true);
                setTimeout(() => {
                    setIsVisible(false);
                }, 5000);
            }, 0);
            return () => clearTimeout(timeoutId);
        }, []);

   
  return (
    <div className='py-20 bg-black text-white' id='merchandise'>
        <div className='hidden md:block'>
              <h1 className='text-5xl ml-20 lg:ml-32 mb-10'>Merchandise</h1>
              <motion.div
                  variants={fadeSlideInOut}
                  initial="initial"
                  animate={isVisible ? "animate" : "initial"}
                  exit={isVisible ? "exit" : "initial"}
                  viewport={{ once: false, threshold: 0.8 }}
                  className="flex justify-center"
              >
                  <h1 className='text-4xl my-20'>COMING SOON</h1>
              </motion.div>

              <div className='mx-16 lg:mx-24 flex gap-20 lg:gap-40 justify-center '>
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
        </div>
        <div className='md:hidden'>
              <h1 className='text-4xl ml-6 mb-10'>Merchandise</h1>
              <motion.div transition={{ duration: 0.6 }} variants={fadeSlideIn} initial="initial" whileInView="animate" exit="exit" viewport={{ once: false, amount: 0.8 }} className="flex justify-center">
                  <h1 className='text-2xl  my-8 mx-4'>COMING SOON</h1>
              </motion.div>

              <div className='mx-10 flex gap-40 justify-center '>
                  <div className='merchnadise-card h-[400px] w-[250px] rounded-lg bg-white my-8'>
                      <div className='w-full h-3/4'>
                          <img src="/assets/Images/Merchandise/T-shirt.jpg" alt="T-shirt" className='w-full h-full rounded-lg ' />
                          <h1 className='text-lg text-black text-center mt-2'>T-shirt</h1>
                          <div className='flex justify-center'>
                              <button className='h-8 btn w-28 mt-2 mx-auto rounded hover:bg-blue-1 hover:font-bold hover:border-none text-white border border-white my-auto'>Shop Now</button>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Merchandise
