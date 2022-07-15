import Link from 'next/link'
import styles from '../styles/Blog.module.css'

export default function FirstPost() {
  return (
    <>
      <h1 className={styles.title}>Introduction</h1>
      <p>I would like to introduce runash,runash is a live streaming hybrid marketplace and platform for retailing</p>
      <hr />

      <h2>
        <Link href="/">
          <a>&larr; Back to home</a>
        </Link>
      </h2>
    </>
  );
}


