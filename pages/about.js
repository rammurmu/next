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
      <div className={styles.card}>
        OUR MISSION 
      </div>
     
        <h1 className={styles.title}>
          We enable retailers to build <br />real sell experience.
        </h1>
        <p className={styles.description}>
         We build live streaming platform for retaile businesses 
        </p>
         <button className={styles.button}>Join us</button>

        <div className={styles.grid}>
         <div className={styles.card}>
          <h2>🟧 Affordable</h2>
           <p>Building run and grow fast their business</p>
          </div>
          <div className={styles.card}>
           <h2>🟩 Sustainable</h2>
           <p>Trusted and secure their business </p>
            </div>
           <div className={styles.card}>
           <h2>🟦 Efficient</h2>
           <p>Reduce their operation cost problem  </p>
            </div>

           <p className={styles.description}>Backed by Open Source Contributors</p>
           
 
        <div className={styles.card}>
        <h2>What we do</h2>
         <p>We created new model of live streaming marketplace and environment where retailers can meet to buyers and face to face demonstrate and presentation their products</p>
       </div>
 
       <div className={styles.card}>
        <h2>What we going to make</h2>
          <p>We are committed to building a live retail streaming hybrid platform for unorganised retailers and new ways to use physical reality experience</p>
        </div>
      
        <div className={styles.card}>
          <h2>Founder story</h2>
          <p> 🤼 We are both brothers,our business journey started in 2007 from a small offline retail store, the Journey from the school classroom to the board room <b>Learn more&rarr;</b></p>
         </div>
         <div className={styles.card}>
          <h2>Journey</h2> 
          <p>Journey from a small village in India to Sillicone Valley Y Combinator startup school community member <b>Learn more &rarr;</b></p>
        </div>
        <div className={styles.div}>
          <h2>
           Build and shape the future of retail
          </h2>
          
        </div>
      </div>
      </main>
     <div>
       <ul className={'main-nav'}>
       <li>
         <Link href='/about'>
            <a>About</a>
         </Link>
       </li>
       <li>
         <Link href='/privacy'>
            <a>Privacy</a>
         </Link>
       </li>
       <li>
         <Link href='/help'>
           <a>Help</a>
         </Link>
       </li>
       <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
       </li>     
       <li>
          <Link href='/feedback'>
            <a>Feedback</a>
          </Link>
       </li>     
       <li>
          <Link href='/faq'>
            <a>FAQ</a>
          </Link>
       </li>     
       <li>
          <Link href='/careers'>
            <a>Careers</a>
          </Link>
       </li>     
       <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
       </li>  
       <li>
         <Link href='/media'>
          <a>Media</a>
        </Link>
       </li>  
       <li>
         <Link href='/api'>
         <a>API</a>
       </Link>
       </li> 
       <li>
        <Link href='/status'>
        <a>Status</a>
        </Link>
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
