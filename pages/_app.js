import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'

function MyApp({ Component, pageProps }){
  return (
    <> 
     <Navbar />
      <Component {...pageProps} />  
    </>
 )
}

export default MyApp

  
 
