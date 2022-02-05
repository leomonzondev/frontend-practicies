import React from 'react';
import { Checkout } from './Checkout';

import { Slider } from './Slider';

export const Assortment = () => {
return (
    <div className='assortment'>
        <h3 className='assortment__title'>Assortment</h3>
        <Slider />
        <Checkout />
    </div>
)
};
