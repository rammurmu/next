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
       <h2>Categories</h2>
      <div>
       <nav className="header">
       <ul className={'main-nav'}>
       <li>
         <Link href='/fruit'>
            <a>Fruit</a>
         </Link>
       </li>
       <li>
         <Link href='/vegetable'>
           <a>Vegetable</a>
         </Link>
       </li>
       <li>
          <Link href='/grocery'>
            <a>Grocery</a>
          </Link>
       </li>     
       <li>
          <Link href='/flowe'>
            <a>Flower</a>
          </Link>
       </li>     
       <li>
          <Link href='/nonveg'>
            <a>NonVeg</a>
          </Link>
       </li>     
       <li>
          <Link href='/cfood'>
            <a>cFood</a>
          </Link>
       </li>     
       <li>
          <Link href='/dairy'>
            <a>Dairy</a>
          </Link>
       </li>     
      </ul>
     </nav>
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
     <p>The future of organic retail</p>
    
    <button type="Schedule">Schedule</button>
    <div className={styles.grid}>
    <p class name={styles.card}>Date 📅 and Time ⏱️ Now</p>
    <div>
    </div>
     </main> 
    </div> 
  )
}
