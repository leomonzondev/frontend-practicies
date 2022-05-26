import { Card } from 'components/tienda/cart/Card'
import { Carrito } from 'components/tienda/cart/Carrito'
import { Summary } from 'components/tienda/cart/Summary'
import mercadopago from 'mercadopago'
import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../../utils/Store'

const carrito = () => {









  return (
    <div className='pt-24 h-screen '>

      <Carrito  />
      <button onClick={() => console.log(pagarItems)}>MOSTRAR OBJETO</button>
    </div>
  )
}

export default carrito

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