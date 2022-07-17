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
        <a href="https://">The live streaming mission</a>
        </h1>
        <p className={styles.description}>
           We enabling and accessing face to face,own made real life experience
        <br />
        <br /><b>About</b><br />A live streaming hybrid marketplace & platform for retailiing
        <br />
        <br /><b>What we do</b><br /> We created new model of marketplace where retailers face to face demonstrate & presentation their products with buyers
        </p>
       
      </main>
      </div>
  )
}
