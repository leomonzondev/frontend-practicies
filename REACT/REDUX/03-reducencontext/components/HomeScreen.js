import React, { useContext }  from 'react'
import CartContext from '../context/CartContext'
import { Cart } from './Cart'

import { products } from './data'
import { ItemCard } from './ItemCard'
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
                    <ItemCard key={product.id} product={product} />
                    <button onClick={() => addToCart(product)} >Agregar al carrito</button>
                </div>)
            }
        </ul>
    </div>
  )
}
