import React from 'react'
import useShop from '../context/cart/ShopContext'

export const CartShop = () => {

    const { products, total } = useShop()

  return (
    <div>
        <h2>Your cart total is ${total} ({products.length})</h2>
        {
            products.map((product, index) => (
                <div key={index}>
                    <h3>{product.title}</h3>
                </div>
            ))
        }
    </div>
  )
}
