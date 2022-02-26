import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link href='/' >
                    <a>Inicio</a>
                </Link>
            </li>
        </ul>
    </nav>
  )
}
