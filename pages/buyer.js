import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Buyer.module.css'
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
        <h1 className={styles.title}>
         NextGen shopping <br /><a href="https://">experience</a>
        </h1>
        <p className={styles.description}>
         You can meet to sellers with face to face real life experience
        </p>
      <div className={styles.grid}>
      <code className={styles.code}>🍎🍋 Fruit</code><br />
      <code className={styles.code}>🥦🍅 Vegetable</code><br />
      <code className={styles.code}>🥫🍶 Grocery</code><br />
      <code className={styles.code}>🌴🌺 Flower</code><br />
      <code className={styles.code}>🍗🥩 Non veg</code><br />
      <code className={styles.code}>🍚🥛 Dairy food</code><br>
      <code className={styles.code}>🍞🥞Bakeri food</code><br />
      <code className={styles.code}>🥜🥖Dry food</code><br />
      <code className={styles.code}>🧥🥻 Fashion</code><br />
      </div>
     </main> 
    </div> 
  )
}
