import React from 'react'

const Card = ({ dog }) => {
    return (
        <div className="card">
            
            <img src={dog.image} alt="a"/>
            <p>{ dog.breed.name }</p>
        </div>
    )
}

export default Card
