import React, { useContext }  from 'react'

import CartContext from '../context/CartContext'

export const Navbar = () => {


    const { cartItems, showHideCart } = useContext(CartContext)

  return (
    <nav>
        <p onClick={showHideCart} >Carrito ({cartItems.length})</p>
    </nav>
  )
}
