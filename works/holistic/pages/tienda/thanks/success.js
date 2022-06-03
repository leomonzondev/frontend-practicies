import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { Store } from 'utils/Store'

const Success = () => {

  const router = useRouter()
  const {state, dispatch} = useContext(Store)



  useEffect(() => {

    Cookies.set('cartItems',[])
    dispatch({type:"CART_CLEAR"})
  },[router.query == "/tienda/thanks/success?*"])


  return (
    <div className='pt-20'>

      La transacción fue realizada con éxito!
      Gracias por tu compra!


      <Link href="/tienda" ><p className='cursor-pointer'>Volver a la tienda</p></Link>


    </div>
  )
}

export default Success