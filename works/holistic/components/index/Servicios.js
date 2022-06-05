import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import psicoterapia from '../../assets/images/card9.jpg'
import reiki from '../../assets/images/card1.jpg'
import karmica from '../../assets/images/card2.jpg'
import bach from '../../assets/images/card7.jpg'

import VanillaTilt from 'vanilla-tilt'


const myArticles = 48



export const Servicios = ({servicios}) => {

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


  useEffect(() => {
    VanillaTilt.init(tilt.current, options)
    VanillaTilt.init(tilt2.current, options)
    VanillaTilt.init(tilt3.current, options)
    VanillaTilt.init(tilt4.current, options)
  },[options])


  const [scroll, setScroll] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
    console.log(position)
  };

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);

    
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };

    window.addEventListener('scroll', reveal)

    const reveal = () => {
    const reveals = document.querySelector('.reveal')

    for(var i = 0; i < reveals.length; i++) {
      const windowH = window.pageYOffset
      const revealTop = reveals[i].getBoundingClientRect().revealTop
      const revealPoint = 150

      if(revealTop === windowH ) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
      
    }
    console.log(windowH)
  }

    return () => {
      window.removeEventListener("scroll", reveal);
  } 

  },[])



  const psicologia = servicios?.filter(item => item?.titulo == "psicología" && item)
  // const reiki = servicios.find()
  // const biodescodificacion = servicios.find()
  // const floral = servicios.find()

  return (
    <div className="md:pb-48 ">
        <h1 className='text-6xl md:text-9xl font-bold text-lightTitles dark:text-darkTitles mb-20'>Servicios</h1>
        <button onClick={() => console.log(servicios)}>MOSTRAR</button>
        <div className='flex flex-col md:gap-y-20'>
  
        <article className={`transition ease-in flex w-full justify-center md:gap-x-20 my-${myArticles} flex-wrap pb-20 md:pb-0 `}>
          <div ref={tilt2}  className={`w-[300px] h-[450px] md:w-[380px] md:h-[570px]`} >
            <Image src={psicoterapia} alt="Carta psicoterapia" width={400} height={600} layout="responsive"  />
          </div>
          <div className='flex flex-col items-start h-100  mt-5 md:mt-20  md:ml-20  md:w-2/5 w-full'>
            <h2 className='text-7xl md:text-8xl font-medium text-lightBlack dark:text-white mb-3'>{psicologia.titulo}</h2>
            <p className='text-xl text-lightTextSecondary dark:text-darkTextSecondary break-word'>Atención psicológica para niños, adolescentes y adultos. <br/>
            Servicio de asesoramiento y orientación psicológica.<br/>
            Diseño planes de tratamiento ajustados a cada situación particular. <br/>
            Genero un espacio de confianza donde se busque tratar las dificultades y padecimientos psicológicos del paciente.</p>
          <button className='bg-lightAccent-200 text-white dark:bg-darkAccent-200 py-2 px-3 rounded-sm font-medium md:mt-16 mt-5 drop-shadow-[0_5px_5px_rgba(31,7,174,.5)] dark:drop-shadow-[0_5px_5px_rgba(236,179,34,.2)]' ><a href="https://docs.google.com/forms/d/15JreDx79D1o9tL4A1JhFxUpD4v-_jwwyzLVq-yodVQ4/edit" target="_blank" rel="noreferrer">Reservar Turno</a></button>
          </div>
        </article>

        <article className={`flex w-full justify-center md:gap-x-20 my-${myArticles} flex-wrap pb-20 md:pb-0  flex-row-reverse `}>
          <div ref={tilt3}  className={` w-[300px] h-[450px] md:w-[380px] md:h-[570px]`} >
            <Image src={reiki} alt="Carta psicoterapia" width={400} height={600} layout="responsive"/>
          </div>
          <div className='flex flex-col items-start h-100  mt-5 md:mt-20  md:ml-20  md:w-2/5 w-full'>
            <h2 className='text-7xl md:text-8xl font-medium text-lightBlack dark:text-white'>Reiki</h2>
            <p className='text-xl text-lightTextSecondary dark:text-darkTextSecondary break-word'>Terapia que tiene un origen espiritual y se basa en la transmisión de energía vital a través de la imposición de manos. <br/> Se utiliza para obtener paz y equilibrio en todos los niveles: físico, mental, emocional y espiritual.</p>
          <button className='bg-lightAccent-200 text-white dark:bg-darkAccent-200 py-2 px-3 rounded-sm font-medium md:mt-16 mt-5 drop-shadow-[0_5px_5px_rgba(31,7,174,.5)] dark:drop-shadow-[0_5px_5px_rgba(236,179,34,.2)]' >Reservar Turno</button>
          </div>
        </article>

        <article className={`flex w-full justify-center md:gap-x-20 flex-wrap  my-${myArticles} pb-20 md:pb-0 `}>
          <div  ref={tilt} className={`w-[300px] h-[450px] md:w-[380px] md:h-[570px]`} >
            <Image src={karmica} alt="Carta psicoterapia" width={400} height={600} layout="responsive" />
          </div>
          <div className='flex flex-col items-start h-100 mt-5 md:mt-20   md:ml-20  md:w-2/5 w-full  md:break-normal'>
            <h2 className='text-6xl md:text-7xl font-medium text-lightBlack dark:text-white break-all'>Biodescodificación <br/> emocional</h2>
            <p className='text-xl text-lightTextSecondary dark:text-darkTextSecondary break-words'>El principal objetivo de la biodescodificación es encontrar el síntoma de la enfermedad, de manera que el enfermo pueda tomar consciencia de la misma y empezar a tener una completa solución biológica, sin dejar que la enfermedad transcurra. </p>
          <button className='bg-lightAccent-200 text-white dark:bg-darkAccent-200 py-2 px-3 rounded-sm font-medium md:mt-16 mt-5 drop-shadow-[0_5px_5px_rgba(31,7,174,.5)] dark:drop-shadow-[0_5px_5px_rgba(236,179,34,.2)]' >Reservar Turno</button>
          </div>
        </article>

        <article className={`flex w-full justify-center md:gap-x-20 my-${myArticles} flex-wrap pb-20 md:pb-0 flex-row-reverse `}>
          <div ref={tilt4}  className={`w-[300px] h-[450px] md:w-[380px] md:h-[570px] `} >
            <Image src={bach} alt="Carta psicoterapia" width={400} height={600} layout="responsive" />
          </div>
          <div className='flex flex-col items-start h-100  mt-5 md:mt-20  md:ml-20  md:w-2/5 w-full'>
            <h2 className='text-7xl md:text-8xl font-medium text-lightBlack dark:text-white md:mb-5'>Terapia Floral</h2>
            <p className='text-xl text-lightTextSecondary dark:text-darkTextSecondary break-word'>Esencias que se extraen de diversos tipos de flores, de manera completamente natural y que actúan a nivel espiritual, físico e incluso a nivel personal.</p>
          <button className='bg-lightAccent-200 text-white dark:bg-darkAccent-200 py-2 px-3 rounded-sm font-medium md:mt-16 mt-5 drop-shadow-[0_5px_5px_rgba(31,7,174,.5)] dark:drop-shadow-[0_5px_5px_rgba(236,179,34,.2)]' >Reservar Turno</button>
          </div>
        </article>

</div>
        </div>  
   
  )
}
