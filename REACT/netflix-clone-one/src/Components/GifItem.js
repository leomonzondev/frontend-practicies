import React from 'react'

export const GifItem = ({ url, title }) => {
    return (
        <div>
            <h3>{ title }</h3>
            <img src={ url } alt={ title } />
        </div>
    )
}
