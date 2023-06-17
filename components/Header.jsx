import React from 'react'
import styles from "./styles/Header.module.scss"

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <div className={styles.div3}>
              <div className={styles.content}>
                <h1 className={styles.title}>The <span className={styles.highlight}>Uganda</span> Startup Act</h1>
                <p className={styles.punchline}>We will work together to implement the law that will support the growth of the tech startup ecosystem.</p>
                <div className={styles.buttons}>
                  <a href="#about" className={styles.aboutBtn}>Learn more</a>
                  <a href="#about" className={styles.contribute}>Contribute</a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
