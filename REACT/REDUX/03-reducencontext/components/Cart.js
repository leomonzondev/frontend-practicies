import React, { useContext }  from 'react'
import CartContext from '../context/CartContext'
import { ItemCard } from './ItemCard'

export const Cart = () => {


    const { showCart, cartItems, removeItem } = useContext(CartContext)

  return (
      <div>
        
          {
              showCart && (<ul>
                {
                    cartItems.map(item => <div>

                        <ItemCard key={item.id} product={item}/>
                    <button onClick={() => removeItem(item.id)} >Quitar</button>
                    </div>
                    )
                }
              </ul>)
          }

      </div>
  )
}
