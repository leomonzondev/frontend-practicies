import React from 'react'
import { Anuncio } from './Anuncio'
import { Slider } from './Slider'
import { BsCreditCard, BsCurrencyDollar, BsTruck } from 'react-icons/bs'
import { Categorias } from './Categorias'
import { Productos } from './Productos'
import { TiendaLayout } from './layouts/TiendaLayout'


export const Tienda = ({products}) => {

    const size = 48


  return (
    <TiendaLayout title={'PsicoHolistica - Tienda'} pageDescription={'Encontrá los mejores productos acá'} >
      <div className='pt-20'>

        <Anuncio />
        
       
        
        <Slider />
        <ul className='flex w-full m-auto text-lightTitles dark:text-darkTitles justify-center items-center my-12 md:pl-30 gap-4 flex-wrap'>
            <li className='flex items-center gap-2 md:w-56 '>
            <BsCreditCard size={size} className />
            <div className='pt-2 '>
                <h2 className='text-lg font-medium leading-3'>Elegí como pagar</h2>
                <p> 3 cuotas sin interés</p>
            </div>
            </li>

            <li className='flex items-center gap-2  '>
            <BsTruck size={size} />
            <div className='pt-2'>
                <h2 className='text-lg font-medium leading-3'>Envíos a todo el país</h2>
                <p className='leading-4'>Llevamos tu pedido estés donde estés</p>
            </div>
            </li>

            <li className='flex items-center gap-2  '>
            <BsCurrencyDollar size={size} />
            <div className='pt-2'>
                <h2 className='text-lg font-medium leading-3'>10% OFF por transferencia bancaria</h2>
                <p className='leading-1'>Accedé a éste descuento</p>
            </div>
            </li>
            
        </ul>
        {
          products ? <Productos products={products} /> : <p>No hay productos cargados por el momento...</p>
        }
        
        <Categorias products={products}/>

    </div>

    </TiendaLayout>
  )
}



