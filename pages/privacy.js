import styles from '../styles/Blog.module.css'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>⚖️ Legal<br />Privacy policy</h1>
        <p className={styles.p}>
        Runash a set of public statements declaring to our users and customers, how we treat their personal information that you gather on the runash website for Indian resident, please click here to learn more about your privacy right, Welcome to the runash website,including all website to which this privacy policy is posted, the site, which is operated by Runash Digital Innovation Technologies Private Limited. Company, and its affiliates collectively,runash,we us and or our. this site provides among other things information about our people, startup and registration process,tool for registration to submit details and go through the registration process,our help or blog, forum for discussion about topics relevant to seller,and profile of seller and business that have subscribed in the runash live streaming collectively the services. This privacy policy explains what personal information defined below we collect,how we use and share the data, and your choices concerning our data practice.This privacy policy is incorporated in to and forms part of our terms of use before using the services or submitting any personal information to runash, please review this privacy policy carefully and contact us if you have any questions.by using the services, you agree to the practices described in this privacy policy.if you do not agree to this privacy policy, please do not access the site or otherwise use the services
        </p>
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
