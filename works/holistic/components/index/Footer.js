import React from 'react'

import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { GrFacebook } from 'react-icons/gr'
import { RiYoutubeLine } from 'react-icons/ri'

export const Footer = () => {
  const size = 30
  return (
    <div className='w-full flex   bg-lightAccent-300 dark:bg-darkAccent-100 h-36 md:py-14 px-5 md:px-48 bottom-0 '>

      <div className='w-full flex justify-center items-center flex-col gap-5 pt-10 '>
        <ul className='flex gap-6 items-center  '>
              <li className="hover:text-lightAccent-100 transition-all duration-300 text-lightAccent-200 hover:dark:text-darkAccent-300 dark:text-darkAccent-200"><a href="https://www.instagram.com/matildecueto/" rel="noreferrer" target="_blank"><BsInstagram size={size} /></a></li>
              <li className=" hover:text-lightAccent-100 transition-all duration-300 text-lightAccent-200 hover:dark:text-darkAccent-300 dark:text-darkAccent-200"><a href="https://www.facebook.com/MATILDEPSICO/" rel="noreferrer" target="_blank"><GrFacebook size={size} /></a></li>
              <li className="hover:text-lightAccent-100 transition-all duration-300 text-lightAccent-200 hover:dark:text-darkAccent-300 dark:text-darkAccent-200"><a href="https://www.youtube.com/channel/UC1oXimrRo4dklJGxxLnAPfw" rel="noreferrer" target="_blank"><RiYoutubeLine size={40} /></a></li>
        </ul>
        
      
        <p className='dark:text-white text-lightTextSecondary'>© 2022 | PsicoHolistica </p>
      </div>
      
    </div>
  )
}
