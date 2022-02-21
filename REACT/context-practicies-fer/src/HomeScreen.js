import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const { user, setUser } = useContext(UserContext)

    const [despedida, setDespedida] = useState('')


    const handleClick = (e) => {
        
        setUser({})
        setDespedida('Hasta la próxima')

        
    }


  return (
    <div>
        {
            user.name && <h1>Bienvenido {user.name}</h1>
        }
        {
            !user.name && <h1>{despedida}</h1>
        }

        <Link to="/">
            <button onClick={e => handleClick(e)}
                className='btn btn-outline-danger'>Logout</button>
        </Link>
    </div>
  )
}
