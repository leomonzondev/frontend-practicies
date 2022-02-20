import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h2>
        La página que estás buscando no se encuentra
        </h2>
        

        <Link to='/'><button >Volver al inicio</button></Link>
        
    </div>
  )
}
