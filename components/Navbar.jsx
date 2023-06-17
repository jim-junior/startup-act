import React from 'react'
import styles from "./styles/navbar.module.scss"
import Image from 'next/image'
import logo from "@/assets/logo.png"


const Navbar = () => {
  return (
    <nav className={styles.navbar} >
      <div className={styles.navbar__logo}>
        <Image className={
          styles.navbar__logo__image
        } src={logo} alt="logo" />
      </div>
    </nav>
  )
}

export default Navbar