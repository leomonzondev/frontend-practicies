import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import { productos } from '../../components/tienda/data'
import { TiendaLayout } from '../../components/tienda/layouts/TiendaLayout'
import { ProductoView } from '../../components/tienda/productoView/ProductoView'
import Product from '../../models/Product'
import db from '../../utils/db'

export const ProductView = (props) => {

  const {product} = props

  if(!product) {
    return <div>Producto no encontrado</div>
  }

  // const router = useRouter()

  // const [producto, setProducto] = useState(null)



  // const getProduct = (num) => {
  //   const match = product.find(producto => producto.id == num)
  //   setProducto(match)
  // }

  // useEffect(() => {
  //   const num = parseInt(router.query.id)
  //   return getProduct(num)
    
  // },[router.query])

/**
 * !PASAR POR STATIC PROPS PARA RECIBIR DATA SIN NECESIDAD DE VALIDACIONES
 */
  return (
    <div className='pt-20'>
      <TiendaLayout title={product.title} >
        <ProductoView producto={product} />
      </TiendaLayout>

    </div>
  )
}

export default ProductView

export async function getServerSideProps(context) {
  const {params} = context
  const {id} = params
  await db.connect()
  const product = await Product.findOne({id}).lean()
  await db.disconnect()
  return {
    props: {
      product: db.covertDocToObj(product)
    }
  }
}