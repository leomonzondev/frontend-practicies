import React from 'react'

import './ProductCard.css'
import { Rating } from './Rating'


export const ProductCard = ({ product }) => {

    let opts = { format: '%s%v', symbol: '$' }

    return (
    <div className='productCard__wrapper'>
        <div>
            <img className='productCard__img' src={product.image} alt='' />
            <h4>{product.name}</h4>
            <div className='ProductCard__price'>
                <h5>${product.price}</h5>
            </div>
            <div className='ProductCard__Rateing'>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </div>
            <button className='ProductCard__button'>Add to basket</button>
        </div>
    </div>
)
}
