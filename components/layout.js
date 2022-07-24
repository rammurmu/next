import Link from 'next/link'
import Header from './header'
import Navbar from './navbar'
import Footer from './footer'


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
