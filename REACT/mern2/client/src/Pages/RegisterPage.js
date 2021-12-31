import React, { useState } from 'react'
import axios from 'axios'


export const RegisterPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    const registerUser = (e) => {
        e.preventDefault()

        const data = {email,password}
        const url = ""
        axios.post(url, data)
    }

    return (
        <div>
            <h1>REGISTER</h1>
            <form action='' onSubmit={e => registerUser(e)}>
                <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} /> <br/>
                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> <br/>
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}
