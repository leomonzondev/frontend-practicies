import React, {useState, useEffect} from 'react'

import { Buy } from './Buy'
import { ImageView } from './ImageView'
import { History } from '../History'


export const ProductoView = ({producto}) => {


  

  return (
    <div className='px-3 md:px-10 pt-12 md:h-screen'>
    <History product={producto} />

            <div className='pt-6'>
              <div className='flex flex-wrap md:flex-nowrap w-full gap-5 '>
                <ImageView producto={producto} />
                <div>
                  <Buy producto={producto} />
                </div>
              </div>
            </div>
        
        
    </div>
  )
}
