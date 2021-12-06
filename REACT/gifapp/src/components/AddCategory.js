
import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola mundo')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submite hecho pa' + inputValue)
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="loqseawn"
                value={inputValue}
                onChange={handleInputChange}
                />

        </form>
    )
}
