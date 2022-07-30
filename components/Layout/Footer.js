import Link from 'Next/link'
import Image from 'Next/image'
import Footer from '..components/Footer.css'

function Footer() {
  return ( 
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
 )
}

export default Footer


