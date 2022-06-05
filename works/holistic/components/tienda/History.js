import React from 'react'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'

export const History = ({productos, product}) => {


  
  return (
    <ul className='flex gap-2 md:pl-10 items-center'>
        <Link href={"/tienda"}>
            <li className='cursor-pointer'>Tienda</li>
        </Link>

        <MdKeyboardArrowRight size={24} />
        <li>{productos?.name && productos?.category}</li>
        {
          product && (
            <li className='flex md:gap-5 gap-x-2'>
            <Link href={`/tienda/${product.category}`}>
              <div className='cursor-pointer first-letter:uppercase'>
                {product.category}
              </div>
            </Link>
            
            </li>
           
          )
        }

    </ul>
  )
}
