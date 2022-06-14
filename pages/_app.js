import Header from '../components/Header'
import Head from 'next/head'
import '../styles/globals.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Sugoi | Find your favorite anime!</title>
        </Head>

        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </>
  )
}

export default MyApp
