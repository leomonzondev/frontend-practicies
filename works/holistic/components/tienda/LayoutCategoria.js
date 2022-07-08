import React from 'react'
import { Filtro } from './Filtro'
import { History } from './History'
import { Producto } from './Producto'
import {useRouter} from 'next/router'

export const LayoutCategoria = ({productos}) => {


  const router = useRouter()

  const handleClick = (id) => {
    router.push(`/tienda/product/${id}`)

  }


  return (
    <>
        <History productos={productos}/>
        {/* <Filtro /> */}
        <div className='flex justify-center gap-10 flex-wrap'>
            {
                productos.map(product => <div key={product._id} onClick={() => handleClick(product.slug)} ><Producto data={product} /> </div>)
            }

        </div>

    </>
  )
}
