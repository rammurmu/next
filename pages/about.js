import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
      <Head> 
        <title>About</title>
        <meta name="description" content="A live retail streaming platform"/>
        <link rel="icon" href="favicon.icon"/>
      </Head>
        <main className={styles.main}> 
        <div className={styles.card}>
          <code className={styles.code}>👏 Welcome to runash</code>
        </div> 
        <h1 className={styles.title}>
         The runash mission
        </h1>
        <p className={styles.description}>
           We enabling and accessing face to face,own made real life experience
        </p>
        <div className={styles.code}>
        📝About</code></div>
        <p className={styles.description}>
         Runash is a live streaming hybrid marketplace and platform for retailing
         <Link href="/posts/second-post">
         <a>Read more &rare;</a>
         </Link>
         </p>
       
      </main>
      </div>
  )
}
