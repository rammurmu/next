import styles from '../styles/Blog.module.css'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Live Blog</h1>
        <p>The latest guides and announcement for live streaming</p>
        </div>
        <h1>Welcome to first live blog</h1>
        <Link href="/posts/first-post">
       <a>Read More &rarr;</a>
       </Link>
       
       <div className={styles.title}>
       <h1>Introduction the live retail streaming </h1>
        <p>Introducing the new live-commerce streaming for retail</p>
       </div>
       <Link href="/posts/second-post">
       <a>Read more &rarr;</a>
       </Link>
       
         <p className={styles.description}>
          <Link href="/home">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
