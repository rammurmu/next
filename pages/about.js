import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'


export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        
        <div className={styles.description}>{' '}<code className={styles.code}>👏 Welcome to RunAsh</code></div>
        <h1 className={styles.title}>
           <a href="https://"> Mission</a>
        </h1>
         <p className={styles.description}>We enabling and accessing<br /> face to face,self made <br />and real experience to access <br />physical reality</p>
        <div className={styles.description}>
          Backed By {' '}<code className={styles.code}><b>YC</b></code></div>
        <div className={styles.description}>
          <h2>Oneliner</h2>
            <p>A live streaming hybrid marketplace for retailing,where retailer face to face demonstrate, presentation their products with buyers </p>
        </div>

        <div className={styles.description}>
         <h2>Discipline</h2>
         <p>Discipline & learning is the backbone of the development of runash startup journey</p>
        </div>

        <div className={styles.description}>
         <h2>What we do</h2>
         <p>We created new model of marketplace where retailers face to face demonstrate & presentation their products with buyers</p>
        </div>

        <div className={styles.description}>
         <h2>What we going to make</h2>
         <p>We are commite to building live streaming platform & new ways to use physical reality experience</p>
        </div>

       
       <div className={styles.description}>
       <h2>Executive Profiles</h2>
       <p><b>Board of Directors</b><br />Management team responsible for making the live retail streaming platform.</p>
       </div>
      
       </Head>
       <main className={styles.main}>
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
