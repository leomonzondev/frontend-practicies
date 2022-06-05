import React from 'react'
import { GiHealing, GiStairsGoal, GiHeartInside, GiNewShoot, GiBellShield } from 'react-icons/gi'
import { FaBalanceScale } from 'react-icons/fa'
import { RiMentalHealthFill } from 'react-icons/ri'


const size = 86


export const Especializaciones = () => {
  return (
    <div className='md:pb-48 pb-20'>
      <h1 className='text-[40px] md:text-9xl font-bold text-lightTitles dark:text-darkTitles mb-20'>Especializaciones</h1>
      <section className='flex justify-center flex-wrap gap-y-5 md:gap-y-20'>
      
        <article className='flex flex-col items-center '>
        <div className="text-lightAccent-200 dark:text-darkAccent-200">
          <GiHealing size={size} />
        </div>
          <h3 className='text-3xl text-lightBlack dark:text-white'>Protección y Limpiezas</h3>
          <p className='w-3/4 text-center text-lightTextSecondary dark:text-darkTextSecondary'>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
        </article>

        <article className='flex flex-col items-center'>
        <div className="text-lightAccent-200 dark:text-darkAccent-200">
          <GiStairsGoal size={size} />
        </div>
          <h3 className='text-3xl text-lightBlack dark:text-white'>Riqueza y Éxito</h3>
          <p className='w-3/4 text-center text-lightTextSecondary dark:text-darkTextSecondary'>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
        </article>

        <article className='flex flex-col items-center'>
        <div className="text-lightAccent-200 dark:text-darkAccent-200">
          <FaBalanceScale size={size} />
        </div>
          <h3 className='text-3xl text-lightBlack dark:text-white'>Balance y Enfoque</h3>
          <p className='w-3/4 text-center text-lightTextSecondary dark:text-darkTextSecondary'>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
        </article>

        <article className='flex flex-col items-center'>
        <div className="text-lightAccent-200 dark:text-darkAccent-200">
          <GiHeartInside size={size} />
        </div>
          <h3 className='text-3xl text-lightBlack dark:text-white'>Amor y Felicidad</h3>
          <p className='w-3/4 text-center text-lightTextSecondary dark:text-darkTextSecondary'>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
        </article>

        <article className='flex flex-col items-center'>
          <div className="text-lightAccent-200 dark:text-darkAccent-200">
            <GiNewShoot size={size} />
          </div>
          <h3 className='text-3xl text-lightBlack dark:text-white'>Nuevos Comienzos</h3>
          <p className='w-3/4 text-center text-lightTextSecondary dark:text-darkTextSecondary'>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
        </article>

        <article className='flex flex-col items-center'>
          <div className="text-lightAccent-200 dark:text-darkAccent-200">
            <RiMentalHealthFill size={size} />
          </div>
          <h3 className='text-3xl text-lightBlack dark:text-white'>Salud y Bienestar</h3>
          <p className='w-3/4 text-center text-lightTextSecondary dark:text-darkTextSecondary'>enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
        </article>
      </section>
    </div>
  )
}
