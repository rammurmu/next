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
        <h2 className={styles.description}>
          Our mission
        </h2>   
        <p className={styles.description}>
           We enabling and accessing face to face,own made real life experience
        </p>
        <h1 className={styles.title}>
         Oneliner
        </h1>   
        <p className={styles.description}>
           A live streaming hybrid marketplace and platform for retailing
        </p>
        <h1 className={styles.title}>
          What we do
        </h1>   
        <p className={styles.description}>
           We create new model of marketplace where retailers face to face demonstrate and presentation their products with buyers
        </p>
        <h1 className={styles.title}>
          What we going to make
        </h1>   
        <p className={styles.description}>
           We are committed to building a live streaming platform for unorganized retailers and new ways to use physical reality experience
        </p>
        <h1 className={styles.title}>
          Executive profile
        </h1>   
        <p className={styles.description}>
           Board of Directors<br />management team responsible for making the live streaming platform
        </p>
      </main>
      </div>
  )
}
