import React, { useState } from 'react';
import { useCounter } from '../Hooks/useCounter';

export const ContadorConHook = () => {

    const {counter, handleAcumular} = useCounter(100)

return (
    <>
        <h3>Contador con Hook <small> {counter} </small> </h3>

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
