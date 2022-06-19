import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/Context'
import { Filter } from './Filter'
import { ProductCard } from './ProductCard'

export const Products = () => {

    const { state, dispatch } = useContext( UserContext )

    const { products } = state

    const [productsList, setProductsList] = useState([...products])


    
    const [pageNumber, setPageNumber] = useState(0)

    const productsPerPage = 16
    const pagesVisited = pageNumber * productsPerPage

    const displayProducts = productsList
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map(product => <ProductCard key={product._id} product={product} />)


    const handlePage = ( page ) => {
        setPageNumber(page)
    }

  return (
    <div>
        {/* <button onClick={() => console.log(products)}>Mostrar products</button> */}
       
        <Filter products={products} setProductsList={setProductsList}/>

        <div className='flex w-full gap-4 flex-wrap justify-center'>
            {    
                products         
                ? displayProducts
                : 'Loading..' 
            }
        </div>
        <div className='flex  justify-between'>
            <p className='text-xl text-black-100'>{productsPerPage} of {productsList.length} products</p>
            <div className='flex gap-6 '>
                <button onClick={() => handlePage(0)} className='bg-black-100 px-4'>1</button>
                <button onClick={() => handlePage(1)}  className='bg-black-100 px-4'>2</button>
            </div>

        </div>

    </div>
  )
}
