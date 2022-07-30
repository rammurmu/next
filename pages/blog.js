import styles from '../styles/Blog.module.css'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.card}>
        <h1>Live Blog</h1>
        <p>The latest guides and announcement for live streaming</p>
        </div>
         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
