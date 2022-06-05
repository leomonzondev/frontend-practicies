import React from 'react'

import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { GrFacebook } from 'react-icons/gr'
import { RiYoutubeLine } from 'react-icons/ri'

export const Footer = () => {
  const size = 48
  return (
    <div className='w-100 bg-lightAccent-300 dark:bg-darkAccent-100 py-14 px-20 bottom-0'>
      Footer
      <ul className='flex gap-6 pt-10  items-center '>
            <li className="text-lightAccent-300 text-lightAccent-200 hover:dark:text-darkAccent-300 dark:text-darkAccent-200"><a href="https://www.instagram.com/matildecueto/" rel="noreferrer" target="_blank"><BsInstagram size={size} /></a></li>
            <li className="text-lightAccent-300 text-lightAccent-200 hover:dark:text-darkAccent-300 dark:text-darkAccent-200"><a href="https://www.facebook.com/MATILDEPSICO/" rel="noreferrer" target="_blank"><GrFacebook size={size} /></a></li>
            <li className="hover:text-lightAccent-300 text-lightAccent-200 hover:dark:text-darkAccent-300 dark:text-darkAccent-200"><a href="https://www.youtube.com/channel/UC1oXimrRo4dklJGxxLnAPfw" rel="noreferrer" target="_blank"><RiYoutubeLine size={62} /></a></li>
            
          </ul>
    </div>
  )
}
