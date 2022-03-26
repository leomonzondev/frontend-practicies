import React from 'react'
import { HomeScreen } from './HomeScreen'
import { Nav } from './Nav'

export const IndexApp = () => {
  return (
    <div className='indexApp'>
        <Nav />
        <HomeScreen />
    </div>
  )
}
