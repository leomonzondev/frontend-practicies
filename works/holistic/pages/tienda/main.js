import React from 'react'
import { Anuncio } from '../../components/tienda/Anuncio'
import { Categorias } from '../../components/tienda/Categorias'
import { Footer } from '../../components/tienda/Footer'
import { TiendaLayout } from '../../components/tienda/layouts/TiendaLayout'
import { Productos } from '../../components/tienda/Productos'
import { Slider } from '../../components/tienda/Slider'

import { BsCreditCard, BsCurrencyDollar, BsTruck } from 'react-icons/bs'
import { MdOutlineLocalShipping, MdAttachMoney } from 'react-icons/md'

const main = () => {

  const size = 48


  return (
    <TiendaLayout title={'PsicoHolistica - Tienda'} pageDescription={'Encontrá los mejores productos acá'} >
      <div className='pt-20'>

      <Anuncio />
      <Slider />
      <ul className='flex w-full m-auto text-lightTitles dark:text-darkTitles justify-center items-center pl-40 gap-4'>
        <li className='flex items-center gap-2 w-56 '>
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



      <Categorias />
      <Productos />
      <Footer />
      </div>

    </TiendaLayout>
  )
}

export default main