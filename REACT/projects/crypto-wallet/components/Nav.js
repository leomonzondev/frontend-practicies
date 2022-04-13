import React from 'react'
import {FiSearch} from 'react-icons/Fi'
import {FaRegBell} from 'react-icons/Fa'
import {MdOutlineMessage} from 'react-icons/Md'
import {BsWallet2} from 'react-icons/Bs'


import styles from '../styles/Nav.module.css'


export const Nav = () => {
  return (
    <nav className={styles.nav}>

        <div className={styles.izq}>
            <h1>My wallet</h1>
            <div className={styles.searchDiv}>
                <FiSearch className={styles.searchIcon} size={20} />
                <input className={styles.search} placeholder='Search' />
                
            </div>
        </div>

        <div className={styles.der}>
            <div className={styles.icons}>
                <ul>
                    <li className={styles.li}><FaRegBell color='#a8a8a8' size={20} /></li>
                    <li className={`${styles.li} ${styles.msg}`}><MdOutlineMessage color='#a8a8a8' size={20} /></li>
                    <li className={styles.li}><BsWallet2 color='#a8a8a8' size={20} /></li>
                </ul>
            </div>

            <div className={styles.user}>
                <p>Marzo 24, 2022</p>
                <img src='#' alt='user-icon' />
            </div>
        </div>
    </nav>
  )
}
