import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('component montado')
        return () => {
            console.log('component desmontado')
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
        </div>
    )
}
