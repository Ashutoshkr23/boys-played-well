
import { Inter } from '@next/font/google'
import React, { useEffect, useState } from 'react'
// import Demo from '../Component/Demo'
import {About, Navbar, Main, Podcast, Footer, Films, Tv, Landing, Merchandise} from '../components'
import { motion , AnimatePresence } from 'framer-motion';
import Head from 'next/head';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [firstComponent, setfirstComponent] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setfirstComponent(true);
    }, 7000);
  }, []);

  const fadeIn = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 4
      }
    }
  }

  return (
    
<>
  <Head>
    <title> BPW | Film, TV, Podcast</title>
  </Head>
    <Landing/>
      <AnimatePresence>
        {firstComponent &&
          <motion.div
            variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <Navbar/>
            <Main />
            <Films />
            <Tv />
            <Podcast />
            <Merchandise />
            <About />
            <Footer />
          </motion.div>}
      </AnimatePresence>
</>
  )
}
