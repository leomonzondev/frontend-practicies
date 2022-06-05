
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { Store } from 'utils/Store'



export const Summary = ({state}) => {


  const router = useRouter()
  

  const {cart: {cartItems}} = state

  const [buttonText, setButtonText] = useState('')

  const [precioTotal, setPrecioTotal] = useState(0)

  let preference = {
    items: [
      {
        title: "Mi producto",
        unit_price: 100,
        quantity: 1,
      },
    ],
  };
  
  const handleBuy = () => {

    axios
    .post("/api/create-payment", preference)
    .then(result => setButtonText(result.data))


  }

  const costoEnvio = 600

  return (
    <div className=' text-right px-5 py-5  '>
      
      <div>
        <p className='text-2xl font-medium'>Total con envío</p>
        <p className=' text-3xl font-medium'> ${cartItems.reduce((a, c) => a + c.quantity * c.price, 0) + costoEnvio}</p>
      </div>
      

        <button onClick={() => router.push('/tienda/shipping')} className='px-8 py-2 mt-5 bg-lightAccent-200 text-white font-medium dark:bg-darkAccent-200 rounded-sm' >Continuar compra</button>
       
       {/* <div id="mp-pagar">

       </div> */}
   
    </div>
  )
}
