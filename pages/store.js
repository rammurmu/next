import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Store() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>Live streaming store</h1>
        <p>Create your store</p>
        </div>
       
        <div className="dropdown">
          <span>See more</span>
        <div className="dropdown-content">
         <p>runash!</p>
       </div>
       </div>
        <h1 className={styles.description}>Dropdown</h1>
       
       <div className="dropdown">
         <button className="dropbtn">Dropdown</button>
       <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
       </div>
       </div>

       

       <ul1>
          <li1><a href="#home">Home</a></li1>
          <li1><a href="#news">About</a></li1>
          <li1 className="dropdown">
             <a href="" className="dropbtn">Dropdown</a>
       <div className="dropdownContent">
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
       </div>
       </li1>
       </ul1>





         <p className={styles.description}>
          <Link href="/">
            <a>&larr; Back to home</a>
          </Link>
        </p>
      </main>
    </div>
  )
}
