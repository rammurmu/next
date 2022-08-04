import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Influencers() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Live streaming influencers community</h1>
        <p>INFLUENCER PROGRAM<br />The role of runash influencers<br /> If products and services are being bought and sold online,you can automatically (and correctly)assume that such products and services are also marketed online.This is where influencers come in .Influencers are trusted have loyal followers, and are highly entertaining.It is often why brands will have brand ambassadors representing them.Acelebrity or an influencer will have the power to take the brand and the products to the next level with their extension reach Lear more</p>
        </div>
         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
