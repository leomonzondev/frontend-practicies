import React from 'react';
import { Link } from 'react-router-dom';

export const Cart = () => {
    return (
        <div className='cart'>
            <nav>
                <Link to="/">
                    <p>Home</p>
                </Link>
            </nav>
            <h1> CART</h1>
        </div>
    )
};
