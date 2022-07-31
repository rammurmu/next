import styles from '../styles/Blog.module.css'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Live Blog</h1>
        <p className={styles.description}>The latest guides and announcement for live streaming</p>
        </div>
        <br />
        <h2>Welcome to first live blog</h2>
         <p>The new live-commerce streaming for real selling and real shopping</p>
        <Link href="/posts/first-post">
       <a>Read More &rarr;</a>
       </Link>
        <br />
       <h2>Introduction the live retail streaming </h2>
        <p>Introducing the new live-commerce streaming for retail</p>
       <br />
       <Link href="/posts/second-post">
       <a>Read more &rarr;</a>
       </Link>
       <br />
         <p>
          <Link href="/home">
            <a><button type="button" className={styles.button}>&larr; Back to Home</button></a>
          </Link>
        </p>
      </main>
    </div>
  )
}
