import React from 'react'
import { ShopProvider } from '../context/cart/ShopContext'
import { Assortment } from './Assortment'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { Responsive } from './Responsive'

export const MainApp = () => {
  return (
        <main>
        <Hero />
        <Assortment />
        <Footer />
        <Responsive />
        </main>


  )
}
