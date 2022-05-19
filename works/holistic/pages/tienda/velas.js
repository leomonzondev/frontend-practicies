import React from 'react'
import { categoriaVelas, productos } from '../../components/tienda/data'
import { LayoutCategoria } from '../../components/tienda/LayoutCategoria'
import { Categoria } from '../../components/tienda/layouts/Categoria'

const velas = () => {

  

  return (
    <div className='pt-16'>
        <h1 className='m-5 font-medium'>Velas</h1>

        <LayoutCategoria productos={categoriaVelas}/>
    </div>
  )
}

export default velas