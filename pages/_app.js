import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import Footer from '..components/layout/Footer'
import 'styles/layout.css'



function MyApp({ Component, pageProps }){
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <> 
     <Navbar />
      <Component {...pageProps} />  
     <Footer />
    </>
 )
}

export default MyApp

  
 
