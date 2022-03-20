import React from 'react'
import { ShopProvider } from '../context/cart/ShopContext'
import { Assortment } from './Assortment'
import { Footer } from './Footer'
import { Hero } from './Hero'

export const MainApp = () => {
  return (
    <ShopProvider>
        <main>
        <Hero />
        <Assortment />
        <Footer />
        </main>
    </ShopProvider>

  )
}
