import React from 'react'
import heroDesignDark from '../../assets/images/mandala.webp'
import heroDesignLight from '../../assets/images/mandalablue.webp'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export const Hero = ({hero}) => {

    const { theme } = useTheme()

  return (
    <main className='flex md:h-screen  md:items-center '>
    {/* <button onClick={() => console.log(hero)}>MOSTRAR INFO</button> */}
        <div className='select-none content-center align-center '>
            <div className='mb-10'>
                <h1 className='text-6xl sm:2xl w-fit text-lightBlack dark:text-white  md:w-3/5 uppercase font-medium font-[Poppins] md:text-8xl'>Sanación <span className='text-purpleAccent' >holística</span> para mente y alma</h1>
                <p className='text-xl w-10/12 md:w-2/5 text-lightTextSecondary dark:text-darkTextSecondary md:text-2xl'>{hero[0].descripcion[0].children[0].text}</p>
            </div>

            <button className='bg-lightAccent-200 text-white dark:text-white dark:bg-darkAccent-200 font-medium drop-shadow-[0_5px_5px_rgba(31,7,174,.5)] dark:drop-shadow-[0_5px_5px_rgba(236,179,34,.2)] px-8 py-2 rounded-sm text-xl'>Descubrir más</button>
        </div>
        <div className='absolute w-1/2 md:w-6/12 right-[-480px] select-none  pointer-events-none  '><Image className='animate-spin-slow' src={theme === 'light' ? heroDesignLight : heroDesignDark}/></div>
    </main>
  )
}
