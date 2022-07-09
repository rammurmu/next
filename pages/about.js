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
         <p className={styles.description}>We enabling and accessing<br /> face to face,self made <br />real life experience </p>
        <div className={styles.description}>
          Backed by {' '}<code className={styles.code}><b>YC</b></code></div>
        <h1 className={styles.title}>
          <a href="https://">Oneliner</a>
        </h1>
           <p>A live streaming hybrid<br /> marketplace for retailing</p>
        

        <h1 className={styles.title}>
         <a href="https://">Discipline</a>
        </h1>
         <p>Discipline & learning is the<br /> backbone of the development<br /> of our startup journey</p>
       

        <h1 className={styles.title}>
         <a href="https://">What we do</a>
        </h1>
         <p>We created new model of<br /> marketplace where retailers<br /> face to face demonstrate &<br /> presentation their products<br /> with buyers</p>
        

        <h1 className={styles.title}>
         <a href="https://">What we going to make</a>
        </h1>
         <p>We are commite to building<br /> live streaming platform<br />for unorganised retailers <br />& new ways to use physical<br /> reality experience</p>
        

       
       <h1 className={styles.title}>
       <a href="https://">Executive Profiles</a>
       </h1>
       <p><b>Board of Directors</b><br />Management team<br /> responsible for making<br /> the live retail streaming<br /> platform.</p>
       
      
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
