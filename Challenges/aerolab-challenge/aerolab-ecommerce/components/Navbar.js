import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useSnackbar } from 'notistack'
import React, { useContext } from 'react'

import logo from '../assets/aerolab-logo.svg'
import coin from '../assets/icons/coin.svg'
import { UserContext } from '../context/Context'




export const Navbar = () => {

  const { theme, setTheme } = useTheme()

 
  const {state, dispatch} = useContext(UserContext)
  const { enqueueSnackbar } = useSnackbar();

  const { user } = state



  const handleAddPoints = () => {

      const points = 500

      const current = state.user.points
      const amount = current + points

      dispatch({type:"ADD_POINTS", payload: amount})
      enqueueSnackbar(`${points} points added`, { variant: "success" })
  }

  return (
    <div className='w-full bg-white h-20 flex items-center justify-between px-10  drop-shadow-md'>
      <div  >
        <Image src={logo} />
      </div>
      <div className='gap-2 flex'>
        <p className='text-2xl text-black-100'>{user.name}</p>
        <div className='bg-black-300 rounded-full px-5 py-2 flex  gap-1 cursor-pointer'>
          <p className='text-2xl text-black-100 ' onClick={handleAddPoints} >{user.points}</p>
          <Image src={coin} width={28} />
          </div>
          {/* <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change theme</button> */}
      </div>
    </div>
  )
}
