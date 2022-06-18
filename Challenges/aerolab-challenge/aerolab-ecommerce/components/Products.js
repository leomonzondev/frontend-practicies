import React, { useContext, useState } from 'react'
import { UserContext } from '../context/Context'
import { ProductCard } from './ProductCard'

export const Products = () => {

    const { state, dispatch } = useContext( UserContext )

    const [page, setPage] = useState(1)


    const { products } =  state


  return (
    <div>
        <button onClick={() => console.log(products)}>Mostrar products</button>
            
        {    
            products         
            ? products.map(product => <ProductCard key={product._id} product={product} />)
            : 'Loading..' 
        }
        <div className='flex gap-6 bg-blue justify-center'>
            <button className='bg-black-100 px-4'>1</button>
            <button className='bg-black-100 px-4'>2</button>
        </div>

    </div>
  )
}
