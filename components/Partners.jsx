import React from 'react'
import styles from "./styles/Partners.module.scss"
import Image from "next/image"
import foundersLounge from "@/assets/fl.png"
import innovationVillage from "@/assets/iv.png"
import psfu from "@/assets/psfu.png"
import th from "@/assets/th.png"
import SU from "@/assets/SU.png"
import Link from 'next/link'

const Partners = () => {
  return (
    <section className={styles.root}>
      <div className={styles.cover}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Our Partners</h2>
          <p>We work with a set of genrous organisations and individuals that believe in our cause</p>
          <div className={styles.partners}>


            <div className={styles.partner}>
              <Image src={innovationVillage} width={200} height={100} alt="founders loung" />
            </div>

            <div className={styles.partner}>
              <Image src={psfu} width={200} height={100} alt="founders loung" />
            </div>

            <div className={styles.partner}>
              <Image src={SU} width={200} height={100} alt="founders loung" />
            </div>

            <div className={styles.partner}>
              <Image src={th} width={200} height={100} alt="founders loung" />
            </div>



          </div>

        </div>
      </div>
    </section >
  )
}

export default Partners