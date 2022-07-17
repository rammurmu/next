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
        
        <h1 className={styles.title}>
         The runash mission
        </h1>
        <p className={styles.description}>
           We enabling and accessing face to face,own made real life experience
        </p>
        
        <p className={styles.card}>
         <code className={styles.code}>📝About</code><br /Runash is a live streaming hybrid marketplace and platform for retailing<br />
         <Link href="/posts/second-post">
         <a>Read more &rarr;</a>
         </Link>
         <hr />
          <br />
           G
         <br />
           G
          <br />
            G
         </p>
       
      </main>
      </div>
  )
}
