import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
// import { FB_PIXEL_ID } from '../lib/fpixel'


// class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext) {
//     const originalRenderPage = ctx.renderPage

//     // Run the React rendering logic synchronously
//     ctx.renderPage = () => originalRenderPage({
//       // Useful for wrapping the whole react tree
//       enhanceApp: (App: any) => App,
//       // Useful for wrapping in a per-page basis
//       enhanceComponent: (Component: any) => Component
//     })

//     // Run the parent `getInitialProps`, it now includes the custom `renderPage`
//     const initialProps = await Document.getInitialProps(ctx)

//     return initialProps
//   }
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Film, TV, Podcast production company focused on non-fiction content" />
        <meta name="facebook-domain-verification" content="t9i0c75tp33caowjlfvcp6ig06u20j" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Boys Played Well" />
        <meta property="og:description" content="Film, TV, Podcast production company focused on non-fiction content" />
        <meta property="og:url" content="https://www.boysplayedwell.com/" />
        <meta property="og:site_name" content="Film, TV, Podcast production company focused on non-fiction content" />
        <meta name="twitter:card" content="summary" />
        <Head>
          {/* <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript> */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
