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
        <a href="https://"><br />Our mission</a>
        </h1>
        <p className={styles.description}>
          We create real-life experiences to enable and access face-to-face
        </p>
        <h2>One-liner</h2>
        <p>A live retail streaming hybrid marketplace for retailing<br /><a href="/">Learn more &rarr;</a></p>
        <h2>What we do</h2>
        <p>We created new model of Marketplace where retailers face to face demonstrate and presented their products with buyers<br />
        <a href="https://">Learn more &rarr;</a>
        </p>
        <h1>What we going to make<h1>
        <p>We are committed to building a live retail streaming hybrid platform for unorganised retailers and new ways to use physical reality experience<br />
        <a href="https://">Learn more &rarr;</a>
        </p>
        
      </main>
      </div>
  )
}
