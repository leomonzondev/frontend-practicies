import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import VanillaTilt from 'vanilla-tilt'

const myArticles = 48
const cardsW = '500px'

export const ServiciosArticle = ({title, description, image, clase}) => {


    const tilt = useRef()
  
    const options = {
      scale: 1,
      speed: 500,
      max: 15,
      glare:true,
      "max-glare":0.2,
      reverse: true
    };
  
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options)
    },[options])



  return (
    <article className={`flex w-full justify-center md:gap-x-20 my-${myArticles} flex-wrap md:${clase} `}>
    <div ref={tilt}  className={`md:w-[${cardsW}] `} >
      <Image src={image} alt="Carta "  width={400} height={600}  /> 
    </div>
    <div className='flex flex-col items-start h-100  mt-20  md:ml-20  md:w-2/5 bg-darkTitles'>
      <h2 className='text-3xl md:text-8xl font-medium text-lightBlack dark:text-white'>{title}</h2>
      <p className='text-xl text-lightTextSecondary dark:text-darkTextSecondary'>{description}</p>
    <button className='bg-lightAccent-200 text-white dark:bg-darkAccent-200 py-2 px-3 rounded-sm font-medium mt-16  drop-shadow-[0_5px_5px_rgba(31,7,174,.5)] dark:drop-shadow-[0_5px_5px_rgba(236,179,34,.2)]' >Reservar Turno</button>
    </div>
  </article>
  )
}
