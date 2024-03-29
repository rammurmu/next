import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Button from '../components/Button'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.icon" />  
      </Head>
        <main className={styles.main}>
        
       <div className={styles.cards}><b>Latest updates:</b>Introducing the next generation & future of live retail streaming &rarr;</div>
        
        <h1 className={styles.title}>
         Live retail streaming <br /><a href="https://">platform</a>
         </h1>
         <p className={styles.description}>
          Where the retailers build own made the live streaming store
         </p>
         
         <button className={styles.button}>Go Live</button> 
         
         <p>Get started free &rarr;</p>

        <div className={styles.grid}>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>🛒Real Selling &rarr;</h2>
            <p>Where retailers can meet to buyers & demonstrate their products </p>
          </a>

          <a href="https://runash.live/buyer" className={styles.card}>
            <h2>🛍️Real Buying &rarr;</h2>
            <p>Where buyers can meet to sellers & shopping organic products  </p>
          </a>

          <a
            href="https://runash.live/remote"
            className={styles.card}
          >
            <h2>🙋Real Chat &rarr;</h2>
            <p>Follow and get started live video chatting</p>
          </a>

          <a
            href="https://runash.live/influencer"
            className={styles.card}
          >
            <h2>🧑‍🤝‍🧑Influencers &rarr;</h2>
            <p>
              Live influencers community here you can support businesses 
            </p>
          </a>

          <a
            href="https://runash.live/about"
            className={styles.card}
          >
            <h2>🎓About Us  &rarr;</h2>
            <p>
              A live retail streaming hybrid marketplace  for retailing
            </p>
          </a>

          <a
            href="https://runash.live/mobile"
            className={styles.card}
          >
            <h2>📱Mobile App &rarr;</h2>
            <p>
              Available for iOS and Android 
            </p>
          </a>

          <a
            href="https://runash.live/video"
            className={styles.card}
          >
            <h2>👩‍💻Remote Jobs &rarr;</h2>
            <p>
              Find the best startup jobs curated by runash remote team </p>
          </a>

          <a
            href="https://runash.live/streaming"
            className={styles.card}
          >
            <h2>📽️Live stream &rarr;</h2>
            <p>
              Schedule a live streaming free 
            </p>
          </a>

          <a
            href="https://runash.live/watched"
            className={styles.card}
          >
            <h2>📺Live watch &rarr;</h2>
            <p>
              Watched live on demand  streaming  free
            </p>
          </a>

          <a
            href="https://runash.live/experience"
            className={styles.card}
          >
            <h2>👩‍🎤Real Q & A &rarr;</h2>
            <p>
              Ask questions real-time via a live stream chat   
            </p>
          </a>

          <a
            href="https://runash.live/diffserve"
            className={styles.card}
          >
            <h2>📊Votes & Polls &rarr;</h2>
            <p>
              Give instant feedback opinion & polling for sell
            </p>
          </a>

          <a
            href="https://runash.live/works"
            className={styles.card}
          >
            <h2>🎙️Audio Stream &rarr;</h2>
            <p>
              Schedule a live audio stream free
            </p>
          </a>
        </div>
       
        <h2 className={styles.description}>BEGIN YOUR <b><a href="https://">LIVE STREAMING</a></b> JOURNEY<br /> ✨</h2>
       <div className={styles.cards}>Give your feedback to improve live sell and buy experience better<Link href="/" ><a>&rarr;</a></Link></div>
      
      
      <label htmlFor="Sign up for updates">Sign up for updates</label>
      
      <input className={styles.input} placeholder="email address..." pattern="https://runash.in" size="50" required />
      
      <button type="button">SUBSCRIBE</button>
      <div>
      </div>
      </main>
      <div className={styles.container}>
      <nav className={'header'}>
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
          <Link href='blog'>
            <a>Blog</a>
          </Link>
       </li>     
       <li>
          <Link href='/media'>
            <a>Media</a>
          </Link>
       </li> 
       <li>
          <Link href='/API'>
            <a>API</a>
          </Link>
       </li>                 
       <li>
          <Link href='/status'>
            <a>Status</a>
          </Link>
       </li>                                 
      </ul>
     </nav>
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
