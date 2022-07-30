import Link from 'next/link'
import Header from './header'
import Footer from './footer'


export default function Layout({ children }) {
  return (
      <Header />
      <main>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://runash.in"
          target="_blank"
          rel="noopener noreferrer"
        >
         © 2022 RunAsh. {' '}
          <span className={styles.logo}>
            <Image src="" alt=" " width={72} height={16} />
          </span>
        </a>
     </footer>
  )
}
