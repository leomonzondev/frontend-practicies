import { Card } from 'components/tienda/cart/Card'
import { Summary } from 'components/tienda/cart/Summary'
import React, { useContext, useState } from 'react'
import { Store } from '../../utils/Store'

const carrito = () => {

    const {state, dispatch} = useContext(Store)





  return (
    <div className='pt-24 h-screen '>

      
      <Summary state={state}/>
        {
            state &&
            state.cart?.cartItems <= 0
            ? "No hay nada que ver aqui, x el momento..."
            : state.cart.cartItems.map(item => <Card producto={item} />)
        }
        
    </div>
  )
}

export default carrito