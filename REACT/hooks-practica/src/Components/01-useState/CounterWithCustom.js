import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import './counter.css'

export const CounterWithCustom = () => {


    const { state, increment, decrement, reset } = useCounter(200)


    return (
        <>
            <h1>Counter with Hook: { state } </h1>
            <hr/>

            <button onClick={() => increment(2) } className='btn btn-primary'> + 1</button>
            <button onClick={() => decrement(2) } className='btn btn-primary'> - 1</button>
            <button onClick={ reset } className='btn btn-danger'> RESET </button>
        </>
    )
}
