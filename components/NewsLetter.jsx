import React from 'react'
import styles from "./styles/NewsLetter.module.scss"

const NewsLetter = () => {
  return (
    <section className={styles.root}>
      <div className={styles.cover}>
        <div className={styles.content}>
          <div className={styles.form}>
            <div className={styles.heading}>
              <h2 className={styles.connect}>Connect</h2>
              <h2 className={styles.get}>
                Get <span className={styles.highlight}>latest</span> updates and news about the Act
              </h2>
            </div>
            <div>
              <p className={styles.join}>Join Our Newsletter</p>
              <p>No spam, guaranteed.</p>
            </div>
            <form>
              <div className={styles.inputroot}>
                <div className={styles.inputcover}>
                  <input className={styles.input} type="email" name="email" id="mce-EMAIL" placeholder="example@domain.com" />
                </div>
                <button id="mc-embedded-subscribe" className={styles.button}>
                  Subscribe
                  <span className={styles.buttoncover} ></span>
                </button>
              </div>
            </form>
          </div>
          <div className={styles.social}>
            <div className={styles.socialItem}>
              <a href="#" className={styles.card}>
                <p className={styles.cardTitle}>Blog</p>
                <p className={styles.cardCaption}>Check out articles and news from the Start Up act team and community.</p>
                <p className={styles.learnMore}>
                  <span>Learn more</span>
                </p>
              </a>
            </div>
            <div className={styles.socialItem}>
              <a href="https://techbuzzhub.org/startups-in-uganda-make-progressive-steps/" className={styles.card}>
                <p className={styles.cardTitle}>Learn More</p>
                <p className={styles.cardCaption}>Read this article to learn more about the progress of the Startup Act.</p>
                <p className={styles.learnMore}>
                  <span>Read</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter