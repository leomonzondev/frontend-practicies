import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

export const Login = () => {

  const { user, setUser } = useContext(UserContext)

  const [usuario, setUsuario] = useState({
    name:'',
    email:''
  })

  const handleLogin = () => {
    setUser(usuario)
    console.log(user)
  }
    
  return (
    <div>
      <h1>Login</h1>
      <hr/>
        <form>
            <input type="text" placeholder='Tu nombre' onChange={(e) => setUsuario({...usuario, name:e.target.value})} />
            <br/>
            
            <input type="text" placeholder='Tu email' onChange={(e) => setUsuario({...usuario, email:e.target.value})} />
            <br/>
            <Link to="/home">
              <button   
                onClick={handleLogin}
                className='btn btn-success'>
                Login
              </button>
            </Link>
        </form>
    </div>
  )
}
