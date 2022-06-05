import React from 'react'

import { Producto } from '../Producto'


export const Categoria = ({productos}) => {



  return (

    <div>
        {
            productos.map(producto => <Producto key={producto.id} data={producto}/>)
        }

    </div>
  )
}
