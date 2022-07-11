import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
      <Head> 
        <div className={styles.description}>{' '}<code className={styles.code}><a href="https://">👏 Welcome to RunAsh &rarr;</a></code></div>
        <ul>
           <li>
              <Link href="/home">
               <a>Home</a>
              </Link>
           </li>
           <li>
              <Link href="/seller">
               <a>Seller</a>
              </Link>
           </li>
           <li>
              <Link href="/buyer">
               <a>Buyer</a>
              </Link>
           </li>
        </ul>

        <h1 className={styles.title}>
         Our<br /><a href="https://">mission</a>
        </h1>
        <p className={styles.description}>
          We enabling & accessing face to face,self made real life experience</p>
        
        <h1 className={styles.title}> 
          <a href="https://">One-liner</a>
        </h1>
        <p className={styles.description}>
          A live streaming hybrid marketplace for retailing</p> 
    </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
          Discipline<br /><a href="https://runash.live/buyer">learning<br/>culture</a>
        </h1>   
        <p className={styles.description}>
          Discipline & learning is the backbone of the development of our startup journey and culture is behavior
        </p>
        <h1 className={styles.title}>
          <a href="https://runash.live/buyer">What we do</a>
        </h1>   
        <p className={styles.description}>
          We created new model of marketplace where retailers face to face demonstrate & presentation their products with buyers
        </p>
         <h1 className={styles.title}>
          What we going<br /><a href="https://runash.live/buyer">to makeing</a>
        </h1>   
        <p className={styles.description}>
         We are committed to building live streaming platform for unorganised retailers & new ways to use physical reality experience
        </p>
        <h1 className={styles.title}>
          Executive<br /><a href="https://runash.live/buyer">profile</a>
        </h1>   
        <p className={styles.description}>
          <b>Board of Directors</b> <br />Management team<br />responsible for making<br />the live streaming<br />
        </p>
        </div>


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
