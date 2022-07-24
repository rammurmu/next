import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import Layout from '../components/Layout'
import '../components/Layout.css'


function MyApp({ Component, pageProps }){

  return (
    <>  
      <Layout />
      <Navbar />
      <Component {...pageProps} />  
    </>
 )
}

export default MyApp


