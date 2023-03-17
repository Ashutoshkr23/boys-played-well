
import { Inter } from '@next/font/google'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import Navbar from '../Component/Navbar'
import Main from '../Component/Main'
import Podcast from '../Component/Podcast'
import Footer from '../Component/Footer'
import Demo from '../Component/Demo'
import Merchandise from '../Component/Merchandise'
import About from '../Component/About'
import Films from '../Component/Films'
import Tv from '../Component/Tv'
import Landing from '../Component/Landing'
import { motion, AnimatePresence } from 'framer-motion'



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
<div>
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
</div>
  )
}
