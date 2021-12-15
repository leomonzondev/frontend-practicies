import React, { useEffect, useState } from 'react'

export const MyIp = () => {

    const [copy, setCopy] = useState('')

    
    useEffect(() => {
        setCopy("129.185.58.9")
        
    })


    // ALERTA COPIED
    // ALERTA COPIED
    const handleCopy = () => {
        navigator.clipboard.writeText(copy)
    }

    return (
        <div>
            <div className='myip'>
                <div className='myip__text'>
                    <h3>your ip address</h3>
                    <h1>{copy}</h1>
                    <button onClick={() => handleCopy()} >copy</button>
                </div>
            </div>
        </div>
    )
}
