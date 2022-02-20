import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'


export const Home = () => {


    const { user,setUser } =useContext(UserContext)

    const [despedida, setDespedida] = useState('')

    const handleLogout = (e) => {
      e.preventDefault()
      setUser({})
      setDespedida('Hasta la proxima')
      setTimeout(() => {setDespedida('')},2000)
      
    }

  return (
    <div>
        <h1>Home</h1>
        <hr/>

        {
          user.name && <h2>Bienvenido { user.name }</h2>
        }

        
        <h2>
        {despedida}
        </h2>
        <button className='btn btn-outline-danger'
          onClick={handleLogout}
        >Logout</button>

    </div>
  )
}
