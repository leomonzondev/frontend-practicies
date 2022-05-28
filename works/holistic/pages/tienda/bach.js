import React, {useEffect, useState} from 'react'
import client from 'utils/client'

import {  LayoutCategoria } from '../../components/tienda/LayoutCategoria'



const Bach = (props) => {


  const {products} = props 
  useEffect(() => {
    console.log(products)
  },[])


  return (
    <div className='pt-16'>
        <h1 className='m-5 font-medium text-5xl'>Esencias de Bach</h1>

        <LayoutCategoria productos={products}/>
    </div>
  )
}

export default Bach

export async function getServerSideProps() {

  try {
    const products = await client.fetch(`*[_type == "product" && category == "bach"]`)
  
    return {
      props: {products}
    }
  } catch {
    
    return {
      props: {}
    }
  }
}