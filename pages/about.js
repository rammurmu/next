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
        <p className={styles.description}>
           <b>Our mission</b><br />We enabling and accessing face to face,own made real life experience
        </p>
          
        <p className={styles.description}>
          <b>One-liner</b><br /> A live streaming hybrid marketplace and platform for retailing
        </p>
      
        <p className={styles.description}>
           <b>What we do</b><br />We create new model of marketplace where retailers face to face demonstrate and presentation their products with buyers
        </p>
        
        <p className={styles.description}>
           <b>What we going to make</b><br />We are committed to building a live streaming platform for unorganized retailers and new ways to use physical reality experience
        </p>
       
        <p className={styles.description}>
           <b>Executive profile</b><br />Board of Directors<br />management team responsible for making the live streaming platform
        </p>
      </main>
      </div>
  )
}
