import React from 'react'
import {FiSearch} from 'react-icons/Fi'
import {FaRegBell} from 'react-icons/Fa'
import {MdOutlineMessage} from 'react-icons/Md'
import {BsWallet2} from 'react-icons/Bs'





export const Nav = () => {
  return (
    <nav>

        <div className='nav-izq'>
            <h1>My wallet</h1>
            <div className='nav-searchDiv'>
                <FiSearch className='nav-searchIcon' size={20} />
                <input className='nav-search' placeholder='Search' />
                
            </div>
        </div>

        <div className='nav-der'>
            <div className='nav-icons'>
                <ul>
                    <li className='nav-li'><FaRegBell color='#a8a8a8' size={20} /></li>
                    <li className='nav-li msg'><MdOutlineMessage color='#a8a8a8' size={20} /></li>
                    <li className='nav-li'><BsWallet2 color='#a8a8a8' size={20} /></li>
                </ul>
            </div>

            <div className='nav-user'>
                <p>Marzo 24, 2022</p>
                <img src='#' alt='user-icon' />
            </div>
        </div>
    </nav>
  )
}
