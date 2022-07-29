import Link from 'next/link'
import styles from './Button.module.css'

export function Button() {
  return (
    <button
      type="button"
      className={styles.button}
    >
      Learn
    </button>
  )
}
