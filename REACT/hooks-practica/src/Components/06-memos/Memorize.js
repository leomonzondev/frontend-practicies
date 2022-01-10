import React, { useState} from 'react'
import { useCounter } from '../../Hooks/useCounter'
import '../02-useEffect/effect.css'
import { Small } from './Small'

export const Memorize = () => {

    const { counter, increment } = useCounter(10)

    const [show, setShow] = useState(true)


    return (
        <div>
            <h1>Memorize</h1>
            <hr/>

            {
                show && <h2>Counter: <Small value={ counter } /> </h2>
            }

            
            <button onClick={increment} className='btn btn-primary'>
                +1
            </button>

            <button className='btn btn-outline-primary mr-3' onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)} </button>
        </div>
    )
}
