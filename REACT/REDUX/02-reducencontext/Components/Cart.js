import React, { useContext } from 'react'
import CartContext from '../Context/cartContext'
import { Card } from './Card'


export const Cart = () => {

 
const { showCart, cartItems, showHideCart, removeItem } = useContext(CartContext)
    


return (
    <div>
    {
        showCart && (
            <div className='cart__wrapper'>
                <div style={{textAlign: 'right'}}>
                    <i style={{cursor:'pointer'}} className='fa fa-times-circle' aria-hidden='true' onClick={showHideCart} ></i>
                </div>

                <div className='cart__innerWrapper'>
                    {
                        cartItems.length === 0 ? <h4>Cart empty</h4> : (
                            <ul>
                                {
                                    cartItems.map(item => <div>
                                        <Card key={item.id} product={item}/>
                                        <button onClick={() => removeItem(item.id)} >Quitar</button>
                                    </div>)
                                }
                            </ul>
                        )
                    }
                </div>

            </div>
        )
    }
    </div>
)
}

