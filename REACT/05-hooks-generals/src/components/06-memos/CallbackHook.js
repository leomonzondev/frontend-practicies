import React, { useCallback, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

import '../02-useEffect/effects.css'
import { ShowIncrements } from './ShowIncrements'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    const increment = useCallback( (num) => {
        setCounter(c => c + num)
    },[setCounter])

    useEffect(() => {

    }, [increment])


    return (
        <div>
            <h1>useCallback hook: {counter}</h1>
            <hr />

            <ShowIncrements increment={increment}/>
        </div>
    )
}
