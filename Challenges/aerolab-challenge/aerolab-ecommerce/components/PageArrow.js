import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/Context'
import aLeft from '../assets/icons/arrow-left.svg'
import aRight from '../assets/icons/arrow-right.svg'

export const PageArrow = () => {

    const { state, dispatch } = useContext( UserContext )

    const { products } =  state

    const [pageNumber, setPageNumber] = useState(0)

    const productsPerPage = 16
    const pagesVisited = pageNumber * productsPerPage





    const handlePage = ( page ) => {
        setPageNumber(page)
    }
 


  return (
    <div>
        <div className='flex gap-6 '>
            
            {
                pageNumber === 1 
                ? <div onClick={() => handlePage(0)} className=''><Image src={aRight} /></div>
                : <div onClick={() => handlePage(1)}  className=' '><Image src={aLeft} /></div>

            }
            
        </div>
    </div>
  )
}
