import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

function Blog() {
  return (
      <Head>
        <title>Blog</title>
        <meta name='description' content={description} />
      </Head>
     <div className={styles.container}>
      <h1 className={styles.title}>
      Live Blog
      </h1>
      <p className={styles.description}>The latest guides,and  announcement</p>
       
       <Link href="/posts/first-post">
       <a>Read More &rarr;</a>
       </Link>
       <br />


       <Link href="/blog.js">
       <a>&larr; Back to Blog</a>
       </Link>
       </div>
 )
}

export default Blog

