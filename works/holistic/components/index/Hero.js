import React from 'react'
import heroDesignDark from '../../assets/images/herodesignDark.png'
import heroDesignLight from '../../assets/images/herodesignLight.png'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export const Hero = () => {

    const { theme } = useTheme()

  return (
    <main className='flex md:h-screen  md:items-center '>
        <div className='select-none content-center align-center '>
            <div className='mb-10'>
                <h1 className='text-6xl sm:2xl w-fit text-lightBlack dark:text-white  md:w-3/5 uppercase font-medium font-[Poppins] md:text-8xl'>Sanación <span className='text-purpleAccent' >holística</span> para mente y alma</h1>
                <p className='text-xl w-10/12 md:w-2/5 text-lightTextSecondary dark:text-darkTextSecondary md:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud </p>
            </div>

            <button className='bg-lightAccent-200 text-white dark:text-white dark:bg-darkAccent-200 font-medium drop-shadow-[0_5px_5px_rgba(31,7,174,.5)] dark:drop-shadow-[0_5px_5px_rgba(236,179,34,.2)] px-8 py-2 rounded-sm text-xl  '>Comenzar</button>
        </div>
        <div className='absolute  w-1/2 md:w-6/12 right-[-480px]  select-none  pointer-events-none  '><Image className='animate-spin-slow' src={theme === 'light' ? heroDesignLight : heroDesignDark}/></div>
    </main>
  )
}
