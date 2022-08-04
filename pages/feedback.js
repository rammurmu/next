import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Feedback() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Feedback</h1>
        <p>Give you more valuable feedback</p>
        </div>
         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
