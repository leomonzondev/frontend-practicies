import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'


export const CategoriaItem = ({item, products}) => {



  return (
    <div className=' md:w-[500px] relative bg-darkTitles'>
      <div className='flex justify-center item-center'>
        <Image src={item.img} width={690} height={530} layout='fixed' className='' />

      </div>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
        <h2 className='text-white mb-5 font-medium text-3xl'>{item.title}</h2>

        <Link href={`/tienda/${item.link}`}>
          <button className='border-none p-2 bg-white text-lightTextSecondary cursor-pointer font-medium dark:hover:text-darkAccent-200 transition-all duration-300 hover:text-lightAccent-200'>ENTRAR</button>
        </Link>
      </div>
    </div>
  )
}
