import React, { useContext, useState } from 'react'
import { UserContext } from '../context/Context'

import aLeft from '../assets/icons/arrow-left.svg'
import aRight from '../assets/icons/arrow-right.svg'
import { PageArrow } from './PageArrow'

export const Filter = ({ products, setProductsList }) => {

    const { state, dispatch } = useContext(UserContext)
   
    

    const [filter, setFilter] = useState('')

    // products.cost.sort((a,b) => a - b )

    const handleFilter = (e) => {

        const { id } = e.target

        switch ( id ) {
            case 'highest':

                // const orderHProducts = products.sort((a,b) => b.cost - a.cost)

                return  setProductsList( products.sort((a,b) => b.cost - a.cost))

            case 'lowest':
                // const orderLProducts = products.sort((a,b) => a.cost - b.cost)
                return setProductsList(products.sort((a,b) => a.cost - b.cost))

            case 'recent':
                
                return setProductsList(products)

            default:
                return
        }

    }


  return (
    <div className='flex justify-center mb-10 gap-4 items-center flex-wrap'>
    
            <p>16 of 32 products</p>
          
    
            <p>Sort By:</p>
        
        <div className='flex'>
                
            <form className='flex gap-6'>
                <label onClick={(e) => handleFilter(e)} className='filter-button  ' htmlFor="recent">
                    <input className='' type="Radio" name='value' id='recent' />Most Recent
                </label>

                <label onClick={(e) => handleFilter(e)} className='filter-button' htmlFor="lowest">
                    <input type="Radio" name='value' className='' id='lowest'  />Lowest price
                </label>   
                    
                <label  onClick={(e) => handleFilter(e)} className='filter-button' htmlFor="highest">
                    <input type="Radio" name='value'  className='hidden' id='highest'  />Highest price
                </label>  
            </form>     
                
        </div>
        <PageArrow />
    </div>
  )
}
