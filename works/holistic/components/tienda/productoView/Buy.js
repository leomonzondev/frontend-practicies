import React, { useContext, useReducer, useState } from 'react'
import { Store } from '../../../utils/Store'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useSnackbar } from 'notistack'


export const Buy = ({producto}) => {

  const router = useRouter()

  const {state,dispatch }= useContext(Store)

  const [quanty, setQuanty] = useState(1)

  const { enqueueSnackbar } = useSnackbar();

  const handleQnt = (e) => {

    const val = 1
    const { name } = e.target
 

    if(name === 'sustract' && quanty > 1) {
      setQuanty(quanty - val)
    }
    if(name === 'plus') {
      setQuanty(quanty + val)
    }
  }

  const handleAddToCart = async () => {
    const existItem = state.cart.cartItems.find( item => item._id === producto._id)
    // const quantity = existItem ? existItem.quantity + 1 : 1

    dispatch({ type: 'CART_ADD_ITEM', payload: {...producto, quantity: quanty}})

    // router.push("/tienda/carrito")
    enqueueSnackbar("Producto añadido al carrito", { variant: "success"})
 
  }

  const [descriptionlenght, setDescriptionlenght] = useState(100)

const description = producto.description
  
const handleRead = () => {
  descriptionlenght <= 50 ? setDescriptionlenght(500) : setDescriptionlenght(50)
}


  return ( 
    <div className='md:mt-10 flex flex-col justify-center w-6/5  pb-10 '>

          <div className='flex items-center flex-col  md:m-10 md:w-[800px] '>
            <div className='flex w-full justify-between  py-2'>
              <h1 className='text-5xl font-medium'>{producto.name}</h1>
              <p className='text-4xl '>${producto.price}</p>
            </div>
            <div className='w-full h-[2px] bg-darkAccent-200 '></div>

            <div className='py-5 w-full'>
              <p>{description?.slice(0,descriptionlenght)}</p>
              {
                description?.slice().length > 50
                ? <p onClick={handleRead} className="cursor-pointer ">Leer mas</p>
                : ""
                

              }
            </div>

            <div className='md:mt-5 mb-5 w-full'>
              <p className='font-medium text-xl break-all'>Condiciones de envío</p>
              <p>Los envíos los realizamos por Correo Argentino a todo el país. El tiempo de entrega puede ser entre 2 a 5 días hábiles.
              <br/>Los envíos en CABA y GBA salen con logística propia dos veces por semana.

               </p>
            </div>
          </div>


          <section className='flex  gap-5 md:gap-20 h-12 mt-5 items-center pb-5 md:w-[840px] '>
            <article className='flex w-32 items-center '>
              <button name='sustract' onClick={(e) => handleQnt(e)} className="md:ml-10 py-1 text-lightAccent-200 dark:text-darkAccent-100 text-6xl font-light" >-</button>
                <p className='px-5 dark:text-darkAccent-200 text-lightAccent-200 text-3xl font-medium'>{quanty}</p>
              <button name='plus' onClick={(e) => handleQnt(e)} className="mr-5 py-1 text-lightAccent-200 dark:text-darkAccent-100 text-5xl font-light">+</button>
            </article>
            <button className='px-8 py-2  bg-lightAccent-200 text-white font-medium dark:bg-darkAccent-200 rounded-sm w-full' onClick={handleAddToCart} >Agregar al carrito</button>
          </section>
       

    </div>
  )
}
