import React from 'react'
import { Tienda } from '../../components/tienda/Tienda'
import db from '../../utils/db'
import Product from '../../models/Product'

const main = (props) => {

  const {products}=props


  return (
    <div>
      <Tienda products={products}/>
    </div>
  )
}

export default main


export async function getServerSideProps() {
  await db.connect()
  const products = await Product.find({}).lean()
  await db.disconnect()
  return {
    props: {
      products: products.map(db.covertDocToObj)
    }
  }
}