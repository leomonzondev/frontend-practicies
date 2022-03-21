import React, { useReducer, useContext }  from 'react'
import CartContext from '../Context/cartContext'


export const Navbar = () => {

    const {cartItems, showHideCart} = useContext(CartContext)


  return (
    <nav>
        <p onClick={showHideCart}>Carrito({cartItems.length})</p>
    </nav>
  )
}
