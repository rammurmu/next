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
          Our<br /><a href="https://">mission</a>
        </h1>   
        <p className={styles.description}>
           We enabling and accessing face to face,own made real life experience
        </p>
        <h1 className={styles.title}>
          One<br /><a href="https://">liner</a>
        </h1>   
        <p className={styles.description}>
           A live streaming hybrid marketplace for retailing
        </p>
        <h1 className={styles.title}>
          What we<br /><a href="https://">do</a>
        </h1>   
        <p className={styles.description}>
           We create new model of marketplace where retailers face to face demonstrate and presentation their products with buyers
        </p>
      </main>
      </div>
  )
}
