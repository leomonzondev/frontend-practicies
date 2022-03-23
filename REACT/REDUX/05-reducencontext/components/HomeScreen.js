import React, {useContext} from 'react'
import { Cart } from './Cart'
import CartContext from './context/CartContext'
import { products } from './data'
import { ItemCard } from './ItemCard'
import { NavBar } from './NavBar'

export const HomeScreen = () => {


  const { addToCart, } = useContext(CartContext)


  return (
    <>
        <NavBar />
        <Cart />

        <ul>
            {
                products.map(product => <div key={product.id}>
                    <ItemCard product={product} />
                    <button onClick={() => addToCart(product)}>Add to cart</button>
                </div>)
            }
        </ul>
    </>
  )
}
