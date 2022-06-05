import React from 'react'
import Image from 'next/image'




export const TestimonioPersona = ({testimonio}) => {
  return (
        <article className='md:w-96  text-center flex justify-center items-center flex-col'>
            <div className='rounded-full border-2 border-lightAccent-200 dark:border-darkAccent-200 overflow-hidden w-36 flex justify-center items-center ' >
              <Image src={testimonio.img} alt={testimonio.name} className='rounded-full' />
            </div>
            <h3 className='text-2xl w-80 pb-1 text-lightAccent-200 dark:text-darkAccent-200' >{testimonio.name}</h3>
            <p className='w-full text-lightTextSecondary dark:text-darkTextSecondary italic'>{testimonio.testimony}</p>
        </article>
  )
}
