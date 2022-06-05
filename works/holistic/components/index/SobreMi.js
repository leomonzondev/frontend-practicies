import React from 'react'
import design from '../../assets/images/aboutDesign.png'
import profile from '../../assets/images/profile.jpg'
import Image from 'next/image'

import { MdOutlineZoomOutMap, MdOutlineArrowForward } from 'react-icons/md'
import { TiArrowShuffle, TiArrowRight } from 'react-icons/ti'
import { RiUserSharedFill } from 'react-icons/ri'

const size = 68

export const SobreMi = () => {
  return (
    <div className='relative'>
      <h1 className='text-6xl md:text-9xl font-bold text-lightTitles dark:text-darkTitles mb-20'>Sobre mi</h1>
      
      <div className='flex md:w-screen flex-wrap flex-col-reverse '>
      <div>
        <p className='text-2xl  md:w-1/2 pb-5'>
        Soy María Matilde Cueto, graduada como Licenciada en Psicología de la Universidad de Buenos Aires.
        Matrícula Nacional 632422 expedida por el Ministerio de Salud de la Nación.
        </p>
        <p className='text-2xl md:w-1/2'>
        Cuento con el curso de Acompañante terapéutico con especialización en trastornos neuropsiquiátricos, seminarios con especialización en Autismo y TGD. Especialización en terapia cognitivo conductual (TCC).
        </p>
      </div>

        <div className='hidden md:block md:absolute w-1/2 top-[-100px] right-[-60px]'>
          <Image src={design} alt="Design About me" className='opacity-25 dark:opacity-10' />
        </div>
        <div className='m-auto w-60 md:w-80 md:absolute md:top-[150px] md:right-[225px] pb-10'>
          <Image src={profile} alt="profile" className="rounded-full " width={400} height={400} />
        </div>
      </div>

      <div className='pt-20'>
        <p className='text-purpleAccent text-2xl text-medium pb-10'>En todos los procesos siempre voy a enfocarme en...</p>
        <section className='flex text-center  flex-wrap  justify-center gap-y-10  md:gap-x-20 pb-36' >
          <article className='flex flex-col items-center w-[24rem]  '>
            <div className="text-lightAccent-200 dark:text-darkAccent-200">
              <MdOutlineZoomOutMap size={size} />
            </div>
            <h3 className='text-3xl w-80 pb-1 text-lightBlack dark:text-white' >Entender tus problemas con claridad</h3>
            <p className='w-full text-lightTextSecondary dark:text-darkTextSecondary '>do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm</p>
          </article>
          
          <article className='flex flex-col items-center w-[24rem]'>
            <div className="text-lightAccent-200 dark:text-darkAccent-200">
              <TiArrowShuffle size={size} />
            </div>
            <h3 className='text-3xl w-[22rem] pb-1 text-lightBlack dark:text-white'>Acompañar durante todo el proceso</h3>
            <p className='w-full text-lightTextSecondary dark:text-darkTextSecondary '>do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm</p>
          </article>

          <article className='flex flex-col items-center w-[24rem]'>
            <div className="text-lightAccent-200 dark:text-darkAccent-200">
              <RiUserSharedFill size={size} />
            </div>
            <h3 className='text-3xl w-[23rem] pb-1 text-lightBlack dark:text-white'>Observar tus resultados y guiarte hacia lo que deseas</h3>
            <p className='w-full text-lightTextSecondary dark:text-darkTextSecondary '>do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm</p>
          </article>
        </section>
      </div>
    </div>
  )
}
