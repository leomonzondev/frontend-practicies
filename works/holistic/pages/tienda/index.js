import React, { useEffect } from 'react'
import { Tienda } from '../../components/tienda/Tienda'

import client from 'utils/client'
import { motion } from 'framer-motion'

const Main = (props) => {
  
  const {products} = props

  return (
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}>
        
        <Tienda products={products}/>
      
    </motion.div>
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