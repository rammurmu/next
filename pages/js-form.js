import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function PageWithJSbasedForm() {
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
    <div className={styles.card}>
      <h1 className={styles.title}>
        <Link href="/">
          <a>RunAsh</a>
        </Link>{' '}
      </h1>
      <hr />
      <p className={styles.description}>
        Create your account
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />
        <label htmlFor="Phone number">Phone number</label>
        <input type="text" id="Phone number" name="Optional" required />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" required />

        <button type="sign up">Sign Up</button>
      </form>
      <hr />
      <p className={styles.description}>
        Have an account? Sign in &rarr;
      </p>
     </div>
     </main>
    </div>
  )
}
