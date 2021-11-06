import React, { useState } from 'react'

const ConditionalApp = () => {


    const [condition, setCondition] = useState(true)


    const toggle = () => {
        setCondition(!condition)
    }

    return (
        <div>
            <button onClick={toggle}>Toggle</button>
            {
                condition ? <h1> Ahora me ves</h1>
                : null
            }

            <h1>State value es {condition.toString()}</h1>
            
        </div>
    )
}

export default ConditionalApp
