import React from 'react';
import { Link } from 'react-router-dom';
import { CartShop } from '../components/CartShop';

export const Cart = () => {
    return (
        <CartShop>

        <div className='cart'>
            <nav>
                <Link to="/">
                    <p>Home</p>
                </Link>
            </nav>
            <h1> CART</h1>
            <CartShop />
        </div>
        </CartShop>
    )
};
