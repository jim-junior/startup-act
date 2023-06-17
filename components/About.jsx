import React from 'react'
import styles from "./styles/About.module.scss"

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h1 className={styles.title} id="about" >About the Startup Act</h1>
        <div className={styles.description}>
          <p>The Uganda Startup Act project is a joint initiative by Ugandas tech startup ecosystem and the Presidency to harness the potential of our digital economy through co-created regulations. The Act is aimed at ensuring that Ugandas laws and regulations are clear, planned and work for the tech ecosystem. This, we believe, will contribute to the creation of an enabling environment for the growth of the ecosystem, as well as the attraction and protection of investment in tech startups.</p>
        </div>
      </div>
    </section>
  )
}

export default About