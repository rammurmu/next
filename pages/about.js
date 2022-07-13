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
        <p classname={styles.description}>
           Discipline & learning is the backbone of the development of our startup journey and culture is behavior
        </p>
      </div>
      </main>
  )
}
