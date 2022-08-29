import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function PageWithJSbasedFormFeedback() {
  // Handle the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    }

    const JSONdata = JSON.stringify(data)

    // Send the form data to our API and get a response.
    const response = await fetch('/api/form', {
      // Body of the request is the JSON data we created above.
      body: JSONdata,

      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }
  return (
    <div className={styles.container}>
    <main className={styles.main}>
  
      <h1 className={styles.title}>
        <Link href="/">
          <a>Feedback</a>
        </Link>{' '}
      </h1>
      
      <p className={styles.description}>
        Your most valuable feedback make runash better for you
      </p>
     <div className={styles.card1}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />
        <label htmlFor="Phone number">Phone number</label>
        <input type="text" id="Phone number" name="Optional" required />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" required />

        <button type="submit">Submit</button>
      </form>
        

        <ul>
          <li>How satisfied are you with runash live streaming</li>
        <input className={styles.radio} radio id='choice' value='Very satisfied' />
        <input className={styles.checkbox} checkbox id='checkbox' value='Very satisfied' />
        <input className={styles.button} button id='button' vale='very satisfied' />
        <input className={styles.time} time id='appt' name='appt' min='09:00' max='18:00' value='required' />
       </ul>
          
         
         <p className={styles.description}>
          <Link href="/">
            <a>Share your feedback &rarr;</a>
          </Link>
        </p>
      
       <p className={styles.title}>🤔  🥰  🥱  😭</p>


      
      <p className={styles.description}>
         ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ &rarr;
      </p>
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
