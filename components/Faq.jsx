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
                <h3>Here is the subject matter context?</h3>
                <p>Under the Ministry of Trade, Industry and Cooperatives, the Government of Uganda is exploring the potential of startups and innovations to spur economic growth and development in the country.</p>
                <p>From a High Level Policy Dialogue on the “Relevance of a Startup Policy in Uganda” hosted by Private Sector Foundation Uganda (PSFU) on May 30th, 2021 at Sheraton Kampala Hotel; the Ministry of Trade Industry and Co-operatives (MTIC) was requested to develop a National Startup Policy by the host on behalf of other stakeholders in the ecosystem. As a result, the MTIC constituted a multisectoral Technical Working Group (TWG) to spearhead the development of interventions geared towards addressing the challenges which inhibit the establishment, sustained performance and growth of startups in Uganda.  The TWG comprises of technical members of MTIC, PSFU, Startup Uganda and The Innovation Village. These entities will carry on activities as guided for this policy reform process. The Nominations were formalized on May 10th, 2022 by the MTIC PS. Again, “The minimum expectations are a law, a policy, a strategy or a code for Startups.”</p>
              </article>

              <article className={styles.article}>
                <h3>What Next?</h3>
                <p>The process is still on going, however, we are in the final stages of the Regulatory Impact Assessment report approval processes from the consultant. We hope that in the next few weeks or months, the report shall be then presented to the cabinet secretariat that would then advise on next steps from the proposals</p>
              </article>
            </div>
            <div className={styles.column}>
              <article className={styles.article}>
                <h3>Has this been successful anywhere else?</h3>
                <p>Yes. Other African countries like Senegal and Tunisia have passed their own startup bills.</p>
              </article>

              <article className={styles.article}>
                <h3>Why take such a long and tedious process?</h3>
                <p>As opposed to private members bill that is prepared through a parliamentarians internal process and later directly to the floor of parliament, the government process differs very much. The governments framework requires a process that involves a Regulatory Impact Assessment Report development process which provide evidence on the right interventions to address the existing challenges inhibiting growth of the startups in Uganda.</p>
                <p>And as a way of facilitating public policy dialogue, consulting the parties that are directly affected by the absence of certain interventions is mandatory. The Startup entrepreneurs and innovators, especially young people in different sectors of the economy were consulted about the challenges which inhibit their innovations and the possible actions which Government can take to address these challenges through Regional Consultative meetings.</p>
              </article>


            </div>

          </div>


        </div>
      </div>
    </section>
  )
}

export default FAQ