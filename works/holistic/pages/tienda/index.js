import React, { useEffect } from 'react'
import { Tienda } from '../../components/tienda/Tienda'
import db from '../../utils/db'
// import Product from '../../models/Product'
import client from 'utils/client'

const main = (props) => {

  
  const {products} = props




  return (
    <div>
   
      <Tienda products={products}/>
    </div>
  )
}

export default main


export async function getServerSideProps() {

  try {
  
    const products = await client.fetch(`*[_type == "product"]`)
  
    return {
      props: {products}
    }
  } catch {
    
    return {
      props: {}
    }
  }
}