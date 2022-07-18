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
        Its our startup<a href="https://"><br />mission</a>
        </h1>
        <p className={styles.description}>
           We enabling and accessing face to face,own made real life experience
        </p>
         
       
      </main>
      </div>
  )
}
