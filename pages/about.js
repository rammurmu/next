import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'
import Button from '../components/Button'

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
        <button type="sign up">Join Us</button>
      
        <p className={styles.p}><b>RunAsh startup journey</b> ✨
        <br />
         Journey from a small village in India to Sillicone Valley Y Combinator startup school community member
        </p>
        <br />
      
        
        
        <p className={styles.p}>🤔<b>Oneliner</b><br />A live retail streaming hybrid marketplace for retailing<br />
         <br />
          Learn more &rarr;</p>
        <br />
        
         <p className={styles.p}>🎓<b>Discipline and learning</b>
          <br />
          Discipline and learning is the bacbone of the development of our startup journy and culture is behavior
          <br />
         <br />
           Learn more &rarr;</p>
      
     
        <br />
        <p className={styles.p}>👥<b>What we do</b>We created new model of live streaming marketplace and environment where retailers face to face demonstrate and presented their products with buyers
       <br />
       <br />
       Learn more &rarr;</p>
      <br />
        <p className={styles.p}>🎥<b>What we going to make</b></p>
        <br />
        <p className={styles.p}>We are committed to building a live retail streaming hybrid platform for unorganised retailers and new ways to use physical reality experience
        <br />
        <br />
         Learn more &rarr;</p>
         <br />
         <p className={ styles.p}>🎤<b>Founders story & journey</b>
         <br />Journey from a small village in India to Sillicone Valley Y Combinator startup school community member
         <br />
         <br/>
          Learn more &rarr;</p>

         <p className={styles.p}>👨‍💻<b>Executive profile</b><br />Board of Directors & management team responsible for making the live retail streaming platform
         <br />
         <br >
          Learn more &rarr;</p>
         <br />

         
         
        <p className={styles.p}>
          <Link href="/">
            <a><button type="button" className={styles.button}>&larr; Back to Home</button></a>
          </Link>
         </p>
      </main>
      </div>
  )
}
