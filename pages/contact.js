import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Contact Us</h1>
        <p>Reach anytime and connect with us </p>
        </div>
       <div className={styles.code}>New</code>
         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
