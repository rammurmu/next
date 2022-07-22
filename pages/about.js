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
        
        <button type="button-primary">Join Us</button><p className={styles.description}>RunAsh startup journey ✨  &rarr;</p>
        
        <div className={styles.card}>
        <h2>☝️<br />Oneliner </h2>
        <p>A live retail streaming hybrid marketplace for retailing<br />Learn more &rarr;</p>
         </div>
         <p className={styles.description}>Discipline and learning</p>
        <div className={styles.card}>
        <h2>👥<br />What we do </h2>
        <p>We created new model of live streaming marketplace and environment where retailers face to face demonstrate and presented their products with buyers<br />Learn more &rarr;</p>
        </div>
        <p className={ styles.description}>Founders story</p>
        <div className={styles.card}>
        <h1>🎥<br />What we going to make</h1>
        <p>We are committed to building a live retail streaming hybrid platform for unorganised retailers and new ways to use physical reality experience<br />Learn more &rarr;</p>
        </div>
         <h1 className={styles.description}>Executive profile</h1>
          <p className={styles.description}>Board of Directors & Management team</p>
        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
         </p>
      </main>
      </div>
  )
}
