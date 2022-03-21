import React, { useReducer, useContext }  from 'react'


export const Card = ({product}) => {


  


  return (
    <li>
        <img src={product.img} alt={product.title} width="250px" height="250px" />
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        
    </li>
  )
}
