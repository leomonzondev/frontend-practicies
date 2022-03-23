import React, {useContext} from 'react'
import CartContext from './context/CartContext'
import { ItemCard } from './ItemCard'

export const Cart = () => {

    const { cartItems, removeItem, showCart} = useContext(CartContext)


  return (
    <div>
        {
            showCart && (
                <div>
                    
                    {
                        cartItems.map(item => <div>
                        <ul>

                            <ItemCard key={item.id} product={item} />
                        </ul>
                            <button onClick={() => removeItem(item.id)}>Quitar</button>
                        </div>)
                    }
                    
                </div>
            )
        }
    </div>
  )
}
