import Footer from '../components/Footer.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <main className={styles.main}>
        <h1>footer</h1>
        <p className={styles.description}>
          <Link href="/">
            <a>Learn</a>
          </Link>
        </p>
      </main>
    </div>
  )
}


