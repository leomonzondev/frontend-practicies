import Image from 'next/image'
import React from 'react'

import logo from '../assets/aerolab-logo.svg'
import coin from '../assets/icons/coin.svg'
import { usePoints, useUser } from '../ts/hooks';

export const Navbar = () => {

  const [points, addPoints] = usePoints()

  const user = useUser()


  return (
    <div className='w-full bg-white h-20 flex items-center justify-between px-10'>
      <div className=''>
        <Image src={logo} />
      </div>
      <div className='gap-2 flex'>
        <p className='text-2xl text-black-100'>{user.name}</p>
        <div className='bg-black-300 rounded-full px-5 py-2 flex  gap-1'>
          <p className='text-2xl text-black-100 ' onClick={() => addPoints(500)} >{points}</p>
          <Image src={coin} width={28} />
          </div>
      </div>
    </div>
  )
}
