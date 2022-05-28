import React, { useEffect } from 'react'
import { Tienda } from '../../components/tienda/Tienda'

import client from 'utils/client'

const Main = (props) => {

  
  const {products} = props




  return (
    <div>
      <Tienda products={products}/>
      
    </div>
  )
}

export default Main


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