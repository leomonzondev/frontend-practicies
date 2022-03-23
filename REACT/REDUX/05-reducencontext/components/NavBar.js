import React, {useContext} from 'react'
import CartContext from './context/CartContext'


export const NavBar = () => {


  const { showHideCart,cartItems } = useContext(CartContext)


  return (
    <nav>

        <p onClick={showHideCart}>Carrito({cartItems.length})</p>


    </nav>
    
  )
}
