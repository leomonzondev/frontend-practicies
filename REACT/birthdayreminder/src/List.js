import React, { useState } from 'react';

const List = ({people}) => {

    const stilo = {
        backgroundColor:"BLACK"
    }

    const [negro, setNegro] = useState(null)

return (
    <>
        {people.map((person) => {
            const {id, name, age, image} = person
            return (
                <div style={{
                    display:"flex"
                }}>
                    <article key={id} className="person">
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                        
                    </article>
                    <button 
                    style= {{
                        width:85,
                        height:30,
                        padding:5
                    }}>Saludar</button>
                </div>
                
            )
        })}
    </>
);
};

export default List;