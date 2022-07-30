import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

function Blog() {
  return (
      <Head>
        <title>Blog</title>
        <meta name='description' content={description} />
      </Head>
      <p className={styles.description}><code className={styles.code}>👏 Welcome to RunAsh</code></p>
      <h1 className={styles.title}>
      Live Blog
      </h1>
      <p className={styles.description}>The latest guides,and  announcement</p>
      
       
       <p className={styles.p}><b>Introduction</b><br />Introduceing the next generation and future of eCommerce <br />Live streaming for buyers <br />Live streaming for sellers <br />Watched live-on-demand <br />Live video chat<br /> Live influencers community<br /> Live Q and A or poll</p>
       
       <Link href="/posts/first-post">
       <a>Read More &rarr;</a>
       </Link>
       <br />


       <Link href="/blog.js">
       <a>&larr; Back to Blog</a>
       </Link>
     
  )
}

export default Blog

