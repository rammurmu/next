import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import Layout from '../components/layout'
import '../components.Layout.css'

function MyApp({ Component, pageProps }) {
  return (
    <>  
      <Navbar />
      <Layout>
      <Component {...pageProps} />  
      </Layout> 
    </>
 )
}

export default MyApp


