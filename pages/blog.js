import styles from '../styles/Blog.module.css'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Live Blog</h1>
        <p>The latest guides and announcement for live streaming</p>
       
        <Link href="/posts/first-post">
       <a>Read More &rarr;</a>
       </Link>
       </div>
       <div className={styles.title}>
       <h1>Welcome to first live blog</h1>
        <p>welcome the new live-commerce streaming for retail</p>
       <Link href="/posts/second-post">
       <a>Read more &rarr;</a>
       </Link>
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
