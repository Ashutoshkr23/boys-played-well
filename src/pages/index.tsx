
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../Component/Navbar'
import Main from '../Component/Main'
import Movie from '../Component/Movie'
import Podcast from '../Component/Podcast'
import Footer from '../Component/Footer'
import Demo from '../Component/Demo'
import Merchandise from '../Component/Merchandise'
import About from '../Component/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div>
    <Main/>
    <Movie/>
    <Podcast/>
    <Merchandise/>
    <About/>
    <Footer/>
    
</div>
  )
}
