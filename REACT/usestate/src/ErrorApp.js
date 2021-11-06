import React, { useState } from 'react'

const ErrorApp = () => {

    const [error, setError] = useState("")

    const buttonStyle = {
        backgroundColor:"red",
        borderStyle:"none",
        margin:10,
        borderRadius:5,
        ':hover':{
            backgroundColor:"orange"
        }
    }


    return (
        <div>
            <button
                onClick= {() => setError('Error to fetch api')}
                style= {buttonStyle}
            >
            Error
            </button>

            <button
                onClick={() => setError('Credenciales incorrectas')}
                style= {buttonStyle}
            >
            Another Error
            </button>

            <button
                onClick={() => setError('')}
                style= {buttonStyle}
            >
            Proceso Exitoso
            </button>


            {
                error && <h1>{error}</h1>
            }
            
        </div>
    )
}

export default ErrorApp
