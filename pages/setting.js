import styles from '../styles/Home.module.css'
import Link from 'next/link'
import from Head 'next/head'
import Image from 'next/image'

export default function Setting() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
       <h1>Personal Account Setting</h1>
       <div className={styles.card}>
        <p>General </p>
        </div>
        <div className={styles.card}>
        <p>Ligin</p>
        </div>
        <div className={styles.card}>
        <p>Profile</p>
        </div>
        <div className={styles.card}>
        <p>Billing</p>
        </div>
        <div className={styles.card}>
        <p>Invoice</p>
        </div>
        <div className={styles.card}>
        <p>Token</p>
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
