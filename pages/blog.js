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
        <Link href="/posts/first-post">
       <a>Read More &rarr;</a>
       </Link>
       <br />
       <Link href="/blog.js">
       <a>Read more &rarr;</a>
       </Link>
     
         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
