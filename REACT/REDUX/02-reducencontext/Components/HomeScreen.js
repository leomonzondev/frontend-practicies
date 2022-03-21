import React, { useContext }  from 'react'

import CartContext from '../Context/cartContext'
import { Card } from './Card'
import { Cart } from './Cart'
import { products } from './data'
import { Navbar } from './Navbar'

export const HomeScreen = () => {


    const {addToCart} = useContext(CartContext)
    

  return (
    <div>
        <Navbar />
        <Cart />
        <ul>
            {
                products.map(product => <div>
                    <Card key={product.id} product={product}/>
                    <button onClick={() => addToCart(product)}>Añadir al carrito</button>
                </div>
                )
            }
        </ul>
    </div>
  )
}
