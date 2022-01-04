import React, { useState } from 'react'

export const GifSearcher = ({setCategories}) => {

    const [value, setValue] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        
        if ( value.trim().length > 2 ){
            setCategories( value )
            setValue('')
        }
        
    }

    const handleValue = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    placeholder='Search...'
                    onChange={ handleValue} />
            </form>
        </div>
    )
}
