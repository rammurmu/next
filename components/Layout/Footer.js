import Link from 'Next/link'
import image from 'Next/image'

function Footer() {
  return ( 
        <div className='footer'>
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

export default Footer


