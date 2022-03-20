import React from 'react'

export const Cart = () => {

    const { products, total } = useShop()

  return (
    <div>
        <h2>Your cart total is ${total} </h2>
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
