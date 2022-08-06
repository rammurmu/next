import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import Header from '../components/Headers'
import '../components/Header.css'

function MyApp({ Component, pageProps }){
  return (
    <> 
     <Navbar />
      <Component {...pageProps} />  
    </>
    <> 
     <Header />
      <Component {...pageProps} />  
    </>
 )
}

export default MyApp

  
 
