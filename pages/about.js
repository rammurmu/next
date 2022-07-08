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
        <h2 className={styles.description}>Vision:Enabling and accessing face to face,self made and real experience to access physical reality</h2>
        <div className={styles.grid}>
         <div className={styles.description}>
         <h2>Oneliner</h2>
         <p>RunAsh is a live streaming hybrid marketplace for retailing,where retailer face to face demonstrate, presentation their products with buyers </p>
        </div>

        <div className={styles.description}>
         <h2>Discipline</h2>
         <p>Discipline and learning is the backbone of the development of runash startup journey</p>
        </div>

        <div className={styles.description}>
         <h2>What we do</h2>
         <p>We created new model of marketplace where retailers face to face demonstrate & presentation their products with buyers</p>
        </div>

        <div className={styles.description}>
         <h2>What we going to make</h2>
         <p>We are commite to building live streaming platform and new ways to use physical reality experience</p>
        </div>

       
       <div className={styles.description}>
       <h2>Executive Profiles</h2>
       <p>Management team responsible for making the live retail streaming platform. immediate market-specific knowledge,& experience in implementing the business plans. & changing the nature of retailing & redefine the business mode</p>
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
    </main>
    </div>
    </div>
  )
}
