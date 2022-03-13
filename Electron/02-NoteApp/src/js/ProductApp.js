import React, { useReducer } from 'react'
import { initialState, productReducer } from './reducers/productReducer'
import { types } from './types'





export const ProductApp = () => {


    const [productState, dispatch] = useReducer(productReducer, initialState)
    const { products, cart, activeProduct } = productState



  return (
    <div>
        <h1>Product App</h1>
        <hr />


        <h2>Products</h2>
        <ul>
            {
                products.map(product => (
                    <li key={product.id}>
                        {product.title}
                        <button onClick={() => dispatch({type: types.productShow, payload: product})}>Show</button>
                        <button onClick={() => dispatch({type: types.productAddToCart, payload: product})}>Añadir al carrito</button>
                    </li>)
                )
            }
        </ul>

        <h2>Carrito</h2>
        <ul>
            {
                cart.map(product => (
                    <li key={product.id}>
                        {product.title} - quantity: {product.quantity}
                        <button onClick={() => dispatch({type: types.productDeleteOne, payload: product.id})}>Delete one</button>
                        <button onClick={() => dispatch({type: types.productDelete, payload: product.id})}>Delete All</button>
                    </li>
                ))
            }
        </ul>

        <h2>Preview</h2>
        <p>{activeProduct.title}</p>

    </div>
  )
}
