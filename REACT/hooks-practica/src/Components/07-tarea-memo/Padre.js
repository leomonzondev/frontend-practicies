import React from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';
import '../02-useEffect/effect.css'
import { useCallback } from 'react/cjs/react.development';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback((num)=> {
        setValor( valo => valo + num )
    },[setValor])


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
