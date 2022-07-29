import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

function Blog({ title, description  }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name='description' content={description} />
      </Head>
      <h1 className='content'>
         {process.env.DB_USER} Password {process.env.DB_PASSWORD}{' '} 
         {process.env.NEXT_PUBLIC_ANALYTICS_ID} 
      </h1>
      <p className={styles.description}><code className={styles.code}>👏 Welcome to RunAsh</code></p>
      <h1 className={styles.title}>
      Live Blog
      </h1>
      <p className={styles.description}>The latest guides,and  announcement</p>
      
       
       <p className={styles.description}><b>Introduction</b>Introduceing the next generation and future of eCommerce -Live streaming for buyers -Live streaming for sellers -Watched live-on-demand -Live video chat -Live influencers community -Live Q and A or poll</p>
       
       <Link href="/posts/first-post">
       <a>Read More &rarr;</a>
       </Link>
       <br />


       <Link href="/blog.js">
       <a className={style.right}>&larr; Back to Blog</a>
       </Link>
     
    </>
  )
}

export default Blog

export async function getServerSideProps() {
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD
  console.log(
    `Connecting to database with username ${user} and password ${password}`
  )
  return {
    props: {
      title: 'Article Title',
      description: 'Article description'
    }
  }
}
