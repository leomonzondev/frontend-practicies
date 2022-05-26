import { DManageStore } from 'components/admin/Store/DManageStore'
import Product from 'models/Product'
import React from 'react'
import db from 'utils/db'

const manageStore = (props) => {


    const {products} = props

  return (
    <div >
        <DManageStore products={products} />
    </div>
  )
}

export default manageStore



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