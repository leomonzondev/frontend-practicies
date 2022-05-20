import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import { productos } from '../../components/tienda/data'
import { TiendaLayout } from '../../components/tienda/layouts/TiendaLayout'
import { ProductoView } from '../../components/tienda/productoView/ProductoView'

export const ProductView = () => {

  const router = useRouter()

  const [producto, setProducto] = useState(null)



  const getProduct = (num) => {
    const match = productos.find(producto => producto.id == num)
    setProducto(match)
  }

  useEffect(() => {
    const num = parseInt(router.query.id)
    return getProduct(num)
    
  },[router.query])

/**
 * !PASAR POR STATIC PROPS PARA RECIBIR DATA SIN NECESIDAD DE VALIDACIONES
 */
  return (
    <div className='pt-20'>
      <TiendaLayout title={producto ? producto.title : 'Tienda PsicoHolistica'} >
        <ProductoView producto={producto} />
      </TiendaLayout>

    </div>
  )
}

export default ProductView