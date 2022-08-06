import styles from '../styles/Blog.module.css'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <div className={styles.title}>
        <h1>⚖️ Legal</h1>
        <p className={styles.p}>
        PRIVACY POLICY<br />
        Privacy policy-RunAsh a set of public statements declaring to our users/customers how we treat their personal information that you gather on the runash.in website For Indian resident, please Click hereto learn more about your privacy right Welcome to the RunAsh Website (Including all website to which this privacy policy is posted, the"site") which is operated by RunAsh Digital Innovation Technologies Private Limited, and it's affiliates (collectively,"RunAsh","we" "us"and/or "our"). this site provides among other things information about our people, startup and registration process,tool for registration to submit details and go through the registration process,our help/blog, forum for discussion about topics relevant to seller,and profile of seller and business that have subscribed in the RunAsh Live Stream (Collectively the"services") This privacy policy explains what personal information (defined below) we collect,how we use and share the data, and your choices concerning our data practice.This privacy policy is incorporated in to and forms part of our Terms of Use Before using the services or submitting any personal information to runash, please review this privacy policy carefully and contact us if you have any questions.by using the services, you agree to the practices described in this privacy policy.if you do not agree to this privacy policy, please do not access the site or otherwise use the services
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
