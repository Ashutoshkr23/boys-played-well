
import { Inter } from '@next/font/google'
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


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div>
    <Main/>
    <Films/>
    <Tv/>
    <Podcast/>
    <Footer/>
</div>
  )
}
