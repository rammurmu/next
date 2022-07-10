import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Seller.module.css'
import Link from 'next/link'

export default function Seller() {
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
              <Link href="/about">
               <a>About</a>
              </Link>
           </li>
           <li>
              <Link href="/buyer">
               <a>Buyer</a>
              </Link>
           </li>
        </ul>
        
        <h1 className={styles.title}>
         NextGen and future<br /><a href="https://"> of retail</a>
        </h1>
        <p className={styles.description}>
          Build own made real life <br />selling experience with <br />hybrid technology </p>
        <Image
        alt="live"
        src="https://"
        width={1200}
        height={400}
        />
        <div className={styles.description}>{' '}<code className={styles.code}><a href="https://runash.live/schedule">Get started</a></code></div>
        <h1 className={styles.title}> 
          Physical<a href="https://">reality<br />selling</a>
        </h1>
        <p className={styles.description}>
            Face to face<br />real life interactive selling <br />experience </p> 
    </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
          Make own<a href="https://runash.live/buyer">business</a><br /><a href="https://runash.live/buyer">experience</a>
        </h1>   
        <p className={styles.description}>
          Give your store a real experience on a complete real digitization <br />
          <code className={styles.code}><a href="https://runash.live/schedule">👩‍💻Make own</a></code>
        </p>
        
        <div className={styles.card}><code className={styles.code}>👥Face2Face</code></div>
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
              Give instant feedback opinion & polling
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


        <div>
        <p className={styles.description}>
          Begin your RunAsh{' '}
          <code className={styles.code}><a href="https://runash.live/oss">journey</a></code>
        </p>
    
       <a
         href="https://Google.form.com">
         <p className={styles.card}>Give your feedback ✨ &rarr;</p>
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
