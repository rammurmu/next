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
          <b>Discipline & culture</b><br />Discipline & learning is the backbone of the development of our startup journey and culture is behavior
        </p>
        
        <p className={styles.description}>
          <b>What we do </b><br />We created new model of marketplace where retailers face to face demonstrate & presentation their products with buyers
        </p>
        
        <p className={styles.description}>
         <b>What we going to make</b><br />We are committed to building live streaming platform for unorganised retailers & new ways to use physical reality experience
        </p>
         
        <p className={styles.description}>
          <b>Executive profile<br />Board of Directors</b><br />Management team responsible for making the live streaming
        </p>
       


        <div>
        <p className={styles.description}>
          Backed by{' '}
          <code className={styles.code}><a href="https://runash.live/oss">Open Source</a></code>
        </p>
    
       <a
         href="https://Google.form.com">
         <p className={styles.card}>Licence:MIT | GitHub✨</p>
       </a>
      </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://runash.in"
          target="_blank"
          rel="noopener noreferrer"
        >
         © 2022 RunAsh. {' '}
          <span className={styles.logo}>
            <Image src="" alt=" " width={72} height={16} />
          </span>
        </a>
     </footer>
  </div>
  )
}
