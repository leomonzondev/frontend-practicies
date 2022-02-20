import React, { Children, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'



const margin = {
  marginBottom: 20
}

export const Login = () => {

  const { user, setUser} = useContext(UserContext)

    const [usuario, setUsuario] = useState({
      name:'',
      email:''
    })

  useEffect(() => {
    console.log(user.email)
  },[])

  return (
    <div>
    <h1>Login</h1>
    <hr/>
    <form  > 
      <input type="text" placeholder='Tu nombre' style={margin} 
        onChange={(e) => setUsuario({...usuario, name:e.target.value})}
      />
      <br/>
      <input type="email" placeholder='Tu email' style={margin} 
      onChange={(e) => setUsuario({...usuario, email:e.target.value})}

      />
      <br/> 
      
      <Link to='/'><button onClick={() => setUser(usuario)} >Login </button></Link>
      
    </form>
    <h1>{usuario.name}</h1>
    </div>
  )
}
