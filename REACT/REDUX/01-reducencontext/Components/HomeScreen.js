import React from 'react'
import { products } from '../lista/products'
import useShop from './Context/ShopContext'
import { ProductCard } from './ProductCard'

export const HomeScreen = () => {

    

    const { cartItem, showHideCart } = useShop()

  return (
        <div className='mainApp'>
            <nav ><p>Carrito ({cartItem})</p></nav>
            <button onClick={() => console.log(cartItem)}>DEBUG</button>
            <ul>
            {
                products.map((product) => <ProductCard key={product.id} product={product} />)
            }
            </ul>
        </div>

  )
}
