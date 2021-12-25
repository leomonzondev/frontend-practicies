import React, { useState } from 'react'

export const App = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const registerUser = async (e) => {
        e.preventDefault()
        const res = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
        })
        const data = await res
    }


    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={registerUser}>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="First Name" />
                    <br />
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="First Name" />
                    <br />
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password" />
                    <br />

                <button>Sign Up</button>
            </form>
        </div>
    )
}
