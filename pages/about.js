import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>About</h1>
        <div className={styles.description}>{' '}<code className={styles.code}>👏 Welcome to RunAsh</code></div>
        <div className={styles.title}><a href="https://">Mission</a></div>
         <p><b>Enabling and accessing face to face,self made and real experience to access physical reality</b></p>
        <div className={styles.grid}>
        <div className={styles.description}>
          <h1>Oneliner</h1>
            <p>A live streaming hybrid marketplace for retailing,where retailer face to face demonstrate, presentation their products with buyers </p>
        </div>

        <div className={styles.description}>
         <h1>Discipline</h1>
         <p>Discipline & learning is the backbone of the development of runash startup journey</p>
        </div>

        <div className={styles.description}>
         <h1>What we do</h1>
         <p>We created new model of marketplace where retailers face to face demonstrate & presentation their products with buyers</p>
        </div>

        <div className={styles.description}>
         <h1>What we going to make</h1>
         <p>We are commite to building live streaming platform & new ways to use physical reality experience</p>
        </div>

       
       <div className={styles.description}>
       <h1>Executive Profiles</h1>
       <p><b>Board of Directors</b><br />Management team responsible for making the live retail streaming platform.</p>
       </div>
       </div>
       

       <p className={styles.description}>Backed by{' '}<code className={styles.code}>Open Source </code>Supporters</p>
       <>
       <p><a href="https://" title="title">Licence: MIT GitHub</a></p>
       
       </>

      


      
         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
        <footer className={styles.footer}>
        <a
          href="https://runash.in"
          target="_blank"
          rel="noopener noreferrer"
        >
         © 2022 RunAsh.All rights reserved. {' '}
          <span className={styles.logo}>
            <Image src="" alt=" " width={72} height={16} />
          </span>
        </a>
     </footer>
    </main>
    </div>   
  )
}
