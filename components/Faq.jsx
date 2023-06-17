import React from 'react'
import styles from "./styles/Faq.module.scss"

const FAQ = () => {
  return (
    <section className={styles.root}>
      <div className={styles.cover}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <div className={styles.flex}>
            <div className={styles.column}>
              <article className={styles.article}>
                <h3>Who is leading this initiative?</h3>
                <p>The Uganda Startup Act project is a joint initiative by Uganda’s tech ecosystem and the Presidency to harness the potential of our digital economy through co-created regulations. While this is our act; it is being project managed by the Ventures Platform Foundation and supervised by the Presidential Strategic Advisory Group composed of stakeholder representatives from the tech-startup ecosystem in Uganda.</p>
              </article>

              <article className={styles.article}>
                <h3>How do we ensure all tech sectors are covered?</h3>
                <p>By jointly reviewing the drafts of the act and giving your inputs. You can participate by clicking on here</p>
              </article>

              <article className={styles.article}>
                <h3>What is the scope of this project?</h3>
                <p>We plan that this act is submitted to the NASS by October and passed by 2021. Visit the project timeline and subscribe to the newsletter to follow the journey.</p>
              </article>
            </div>
            <div className={styles.column}>
              <article className={styles.article}>
                <h3>Has this been successful anywhere else?</h3>
                <p>Yes. Other African countries like Senegal and Tunisia have passed their own startup bills.</p>
              </article>
              <article className={styles.article}>
                <h3>How is this different from past attempts?</h3>
                <p>We are adopting a collaborative approach to drive this cause. We have tagged this collaborative framework the Big Tent approach, which in other words, means the bill is owned by the ecosystem. The process of engagement involves all relevant stakeholders in the startup ecosystem including the government (both at regional and federal levels, as well as across the legislative, executive and judiciary arms of government to develop and submit the bill to be signed into law. This is an initiative together with #i4Policy, and, is being supported by the Innovation for Policy Foundation, an organization working to increase public policy co-creation that has experience in facilitating the co-design of startup policy and legislative frameworks in more than a dozen African countries. We are also identifying existing laws/regulations and harmonising them into this bill. We are also using the bill as an opportunity to update existing but outdated laws.</p>
              </article>
            </div>

          </div>


        </div>
      </div>
    </section>
  )
}

export default FAQ