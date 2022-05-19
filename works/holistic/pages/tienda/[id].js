import { useRouter } from 'next/router'
import React from 'react'
import { TiendaLayout } from '../../components/tienda/layouts/TiendaLayout'

export const ProductView = () => {

  const router = useRouter()
  console.log(router.query)


  return (
    <div className='pt-16'>
      <TiendaLayout title="algun producto" >
        <h1>Hola</h1>
      </TiendaLayout>

    </div>
  )
}

export default ProductView