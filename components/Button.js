import Link from 'next/link'
import styles from './Button.module.css'

export default function Button(props) {
  return (
    <button
      type="button"
      className={styles.button} {...props} />
}

