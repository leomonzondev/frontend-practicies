import React, { useEffect, useState } from 'react'
import client from 'utils/client'

import { LayoutCategoria } from '../../components/tienda/LayoutCategoria'


const Velas = (props) => {

  const {products} = props 




  return (
    <div className='pt-16 h-screen'>
        <h1 className='m-5 font-medium text-5xl'>Velas</h1>

        <LayoutCategoria productos={products}/>
    </div>
  )
}

export default Velas


export async function getServerSideProps() {

  try {
    const products = await client.fetch(`*[_type == "product" && category == "velas"]`)
  
    return {
      props: {products}
    }
  } catch {
    
    return {
      props: {}
    }
  }
}