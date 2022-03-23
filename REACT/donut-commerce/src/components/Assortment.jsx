import React from 'react';
import { Checkout } from './Checkout';

import { Carousel } from './Carousel';

import useShop from '../context/cart/ShopContext';

export const Assortment = () => {


const {products} = useShop()

return (
    <div className='assortment'>
        <h3 className='assortment__title'>Assortment ({products.length})</h3>
        <Carousel />
        <Checkout />
    </div>
)
};
