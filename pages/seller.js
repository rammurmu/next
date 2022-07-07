import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Seller() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Seller</h1>   
        <div className={styles.description}><code className={styles.code}>👏 Welcome to runash</code></div>
        <div className={styles.title}>Next generation<br />and future of <br /><a href="https://">eCommerce</a></div>
        <p>Build own made real selling <br />experience with hybrid live <br />streaming technology</p>
        <div className={styles.title}>Easy to made <br />own business<br>a href="https://">experience</a></div>
        <p>Give your store a real <br />experience on a complete digitization</p>
        <div className={styles.title}>Go live to<br /><a href="https://">worlds of customers</a></div>
        <p>Schedule sell and go live <br /> on real experience in minutes</p>

        <p className={styles.paragraph}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
