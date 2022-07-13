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
          Discipline & culture
        </h1>
        <p classname={styles.title}>
           Discipline & learning is the backbone of the development of our startup journey and culture is behavior
        </p>
        
        <h1 className={styles.title}>
          What we do
        </h1>
        <p className={styles.description}>
          We created new model of marketplace where retailers face to face demonstrate & presentation their products with buyers
        </p>
        
        <h1 className={styles.title}>
         What we going to make
        </h1>
        <p className={styles.description}>
         We are committed to building live streaming platform for unorganised retailers & new ways to use physical reality experience
        </p>
         
        <h1 className={styles.title}>
          Executive profile
        </h1>
        <p className={styles.description}>
          <b>Board of Directors</b> Management team responsible for making the live streaming
        </p>
       


       
        <p className={styles.description}>
          Backed by{' '}
          <code className={styles.code}><a href="https://runash.live/oss">Open Source</a></code>
        </p>
      </main>
      </div>
  )
}
