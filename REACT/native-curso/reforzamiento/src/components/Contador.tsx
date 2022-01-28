import React, { useState } from 'react';

export const Contador = () => {

    const [counter, setCounter] = useState<number>(10);


    const handleAcumular = (numero: number) => {
        setCounter(counter + numero)
    }




return (
    <>
        <h3>Contador <small> {counter} </small> </h3>

        <button
            onClick={() => handleAcumular(1)}
            className='btn btn-primary'>
            +1
        </button>
        &nbsp;
        <button
            onClick={() => handleAcumular(-1)}
            className='btn btn-primary'>
            -1
        </button>

    </>
);
};
