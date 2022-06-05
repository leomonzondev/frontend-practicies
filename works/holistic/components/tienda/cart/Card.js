
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { Store } from 'utils/Store'

import { urlFor } from 'utils/image'
import { useSnackbar } from 'notistack'


export const Card = ({producto}) => {

  const { dispatch } = useContext(Store)

  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = (producto) => {
    dispatch({type:"CART_REMOVE_ITEM", payload:producto})
    
  }


  const [ isActive, setIsActive ] = useState(false)


  const updateCartHandler = (e) => {

    const {name} = e.target
  
    if(name === 'sustract' && producto.quantity > 1) {
      dispatch({type: "CART_ADD_ITEM", payload: { ...producto, quantity: producto.quantity - 1}})

    }
    if(name === 'plus' && producto.quantity < 20 ) {
      dispatch({type: "CART_ADD_ITEM", payload: { ...producto, quantity: producto.quantity + 1}})

    }
  }

  


  return (
    
      <section className='flex h-[200px] justify-between '>

          <article className='flex'>
            <Link href={`/tienda/product/${producto.slug}`} >
              <Image src={urlFor(producto.image)} alt={producto.name} height={200} width={200} className="cursor-pointer" />
              </Link>
              
              <div className='md:ml-5 md:mt-5 flex flex-col justify-between'>
                  <h2 className='text-xl md:text-3xl font-medium '>{producto.name}</h2>
                  <p>ml</p>
            <button className='py-3 px-5 rounded-sm text-white hover:text-lightAccent-200 dark:hover:text-darkAccent-200 transition-all duration-300' onClick={() => handleDelete(producto)}>Eliminar</button>
              </div>
          </article>
            <article className='flex h-1/2  text-center w-32 items-center justify-center '>
              <button name='sustract' disabled={producto.quantity <= 1 ? true : false} onClick={(e) => updateCartHandler(e)}  className="text-lightAccent-200 dark:text-darkAccent-100 text-6xl">-</button>
                  <p className='px-20 dark:text-darkAccent-200 text-lightAccent-200 text-3xl font-medium'>{producto.quantity}</p>
                <button name='plus' disabled={producto.quantity >= 20 ? true : false} onClick={(e) => updateCartHandler(e)}  className="text-lightAccent-200 dark:text-darkAccent-100 text-5xl">+</button>
            </article>
         
     
            <p className='text-4xl font-medium'>${producto.quantity * producto.price }</p>
      </section>
      


  )
}
