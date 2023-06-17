import React from 'react'
import styles from "./styles/Header.module.scss"

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>The <span className={styles.highlight}>Uganda</span> Startup Act</h1>
        <p className={styles.punchline}>We will work together to implement the law that will support the growth of the tech startup ecosystem.</p>
      </div>
    </header>
  )
}
