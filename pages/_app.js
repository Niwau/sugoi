import Header from '../components/Header'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Sugoi | Find your favorite anime!</title>
        </Head>

        <Header/>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
