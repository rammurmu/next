import Head from 'next/head'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import Footer from '..components/Layout/Footer'
import Header from '..components/Layout/Header'
import 'styles/Layout.css'



function MyApp({ Component, pageProps }){
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <> 
     <Head>
     <title>Runash</title> 
     <meta name='description' content='Live retail streaming platform ' />
     </Head>
     <Header />
     <Navbar />
      <Component {...pageProps} />  
     <Footer />
    </>
 )
}

export default MyApp

  
 
