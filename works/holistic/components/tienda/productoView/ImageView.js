import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import { productos } from '../data'
import {useRouter} from 'next/router'
import { urlFor } from 'utils/image'

export const ImageView = ({producto}) => {


  return (
    <div className='flex  flex-wrap-reverse '>

        <div className='md:w-[787px] md:h-[600px]  mb-5 md:mr-5'>
           <Image src={urlFor(producto.image)} width={800} height={630}/>  
        </div>
    </div>
  )
}
