import React, { useContext } from 'react'
import CartContext from '../context/CartContext'


export const NavBar = () => {

    const { cartItems, showHideCart } = useContext(CartContext)


  return (
    <nav>
        <p onClick={showHideCart} >Carrito ({cartItems.length})</p>
    </nav>
  )
}
