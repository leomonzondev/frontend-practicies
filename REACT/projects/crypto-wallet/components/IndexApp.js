import React from 'react'
import { HomeScreen } from './HomeScreen'
import { MarketOverview } from './MarketOverview'
import { Nav } from './Nav'
import { SideBar } from './SideBar'

export const IndexApp = () => {
  return (
    <div >
      <Nav />
      <div className='fulloverview'>
        <SideBar />
        <HomeScreen />
      </div>
    </div>
  )
}
