import React, {useContext} from 'react'
import CartContext from '../context/CartContext'
import { Cart } from './Cart'
import { products } from './data'
import { ItemCard } from './ItemCard'
import { NavBar } from './NavBar'

export const HomeScreen = () => {


    const {addToCart } = useContext(CartContext)


  return (
    <>
        <NavBar />
        <Cart />

        <ul>
            
            {
                products.map(product => <div>
                    <ItemCard key={product.id} product={product} />
                    <button onClick={() => addToCart(product)} >Add to Cart</button>
                </div>)
            }

        </ul>

    </>
  )
}
