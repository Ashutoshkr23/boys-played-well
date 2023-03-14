import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Oswald , Poppins } from '@next/font/google'
import * as gtag from "../lib/gtag";
import Head from 'next/head'
import Script from "next/script";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200','300','400' ,'700'],
  variable: '--poppins-font',
  
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--oswald-font',
});

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
    </Head>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
    />
    <main className={`${poppins.variable} font-sans , ${oswald.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
</>
}

