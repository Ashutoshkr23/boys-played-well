
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../Component/Navbar'
import Main from '../Component/Main'
import Movie from '../Component/Movie'
import Podcast from '../Component/Podcast'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div>
   <Navbar/>
    <Main/>
    <Movie/>
    <Podcast/>
</div>
  )
}
