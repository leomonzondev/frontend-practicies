import React from 'react'
import { CategoriaItem } from './CategoriaItem'
import { categories } from './data'

export const Categorias = ({products}) => {




  return (
    <div className='flex flex-wrap w-full  justify-center gap-5 my-12 overflow-hidden'>
        {
          categories.map(item => (
            <CategoriaItem key={item.id} item={item} products={products} />
          ))
        }
    </div>
  )
}
