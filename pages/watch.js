import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/age'

export default function Watch() {
  return (
    <div className={styles.container}>
     <Head>
       <title>Watch</title>
       <meta name="description" content="Watching live on demand" />
       <link rel="icon" href="/favicon.icon" />
     </Head>
     <main className={styles.main}>
        <h1>Live on Demand</h1>
        <p>Watched previous live streaming selling and find an seller</p>
       <div className={styles.grid}>
       <a href="https://sellerid"  className={styles.card}>
       <h2>Vegetable</h2>
        <p>Bokaro,Jh India</p>
         <code className={styles.code}>Seller</code>
         <button className={styles.button}>Watch<button>
       </a>
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
          <Link href='/bolg'>
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
    </div>
  )
}
