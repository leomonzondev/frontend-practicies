import React, { useContext } from 'react'
import CartContext from '../Context/Cart/CartContext'
import './Cart.css'
import { CartItem } from './CartItem'

export const Cart = () => {

    const { showCart, cartItems, showHideCart } = useContext(CartContext)

    




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
                                        <CartItem key={item._id} item={item}/>
                                    </div>)
                                }
                            </ul>
                        )
                    }
                </div>

                <div className='Cart__cartTotal'>
                    <div>
                        Cart Total
                    </div>
                    <div></div>
                    <div style={{marginLeft: 5}}>
                        $
                        {
                            cartItems.reduce((amount, item) => item.price + amount, 0)
                        }
                    </div>
                </div>

            </div>
        )
    }
    </div>
)
}


