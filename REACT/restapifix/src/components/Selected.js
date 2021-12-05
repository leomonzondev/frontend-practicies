import React from 'react'

const Selected = ({name, city, people}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{city}</h2>
            <h3>{people} Millones</h3>
        </div>
    )
}

export default Selected
