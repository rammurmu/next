import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import Layout from '../components/Layout'
import '../components/Layout.css'

function MyApp({ Component, pageProps }){

  return (
    <>  
      <Header />
      <Navbar />
      <Component {...pageProps} />  
      <Footer />
    </>
 )
}

export default MyApp


