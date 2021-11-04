import React, { useState, useEffect } from 'react'

const Lifecycle = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    
    useEffect(() => {
        console.log('useEffect empty array')
    },[])


    useEffect(() => {
        console.log('USEEFFECT N ODEPENDENCY')
    })

    useEffect(() => {
        console.log('yseffect [counter1]')
    },[counter1])

    useEffect(() => {
        console.log('useeffect counter2')
    },[counter2])

    useEffect(() => {
        console.log('counter1 y counter2')
    },[counter1, counter2])

    return (
        <div>
            <h1>Clicks c1: { counter1 } </h1>
            <h1>Clicks c2: { counter2 } </h1>
            <button onClick={() => setCounter1(counter1 + 1)}>
                Increment c1
            </button>
            <button onClick={() => setCounter2(counter2 + 1)}>
                Increment c2
            </button>
        </div>
    )
}

export default Lifecycle
