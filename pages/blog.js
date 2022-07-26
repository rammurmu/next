import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <h1 className='content'>
        Env User {process.env.DB_USER} Password {process.env.DB_PASSWORD}{' '} 
        Analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID} 
      </h1>
      <h1 className={styles.title}>
      RunAsh Blog
       </h1>
       <p className={styles.description}>The latest guides, announcements,articles,and news about live streaming from RunAsh team
       <br />
       Introduction
       <br />
       Monday,August 28th 2022
       <br />
       We are introducing the next generation and the future of e-commerce</p>{' '}
  
       <Link href="/posts/first-post">
       <a>Read more &rarr;</a>
       </Link>
      </h1>
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
