import React, {useRef, useEffect, useState} from 'react'
import Image from 'next/image'

import contact from '../../assets/images/card3.webp'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { GrFacebook } from 'react-icons/gr'
import { RiYoutubeLine } from 'react-icons/ri'


import VanillaTilt from 'vanilla-tilt'


const cardsW = '500px'
const size = 48

export const Contacto = () => {


  const [input, setInput] = useState({
    nombre:'',
    mensaje:''
  })

  const [isActive, setIsActive] = useState(true)


    const isValid= () => {
      if(input.nombre.slice().length < 3 || input.mensaje.slice().length < 3) {
        setIsActive(true)
      }
      if(input.nombre.trim() && input.mensaje.trim()) {
        setIsActive(false)
      }
    }

    useEffect(( )=> {
      isValid()
    },[input.mensaje, input.nombre])


  const handleInput = (e) => {

    const { name, value } = e.target
    setInput({...input, [name]: value})

  }

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hola, mi nombre es *${input.nombre}* y mi mensaje es *${input.mensaje}*`
    const url = `https://wa.me/5491141623583/?text=${encodeURIComponent(text)}`
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null

    setInput({nombre:'', mensaje:''})
  }


  return (
    <div className='md:pb-40 pb-20 mt-20'>
      <h1 className=' text-6xl md:text-9xl font-bold text-lightTitles dark:text-darkTitles mb-20 select-none '>Contacto</h1>

      <section className='flex md:px-20 flex-wrap md:gap-44 md:justify-center gap-10'>
        <article ref={tilt}  className={`w-[300px] h-[450px] md:w-[380px] md:h-[570px] m-auto md:m-0`} >
          <Image src={contact} alt="Carta psicoterapia" width={400} height={600}/>
        </article>

        <div className='flex md:w-1/2 md:gap-44 md:pt-20 flex-wrap md:flex-nowrap justify-center gap-10 '>
        <form className='flex flex-col gap-10' onSubmit={(e) => handleSubmit(e)} >
          <label>
            <h2 className='text-4xl font-medium pb-3'>Nombre</h2>
            <input autoComplete="off"  name='nombre' className='bg-transparent border-b-2 border-darkAccent-100 md:w-96 w-80 focus:outline-none text-2xl pl-1' onChange={e => handleInput(e)} value={input.nombre} />
          </label>

          <label>
            <h2 className='text-4xl font-medium pb-3'>Mensaje</h2>
            <input autoComplete="off" name='mensaje' className='bg-transparent border-b-2 border-darkAccent-100 md:w-96 w-80 focus:outline-none text-2xl pl-1' onChange={e => handleInput(e)} value={input.mensaje} />
          </label>
          <button disabled={isActive} className='flex text-center font-medium justify-center items-center gap-4 py-2 rounded-sm text-3xl bg-lightAccent-200 dark:bg-darkAccent-200 drop-shadow-[0_5px_5px_rgba(31,7,174,.5)] dark:drop-shadow-[0_5px_5px_rgba(236,179,34,.2)] disabled:bg-lightBlack disable:dark:bg-lightBlack disabled:text-darkTextSecondary text-white '>Enviar mensaje <BsWhatsapp size={32} /></button>
        </form>


        <article className='md:w-auto w-full md:pl-0 pl-4 '>
          <h2 className='text-4xl font-medium pb-3'>Email</h2>
          <p className='text-2xl '>matildecueto@gmail.com</p>
          <ul className='flex gap-6 pt-10  items-center '>
            <li className="text-lightAccent-200 dark:text-darkAccent-200"><a href="https://www.instagram.com/matildecueto/" rel="noreferrer" target="_blank"><BsInstagram size={size} /></a></li>
            <li className="text-lightAccent-200 dark:text-darkAccent-200"><a href="https://www.facebook.com/MATILDEPSICO/" rel="noreferrer" target="_blank"><GrFacebook size={size} /></a></li>
            <li className="text-lightAccent-200 dark:text-darkAccent-200"><a href="https://www.youtube.com/channel/UC1oXimrRo4dklJGxxLnAPfw" rel="noreferrer" target="_blank"><RiYoutubeLine size={62} /></a></li>
            
          </ul>
        </article>
      </div>
      </section>




    </div>
  )
}
