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
    
      
      <p>
        OUR MISSION 
      </p>
        <h1 className={styles.title}>
          We create face to face real experiences to enable and access retailers 
        </h1>
        <p className={styles.description}>We build live streaming products for <b>retailer and businesses.</b><br />And those who aspire to become one.</p>
        <div className={styles.grid}>
        <div className={styles.card}>
        <h3 className={styles.description}>Journey </h3>
         <p className={styles.description}>Journey from a small village in India to Sillicone Valley Y Combinator startup school community member<br />Learn more &rarr;</p>
         </div>
        <div className={styles.card}>
        <h3 className={styles.description}>Oneliner</h3>
          <p className={styles.description}>A live streaming hybrid marketplace for retailing,where retailers can meet to buyers and demonstrate their products<br />Learn more &rarr;</p>
        </div>
        <div className={styles.card}>
         <h3 className={styles.description}>Discipline</h3>
          <p className={styles.description}>Discipline and learning is the bacbone of the development of our startup journy and culture is behavior<br />Learn more &rarr;</p>
        </div>
        <div className={styles.card}>
        <h3 className={styles.description}>What we do</h3>
         <p className={styles.description}>We created new model of live streaming marketplace and environment where retailers face to face demonstrate and presented their products with buyers<br />Learn more &rarr;</p>
       </div>
       <div className={styles.card}>
        <h3 className={styles.description}>What we going to make</h3>
          <p className={styles.description}>We are committed to building a live retail streaming hybrid platform for unorganised retailers and new ways to use physical reality experience<br />Learn more &rarr;</p>
        </div>
        <div className={styles.card}>
         <h3 className={styles.description}>Founders story </h3>
         <p className={styles.description}>🤼 We are both brothers,our business journey started in 2007 from a small offline retail store, the Journey from the school classroom to the board room<br />Learn more &rarr;</p>
       </div>
       
         <h1 className={styles.title}>Executive profile</h1>
         <p className={styles.description}>Board of Directors</p>
        
        

       
         <h1 className={styles.title}>We are backed by Open source</h1>
     
         <h1>Join us and Shape the future of retail</h1> 
          <Button className={styles.button}>View open positions</button>
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
