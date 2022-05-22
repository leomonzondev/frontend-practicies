import React, { useContext } from 'react'
import { Store } from '../../utils/Store'

const carrito = () => {

    const {state} = useContext(Store)

  return (
    <div className='pt-20 h-screen'>

        {
            state &&
            state.cart?.cartItems <= 0
            ? "No hay nada que ver aqui, x el momento..."
            : state.cart?.cartItems.map(item => <div>{item.title}</div>)
        }
        
    </div>
  )
}

export default carrito