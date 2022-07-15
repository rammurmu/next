import Link from 'next/link'
import Head from 'next/head'

function Blog() {
  return (
       <div className={styles.container}>
       <Head> 
        <title>Blog</title>
        <meta name="description" content="A live retail streaming platform"/>
        <link rel="icon" href="favicon.icon"/>
       </Head>
        <main className={styles.main}>
        <h1 className="title">
         Read{' '}
          <Link href="/posts/first-post">
          <a>this page!</a>
          </Link>
        </h1>
       </main>
       </div>
 )
}

export default Blog
