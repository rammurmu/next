import Link from 'next/link'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import 'styles/layout.css'
import Footer from '..components/layout/Footer'


function MyApp({ Component, pageProps }){
  Page.getLayout = function getLayout(page) {
  return (
    <> 
     <Navbar />
      <Component {...pageProps} />  
      <Footer />
    </>
 )
}

export default MyApp

  
 
