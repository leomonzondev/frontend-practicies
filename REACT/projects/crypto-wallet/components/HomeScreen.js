import React from 'react'
import { Activites } from './Activites'
import { History } from './History'
import { MarketOverview } from './MarketOverview'
import { Prices } from './Prices'
import { SellOrder } from './SellOrder'

export const HomeScreen = () => {
  return (
    <div className='dashboard'>
      <Prices />
      <MarketOverview />
      <SellOrder />
      <History />
      <Activites />
    </div>
  )
}
