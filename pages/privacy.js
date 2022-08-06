import styles from '../styles/Blog.module.css'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Privacy policy</h1>
        <p class name={styles.p}>
         ⚖️ Legal 
        </p>
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
