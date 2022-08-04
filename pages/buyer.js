import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Buyer() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seller</title>
        <meta name="description" content="Become a seller" />
        <link rel="icon" href="/favicon.icon" />  
      </Head>
        <main className={styles.main}>
        
        <p className={styles.description}><code className={styles.code}>👏 Welcome to RunAsh</code></p>
        <h1 className={styles.title}>
         NextGen shopping <br /><a href="https://">experience</a>
        </h1>
        <p className={styles.description}>
         You can meet to sellers with face to face real life experience
        </p>
        <button type="Watch live ">Watch live</button>
      <input className={styles.input} placeholder="Search..." />
       <h2>Categories</h2>
      <div>
       <ul className={'main-nav'}>
       <li>
         <Link href='/product'>
            <a>All</a>
         </Link>
       </li>
       <li>
         <Link href='/product1'>
           <a>Handicraft</a>
         </Link>
       </li>
       <li>
          <Link href='/product1'>
            <a>KhadiWear</a>
          </Link>
       </li>     
       <li>
          <Link href='/product3'>
            <a>BoombooCraft</a>
          </Link>
       </li>     
       <li>
          <Link href='/product4'>
            <a>Furnishing</a>
          </Link>
       </li>     
       <li>
          <Link href='/product 5'>
            <a>Electronic</a>
          </Link>
       </li>     
       <li>
          <Link href='/product 6'>
            <a></a>
          </Link>
       </li>     
      </ul>
  </div>
      <div className={styles.grid}>
          <a href="https://productslist" className={styles.card}>
            <h2>🍎🍋Fruit</h2>
            <p>Organic & fresh </p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>🥦🍅Vegetable</h2>
            <p>Organic & fresh  </p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>🥫🍶Grocery</h2>
            <p>Organic </p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>🌴🌺Flower</h2>
            <p>Organic & fresh </p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>🍗🥩Non veg</h2>
            <p>Organic & fresh</p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>🍚🥛Dairy</h2>
            <p>Organic & fresh</p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>🍞🥞Bakeri </h2>
            <p>Organic & fresh</p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>🥜🥖Dry food</h2>
            <p>Organic </p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>🐕‍🦺🐅Animal</h2>
            <p>Organic animal </p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>🐓🦜Bird</h2>
            <p>Organic bird</p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>🐟🦐C food</h2>
            <p>Organic fresh</p>
          </a>
          <a href="https://runash.live/seller" className={styles.card}>
            <h2>🥼🥻Fashion</h2>
            <p>Desi fashion </p>
          </a>    
      </div>
     <br />
     <p>Real life 🛍️ shopping schedule now </p>
     <br />
    <div className={styles.grid}>
    <p className={styles.card}>📅 Date & Time⏱️</p>
    </div>
    <button type="Schedule">Schedule</button>
    <h1>The future of organic retail</h1>
     <p>One stop solution for organic products</p>
     </main> 
     <div>
       <ul className={'main-nav'}>
       <li>
         <Link href='/faq'>
            <a>FAQ</a>
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
