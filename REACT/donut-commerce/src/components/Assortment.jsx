import React from 'react';
import { Checkout } from './Checkout';

import { Carousel } from './Carousel';

export const Assortment = () => {
return (
    <div className='assortment'>
        <h3 className='assortment__title'>Assortment</h3>
        <Carousel />
        <Checkout />
    </div>
)
};
