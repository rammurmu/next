import Link from 'next/link';
import styles from '../styles/Blog.module.css'

export default function FirstPost() {
  return (
    <>
      <h1>Blog</h1>
      <p>The latest news about RunAsh from the RunAsh team</p>
      <hr />

      <h2>
        <Link href="/">
          <a>&larr; Back to home</a>
        </Link>
      </h2>
    </>
  );
}


