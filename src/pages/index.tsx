
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../Component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div>
   <h1 className='text-lg font-bold text-blue-800'>Boys played well</h1>
</div>
  )
}
