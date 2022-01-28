import { useState } from "react";

export const useCounter = ( inicial: number = 10) => {

    const [counter, setCounter] = useState<number>(inicial);


    const handleAcumular = (numero: number) => {
        setCounter(counter + numero)
    }

    return {
        counter,
        handleAcumular
    }

};
