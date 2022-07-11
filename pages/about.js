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
          We enabling & accessing<br />face to face,self made<br />real life experience</p>
        <Image
        alt="live"
        src="https://"
        width={1200}
        height={400}
        />
        <div className={styles.description}>{' '}<code className={styles.code}><a href="https://runash.live/schedule">📺Go live</a></code></div>
        <h1 className={styles.title}> 
          One<br /><a href="https://">liner</a>
        </h1>
        <p className={styles.description}>
          A live streaming hybrid<br />marketplace for retailing</p> 
    </Head>
        <main className={styles.main}>
        <h1 className={styles.title}>
          Discipline<br /><a href="https://runash.live/buyer">& learning</a>
        </h1>   
        <p className={styles.description}>
          Discipline & learning is the backbone of the development<br />of our startup journey
        </p>
        <h1 className={styles.title}>
          What<br /><a href="https://runash.live/buyer">we do</a>
        </h1>   
        <p className={styles.description}>
          We created new model of<br />marketplace where retailers<br />face to face demonstrate & presentation their products<br />with buyers
        </p>
         <h1 className={styles.title}>
          What we<br /><a href="https://runash.live/buyer">going to make</a>
        </h1>   
        <p className={styles.description}>
         We are committed to building<br />live streaming platform<br />for unorganised retailers<br />& new ways to use physical reality experience
        </p>
        <h1 className={styles.title}>
          Executive<br /><a href="https://runash.live/buyer">profile</a>
        </h1>   
        <p className={styles.description}>
          <b>Board of Directors</b> <br />Management team<br />responsible for making<br />the live streaming<br />
        </p>
        
        
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
        </div>


        <div>
        <p className={styles.description}>
          Backed by{' '}
          <code className={styles.code}><a href="https://runash.live/oss">Open Source</a></code><br />Supporters
        </p>
    
       <a
         href="https://Google.form.com">
         <p className={styles.card}>Licence:MIT | GitHub ✨</p>
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
