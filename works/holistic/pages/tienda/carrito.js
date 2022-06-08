import { Card } from 'components/tienda/cart/Card'

import { Summary } from 'components/tienda/cart/Summary'
import mercadopago from 'mercadopago'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../../utils/Store'

const Carrito = () => {

  const {state, dispatch} = useContext(Store)

  {/* <button onClick={() => console.log(pagarItems)}>MOSTRAR OBJETO</button> */}

  const vaciarCarrito = () => {
    dispatch({type:"CART_CLEAR"})
  }

  return (
    <div className='pt-24 md:px-48 px-5 '>
    
      {
          state &&
          state.cart?.cartItems <= 0
          ? <div className='text-center h-screen '><p className='text-3xl '>Visita la <Link href="/tienda"><span className='font-medium cursor-pointer hover:text-lightAccent-300 dark:hover:text-darkAccent-300 transition-all duration-300 text-lightAccent-200 dark:text-darkAccent-200'>Tienda</span></Link> para agregar productos al carrito!</p></div>
          
          : (<div className='h-screen'>
            <div className='flex justify-end pb-5'>
              <button onClick={vaciarCarrito} className=''>Vaciar carrito</button>
            </div>
            <div className='flex flex-col gap-2 divide-y divide-y-reverse  w-full'>
              {state.cart.cartItems.map(item => <Card key={item._id} producto={item} /> )}
            </div>
            <Summary state={state}/>
          </div>)
      }
      
    </div>
  )
}

export default Carrito

// export async function getServerSideProps() {

//   const isProd = process.env.NODE_ENV === 'production'

//   mercadopago.configure({
//     access_token: process.env.MP_PROD_ACCESS
//   })

//   const { response } = await mercadopago.preferences.create({
//     items: [
//       {
//         id: '656565',
//         currency_id: 'ARS',
//         title: 'Prueba objeto',
//         quantity: 1,
//         unit_price: 150
//       }
//     ],
    
//     back_urls: {
//       failure: 'http://localhost:3000/tienda/thanks/failure',
//       success: 'http://localhost:3000/tienda/thanks/success',
//     }
//   })
//   const mercadoPagoUrl = isProd ? response.init_point : response.sandbox_init_point
//   // const mercadoPagoUrl = response.init_point

//   return{
//     props: {
//       mercadoPagoUrl
//     }
//   }
// }