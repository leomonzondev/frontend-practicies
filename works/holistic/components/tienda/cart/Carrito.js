import Link from 'next/link'
import { checkoutCart } from 'pages/api/checkout'
import React, { useContext, useEffect } from 'react'
import { Store } from 'utils/Store'
import { Card } from './Card'
import { Summary } from './Summary'
import { m } from 'framer-motion'

export const Carrito = () => {

    


    


    // const pagar = (item) =>  {
    //   const objeto = {
    //   id: item._id,
    //   currency_id: 'ARS',
    //   title: item.title,
    //   quantity: item.quantity,
    //   unit_price: item.price
    // }
    // return objeto
    // }
    
    // const pagarItems = state.cart.cartItems.map(item => pagar(item))
    
    
    
    // useEffect(() => {
 
    //   fetch('http://localhost:3000/api/checkout', {})
    //   .then( res => res.json())
    //   .then (data => console.log(data))
     
    
    // },[])




  return (
    <div className='md:px-52 px-2  '>


         
        
       
    </div>
  )
}
