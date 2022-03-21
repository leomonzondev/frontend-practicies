import React from 'react'

export const ItemCard = ({product}) => {
  return (
    <li>
        <img src={product.img} alt={product.title} />
    </li>
  )
}
