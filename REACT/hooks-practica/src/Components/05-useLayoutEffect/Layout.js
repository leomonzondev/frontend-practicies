
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { useFetch } from '../../Hooks/useFetch'
import './layout.css'

export const Layout = () => {

    const {counter, increment} = useCounter(1)

    const { data} = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` )
    
    const { quote } = !!data && data[0]

    const [boxSize, setBoxSize] = useState({})


    const pTag = useRef()

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])
    

    return (
        <div>
            <h1>Layout effect</h1>
            <hr/>


            <blockquote className='blockquote text-end'>
                <p 
                    ref={pTag}
                    className='mb-3'> {quote} </p>
            </blockquote>
            
            <pre>{JSON.stringify(boxSize,null,3)}</pre>

            <button
                className='btn btn-primary'
                onClick={increment}>Siguiente quote</button>


        </div>
    )
}
