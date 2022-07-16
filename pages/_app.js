import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'

function MyApp({ Component, pageProps }) {
  const getLayout=Component.getLayout || ((page) => page)

  return getLayout (<Component {...pageProps} />)
    <>  
      <Navbar />
      <Component {...pageProps} />  
    </>
 )
}

export default MyApp


