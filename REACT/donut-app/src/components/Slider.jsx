import React from 'react';
import arrow from '../images/arrow.png'
import { Card } from './Card';

export const Slider = () => {
return (
    <div className='slider'>
        <button className='slider__arrow__btn'><img src={arrow} alt='' className='slider__left img__arrow' /> </button>
        <Card />
        <button className='slider__arrow__btn'><img src={arrow} alt='' className='slider__right img__arrow' /> </button>
    </div>
)
};

