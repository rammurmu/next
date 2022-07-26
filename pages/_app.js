import '../styles/globals.css'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import variables from '../styles/variables.module.scss'


function MyApp({ Component, pageProps }){

  return (
    <>  
     <Layout color={variables.primaryColor}>
      <Component {...pageProps} />  
     </Layout>
    </>
 )
}

export default MyApp

  
 
