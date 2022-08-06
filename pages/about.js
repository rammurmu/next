import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'


export default function About() {
  return (
    <div className={styles.container}>
      <Head> 
        <title>About</title>
        <meta name="description" content="A live retail streaming platform"/>
        <link rel="icon" href="favicon.icon"/>
      </Head>
      <main className={styles.main}> 
       <box className={styles.card}>🆕 Introducing the next generation and future of retail &rarr;</box> 
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
        
         <p className={styles.p}>🎓<b>Discipline and learning</b><br />
          Discipline and learning is the bacbone of the development of our startup journy and culture is behavior<br />
          <br />
           Learn more &rarr;</p>
        <br />
        <p className={styles.p}>👥<b>What we do</b>We created new model of live streaming marketplace and environment where retailers face to face demonstrate and presented their products with buyers<br />
       <br />
       Learn more &rarr;</p>
      <br />
   
        <br />
        <p className={styles.p}>🎥<b>What we going to make</b><br />We are committed to building a live retail streaming hybrid platform for unorganised retailers and new ways to use physical reality experience<br />
        <br />
         Learn more &rarr;</p>
         <br />
         <p className={ styles.p}>🎤<b>Founders story & journey</b>
         <br />Journey from a small village in India to Sillicone Valley Y Combinator startup school community member<br />
         <br />
          Learn more &rarr;</p>

         <p className={styles.p}>👨‍💻<b>Executive profile</b><br />Board of Directors & management team responsible for making the live retail streaming platform<br />
         <br />
          Learn more &rarr;</p>
         <br />

         
         
        <p className={styles.p}>
          <Link href="/">
            <a><button type="button" className={styles.button}>&larr; Back to Home</button></a>
          </Link>
         </p>
      </main>
     <div>
       <ul className={'main-nav'}>
       <li>
         <Link href='/faq'>
            <a>FAQ</a>
         </Link>
       </li>
       <li>
         <Link href='/blog'>
            <a>Blog</a>
         </Link>
       </li>
       <li>
         <Link href='/influencers'>
           <a>Influencers</a>
         </Link>
       </li>
       <li>
          <Link href='/help'>
            <a>Help</a>
          </Link>
       </li>     
       <li>
          <Link href='/remote'>
            <a>Remote</a>
          </Link>
       </li>     
       <li>
          <Link href='/schedule'>
            <a>Schedule</a>
          </Link>
       </li>     
       <li>
          <Link href='/feedback'>
            <a>Feedback</a>
          </Link>
       </li>     
       <li>
          <Link href='/signin'>
            <a>Signin</a>
          </Link>
       </li>  
       <li>
         <Link href='/contact'>
          <a>Contact</a>
       </li>   
      </ul>
  </div>
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
