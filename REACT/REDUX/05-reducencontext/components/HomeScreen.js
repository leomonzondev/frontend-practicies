import React from 'react'
import { products } from './data'
import { ItemCard } from './ItemCard'

export const HomeScreen = () => {



  return (
    <>
        <NavBar />
        <Cart />

        <ul>
            {
                products.map(product => <div key={product.id}>
                    <ItemCard product={product} />
                </div>)
            }
        </ul>
    </>
  )
}
