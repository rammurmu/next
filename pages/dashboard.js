import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'
import Link from 'next/link'


export default function Dashboard() {
  return (
       <div className={styles.fullWidth}>
      <header>
        <div className={styles.logoRow}>
          <h1 className='logo'>
          <Link href='/'>
          <a>RunAsh</a>
          </Link>
        </h1>
          
        </div>
        <nav className={styles.nav}>
          <div className={styles.navButton}>Home</div>
        </nav>
      </header>
      <main className={styles.main}>
        <span className={styles.heading}>Home</span>
        <span className={styles.subHeading}>Welcome to your application</span>
        <div className={styles.grid}>
        <h1> KPI</h1>
        </div>
          <div className={styles.box}/>
         <h1>Viewer</h1>
       </div>
          <div className={styles.box}/>
        <h1>Update<h1>
        </div>
          <div className={styles.box}/>
         <h1>Insights</h1>
        </div>
      </main>
    </div>
  );
}
       
    
