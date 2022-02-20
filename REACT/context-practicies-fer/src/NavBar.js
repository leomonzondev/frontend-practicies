import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><Link to='/'><a>Home</a></Link></li>
            <li><Link to='login'><a>Login</a></Link></li>
        </ul>
    </nav>
  )
}
