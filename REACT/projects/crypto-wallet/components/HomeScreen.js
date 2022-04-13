import React from 'react'
import { Activites } from './Activites'
import { History } from './History'
import { MarketOverview } from './MarketOverview'
import { Prices } from './Prices'
import { SellOrder } from './SellOrder'

import styles from '../styles/HomeScreen.module.css'


export const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <h2>Dashboard</h2>
      <Prices />
      <div className={styles.wrapper}>

      <div className={styles.marketSection}>
        <MarketOverview />
        <History />
      </div>
      <div className={styles.sellSection}>
        <SellOrder />
        <Activites />
      </div>
      </div>
      </div>

  )
}
