
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


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [firstComponent, setfirstComponent] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setfirstComponent(true);
    }, 9000);
  }, []);

  return (
<div>
    <Landing/>
    <Navbar/>
    <Main/>
    <Films/>
    <Tv/>
    <Podcast/>
    <Merchandise/>
    <Footer/>
</div>
  )
}
