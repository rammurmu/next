import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import Layout from '../components/Layout'
import '../styles/Layout.module.css'

function MyApp({ Component, pageProps }){

  return (
    <>  
      <Navbar />
      <Component {...pageProps} />  
    </>
 )
}

export default MyApp


