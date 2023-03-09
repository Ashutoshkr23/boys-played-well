import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Oswald , Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400' ,'700'],
  variable: '--poppins-font',
  
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--oswald-font',
});

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${poppins.variable} font-sans , ${oswald.variable} font-sans`}>
    <Component {...pageProps} />
  </main>
}
