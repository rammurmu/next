import styles from '../styles/Blog.module.css'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>
         Privacy policy
        </h1>
       <p className={styles.description}>Public statements declaring to our users and customers</p>
       </div>
       <div className={styles.card}>
       <p> Runash a set of public statements declaring to our users and customers, how we treat their personal information that you gather on the runash website for Indian resident, please click here to learn more about your privacy right, Welcome to the runash website,including all website to which this privacy policy is posted, the site, which is operated by Runash Digital Innovation Technologies Private Limited. Company, and its affiliates collectively,runash,we us and or our. this site provides among other things information about our people, startup and registration process,tool for registration to submit details and go through the registration process,our help or blog, forum for discussion about topics relevant to seller,and profile of seller and business that have subscribed in the runash live streaming collectively the services. This privacy policy explains what personal information defined below we collect,how we use and share the data, and your choices concerning our data practice.This privacy policy is incorporated in to and forms part of our terms of use before using the services or submitting any personal information to runash, please review this privacy policy carefully and contact us if you have any questions.by using the services, you agree to the practices described in this privacy policy.if you do not agree to this privacy policy, please do not access the site or otherwise use the services</p>
        </div>
        
         
      </main>
     <div className={styles.container}>
       <ul className={'main-nav'}>
       <li>
         <Link href='/about'>
            <a>About</a>
         </Link>
       </li>
       <li>
         <Link href='/privacy'>
           <a>Privacy</a>
         </Link>
       </li>
       <li>
          <Link href='/help'>
            <a>Help</a>
          </Link>
       </li>     
       <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
       </li>     
       <li>
          <Link href='/feedback'>
            <a>Feedback</a>
          </Link>
       </li>     
       <li>
          <Link href='/faq'>
            <a>FAQ</a>
          </Link>
       </li>     
       <li>
          <Link href='/careers'>
            <a>Careers</a>
          </Link>
       </li> 
       <li>
          <Link href='/bolg'>
            <a>Blog</a>
          </Link>
       </li>     
       <li>
          <Link href='/media'>
            <a>Media</a>
          </Link>
       </li> 
       <li>
          <Link href='/api'>
            <a>API</a>
          </Link>
       </li>                 
       <li>
          <Link href='/status'>
            <a>Status</a>
          </Link>
       </li>                                 
      </ul>
    </div>
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
