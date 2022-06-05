import React from 'react'
import Link from 'next/link'

export const BannerCursos = () => {
  return (
    <div className='
            flex
            text-white
            bg-gradient-to-r from-lightAccent-200 to-darkAccent-200
            dark:from-darkAccent-100   dark:to-darkTitles
            w-full
            h-[410px]
            md:px-24
            md:py-0
            md:flex-row
            md:text-left
            justify-between
            px-4
            py-10
            text-center
            flex-col
            md:gap-20
            '>

            <h1 className='text-5xl md:w-[840px] md:text-9xl font-bold break-words  '>
                Cursos PsicoHolistica 2022
            </h1>
            <div className='flex flex-col justify-center items-center gap-5 md:gap-8 text-center'>
                <p className='text-4xl font-bold'>Formación 100% ONLINE</p>
                <div className='flex gap-12'>

                    <Link href="/cursos"><button className='px-10 py-4 border-2 rounded-sm font-bold text-xl
                    border-none
                    bg-white 
                    text-lightBlack 
                    hover:dark:bg-darkAccent-200
                    hover:dark:text-lightAccent-300
                    hover:bg-lightAccent-200
                    hover:text-white
                    ease-linear duration-300 
                    '>Saber más</button></Link>
                </div>
            </div>


        </div>
  )
}
