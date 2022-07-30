import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import Layout from '../components/layout'


function MyApp({ Component, pageProps }){
  Page.getLayout = function getLayout(page) {
  return (
    <> 
     <Layout />
     <Navbar />
      <Component {...pageProps} />  
      <Layout />
    </>
 )
}

export default MyApp

  
 
