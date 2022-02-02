import React from 'react';

export const List = ({person}) => {
return (
    <>
        {
        person.map(({id,name,age, image}) => (
            <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
            </article>
            ))
        }
    </>
)
};
