import React from 'react'

export const ItemCard = ({product}) => {
  return (
    <li>
        <img src={product.img} alt={product.title} />
        <h4>{product.title}</h4>
        <p>{product.price}</p>
    </li>
  )
}
