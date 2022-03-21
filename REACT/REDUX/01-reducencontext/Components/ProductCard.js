import React,{useContext, useState} from 'react'
import  useShop from './Context/ShopContext'

export const ProductCard = ({product}) => {

    
    const { addToCart } = useShop()

  return (
    <li>
            <img src={product.img} alt={product.title} width="200px" height="200px" />
            <h3>{product.title}</h3>
            <p>{product.price}</p>

            <div className='btns'>
                <button >Agregar al carrito</button>
                
            </div>
        </li>
    
  )
}
