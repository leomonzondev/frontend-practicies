import React, {useEffect, useState} from 'react'
import { categoriaEsencia } from '../../components/tienda/data'
import {  LayoutCategoria } from '../../components/tienda/LayoutCategoria'
import { Categoria } from '../../components/tienda/layouts/Categoria'
import { Producto } from '../../components/tienda/Producto'


const flores = () => {


  

  return (
    <div className='pt-16'>
        <h1 className='m-5 font-medium text-5xl'>Esencias de Bach</h1>

        <LayoutCategoria productos={categoriaEsencia}/>
    </div>
  )
}

export default flores