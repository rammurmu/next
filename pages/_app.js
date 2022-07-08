import '../styles/globals.css'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {

  return (
     <Layout>
        <Component {...pageProps} />
     </Layout>
  ) 
}

 export default MyApp


// import Layout from '../components/layout'

// export default function MyApp({ Component, pageProps }) {
 // return (
   // <Layout>
      // <Component {...pageProps} />
    // </Layout>
 // )
// }
