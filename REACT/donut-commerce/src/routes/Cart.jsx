import React from 'react';
import { Link } from 'react-router-dom';
import { CartShop } from '../components/CartShop';
import useShop from '../context/cart/ShopContext';

export const Cart = () => {


    const { total } = useShop()

    return (
        <div className='cart'>
            <nav>
                <Link to="/">
                    <p>Home</p>
                </Link>
            </nav>
            <h1>Shopping cart</h1>
            <CartShop />

            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <button>STARNDARD SHIPPING</button>
                <button>PROMO CODE</button>
            </div>

            <div style={{display:"flex"}}>
                <h2>Total: {total}$</h2>
                <button>CHECKOUT</button>
            </div>

            <Link to="/">
                <button>Continue shopping</button>
            </Link>
        </div>

    )
};
