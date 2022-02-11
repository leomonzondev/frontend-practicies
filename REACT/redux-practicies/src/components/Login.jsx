import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'


export const Login = () => {

    const dispatch = useDispatch()

    const [usuario, setUsuario] = useState({
        name:"",
        age:0,
        email:""
    })


    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login({name:usuario.name, age:usuario.age, email:usuario.email}))
        console.log(usuario)
    }


return (
    <div>
        
        
        <button
            onClick={() => {
                dispatch(logout())}}
            >
            LOGOUT
        </button>


        <form>
            <input type="text" placeholder="Nombre" onChange={e => setUsuario({...usuario, name:e.target.value})} value={usuario.name} />
            <input type="number" placeholder="Edad" onChange={e => setUsuario({...usuario, age:e.target.value})} value={usuario.age} />
            <input type="email" placeholder="Email" onChange={e => setUsuario({...usuario, email:e.target.value})} value={usuario.email} />
            <button onClick={handleLogin}>Login</button>
        </form>
    </div>
)}
