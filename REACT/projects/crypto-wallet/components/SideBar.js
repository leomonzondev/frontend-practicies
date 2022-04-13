import React from 'react'

import styles from '../styles/SideBar.module.css'

import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {BiWallet} from 'react-icons/bi'
import {FaExchangeAlt} from 'react-icons/fa'
import {RiExchangeDollarLine} from 'react-icons/ri'

export const SideBar = () => {

  const size = 48

  return (
    <div>

    <div className={styles.sidebar}>
        <div className={styles.menu}>
          <ul>
            <li>
            <div className={styles.option}>
              <span id={styles.dashboard} className={styles.selector}></span>
              <HiOutlineDesktopComputer size={size} color="#ff338b" /><p>Dashboard</p>
            </div>
            </li>

            <li>
              <span id={styles.wallet} className={styles.selector}></span>
            <div className={styles.option}>
              <BiWallet size={size} color="#ff6b61" /> <p>Wallet</p>
            </div>
            </li>
            

            <li>
              <span id={styles.transactions} className={styles.selector}></span>
            <div className={styles.option}>
              <FaExchangeAlt size={size} color="#f7c100"/><p>Transactions</p>
            </div>
            </li>


            <li>
              <span id={styles.exchange} className={styles.selector}></span>
            <div className={styles.option}>
              <RiExchangeDollarLine size={size} color="#00bbbf" /> <p>Exchange</p>
            </div>
            </li>
          </ul>
        </div>
        <div className={styles.service}></div>
    </div>
    </div>
  )
}
