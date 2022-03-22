import React from 'react'
import CartState from './context/CartState'
import { HomeScreen } from './HomeScreen'

export const MainApp = () => {
  return (
    <CartState>
        <HomeScreen />
    </CartState>
  )
}
