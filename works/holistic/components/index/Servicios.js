import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import psicoterapia from '../../assets/images/card9.webp'
import reiki from '../../assets/images/card1.webp'
import karmica from '../../assets/images/card2.webp'
import bach from '../../assets/images/card7.webp'

import { useInView } from 'react-intersection-observer';
import VanillaTilt from 'vanilla-tilt'



const myArticles = 48

const Servicios = ({servicios}) => {

  const tilt = useRef()
  const tilt2 = useRef()
  const tilt3 = useRef()
  const tilt4 = useRef()

  const options = {
    scale: 1,
    speed: 500,
    max: 15,
    glare:true,
    "max-glare":0.2,
    reverse: true
  };

//Fade animation intersect
const { ref: psiRef, inView: psiView} = useInView({
  delay:50
});

const { ref: reikiRef, inView: reikiView} = useInView({
  delay:50
});
const { ref: bachRef, inView: bachView} = useInView({
  delay:50
});
const { ref: bioRef, inView: bioView} = useInView({
  delay:50
});

 
  useEffect(() => {
    VanillaTilt.init(tilt.current, options)
    VanillaTilt.init(tilt2.current, options)
    VanillaTilt.init(tilt3.current, options)
    VanillaTilt.init(tilt4.current, options)
  },[options])

  const psicologia = servicios?.filter(item => item.orden == "1")
  const reikiText = servicios?.filter(item => item.orden == "2")
  const biodesText = servicios?.filter(item => item.orden == "3")
  const bachText = servicios?.filter(item => item.orden == "4")

  return (
    <div className="md:pb-48 ">
        <h1 className='text-6xl md:text-9xl font-bold text-lightTitles dark:text-darkTitles mb-20'>Servicios</h1>
        
        <div className='flex flex-col md:gap-y-20'>
  
        <article ref={psiRef} className={`${psiView ? "opacity-100"  : "opacity-0" } transition-all duration-[1500ms] flex w-full justify-center md:gap-x-20 my-${myArticles} flex-wrap pb-20 md:pb-0 `}>
          <div ref={tilt}  className={`w-[300px] h-[450px] md:w-[380px] md:h-[570px]`} >
            <Image src={psicoterapia} alt="Carta psicoterapia" width={400} height={600} layout="responsive"  />
          </div>
          <div className='flex flex-col items-start h-100  mt-5 md:mt-20  md:ml-20  md:w-2/5 w-full'>
            <h2 className='text-7xl md:text-8xl font-medium text-lightBlack dark:text-white mb-3'>{psicologia[0].titulo}</h2>
            <p className='text-xl text-lightTextSecondary dark:text-darkTextSecondary break-word'>{psicologia[0].descripcion[0].children[0].text}</p>
          <button className='bg-lightAccent-200 text-white dark:bg-darkAccent-200 py-2 px-3 rounded-sm font-medium md:mt-16 mt-5 drop-shadow-[0_5px_5px_rgba(31,7,174,.5)] dark:drop-shadow-[0_5px_5px_rgba(236,179,34,.2)]' ><a href="https://docs.google.com/forms/d/15JreDx79D1o9tL4A1JhFxUpD4v-_jwwyzLVq-yodVQ4/edit" target="_blank" rel="noreferrer">Reservar Turno</a></button>
          </div>
        </article>

        <article ref={reikiRef} className={`${reikiView ? "opacity-100"  : "opacity-0" } transition-all duration-[1500ms] flex w-full justify-center md:gap-x-20 my-${myArticles} flex-wrap pb-20 md:pb-0  flex-row-reverse `}>
          <div ref={tilt2} className={` w-[300px] h-[450px] md:w-[380px] md:h-[570px]`} >
            <Image src={reiki} alt="Carta psicoterapia" width={400} height={600} layout="responsive"/>
          </div>
          <div className='flex flex-col items-start h-100  mt-5 md:mt-20  md:ml-20  md:w-2/5 w-full'>
            <h2 className='text-7xl md:text-8xl font-medium text-lightBlack dark:text-white'>{reikiText[0].titulo}</h2>
            <p className='text-xl text-lightTextSecondary dark:text-darkTextSecondary break-word'>{reikiText[0].descripcion[0].children[0].text}</p>
          <button className='bg-lightAccent-200 text-white dark:bg-darkAccent-200 py-2 px-3 rounded-sm font-medium md:mt-16 mt-5 drop-shadow-[0_5px_5px_rgba(31,7,174,.5)] dark:drop-shadow-[0_5px_5px_rgba(236,179,34,.2)]' >Reservar Turno</button>
          </div>
        </article>

        <article ref={bioRef} className={`${bioView ? "opacity-100" : "opacity-0" } transition-all duration-[1500ms] flex w-full justify-center md:gap-x-20 flex-wrap  my-${myArticles} pb-20 md:pb-0 `}>
          <div  ref={tilt3} className={`w-[300px] h-[450px] md:w-[380px] md:h-[570px]`} >
            <Image src={karmica} alt="Carta psicoterapia" width={400} height={600} layout="responsive" />
          </div>
          <div className='flex flex-col items-start h-100 mt-5 md:mt-20   md:ml-20  md:w-2/5 w-full '>
            <h2 className='text-6xl md:text-7xl font-medium text-lightBlack dark:text-white break-all'>{biodesText[0].titulo}</h2>
            <p className='text-xl text-lightTextSecondary dark:text-darkTextSecondary break-words'>{biodesText[0].descripcion[0].children[0].text}</p>
          <button className='bg-lightAccent-200 text-white dark:bg-darkAccent-200 py-2 px-3 rounded-sm font-medium md:mt-16 mt-5 drop-shadow-[0_5px_5px_rgba(31,7,174,.5)] dark:drop-shadow-[0_5px_5px_rgba(236,179,34,.2)]' >Reservar Turno</button>
          </div>
        </article>

        <article ref={bachRef} className={`${bachView ? "opacity-100"  : "opacity-0" } transition-all duration-[1500ms] flex w-full justify-center md:gap-x-20 my-${myArticles} flex-wrap pb-20 md:pb-0 flex-row-reverse `}>
          <div ref={tilt4}  className={`w-[300px] h-[450px] md:w-[380px] md:h-[570px] `} >
            <Image src={bach} alt="Carta psicoterapia" width={400} height={600} layout="responsive" />
          </div>
          <div className='flex flex-col items-start h-100  mt-5 md:mt-20  md:ml-20  md:w-2/5 w-full'>
            <h2 className='text-7xl md:text-8xl font-medium text-lightBlack dark:text-white md:mb-5'>{bachText[0].titulo}</h2>
            <p className='text-xl text-lightTextSecondary dark:text-darkTextSecondary break-word'>{bachText[0].descripcion[0].children[0].text}</p>
          <button className='bg-lightAccent-200 text-white dark:bg-darkAccent-200 py-2 px-3 rounded-sm font-medium md:mt-16 mt-5 drop-shadow-[0_5px_5px_rgba(31,7,174,.5)] dark:drop-shadow-[0_5px_5px_rgba(236,179,34,.2)]' >Reservar Turno</button>
          </div>
        </article>

</div>
        </div>  
   
  )
}

export default Servicios