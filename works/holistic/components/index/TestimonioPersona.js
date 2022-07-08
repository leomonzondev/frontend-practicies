import React from 'react'
import Image from 'next/image'
import { urlFor, urlForThumbnail } from 'utils/image'




export const TestimonioPersona = ({testimonio}) => {
  return (
        <article className='md:w-96  text-center flex justify-center items-center flex-col'>
        {/* <button onClick={() => console.log(testimonio)}>MOSTR</button> */}
            <div className='rounded-full border-2 border-lightAccent-200 dark:border-darkAccent-200 overflow-hidden w-36 h-36 ' >
              <Image src={urlFor(testimonio.image)} alt={testimonio.nombre} className='rounded-full' width={100} height={100} layout="responsive" />
            </div>
            <h3 className='text-2xl w-80 pb-1 text-lightAccent-200 dark:text-darkAccent-200' >{testimonio.nombre}</h3>
            <p className='w-full text-lightTextSecondary dark:text-darkTextSecondary italic'>{testimonio.descripcion[0].children[0].text}</p>
        </article>
  )
}
