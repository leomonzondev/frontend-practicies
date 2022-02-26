import React, { useState } from 'react'
import { Agregar } from './Agregar'

export const Lista = ({titulo}) => {


    

    const [itemTitulo, setItemTitulo] = useState('')


  return (
    <div>
        <h2> {titulo}</h2>

        {
            !itemTitulo && <Agregar />
        }
            
        
    </div>
  )
}
