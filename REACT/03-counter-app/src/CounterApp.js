import React, { useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value = 0}) => {



    const [ counter, setCounter ] = useState( value );

    



    //handleAdd
    const handleAdd = () => {

        // setCounter(counter + 1)
        setCounter ( (c) => counter + 1 )

    }

    //Reset
    const reset = () => setCounter ( value )

    //Substract
    const subs = () => {
        setCounter ( (c) => counter - 1)
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={handleAdd}> +1 </button>
        <button onClick={reset}> Reset </button>
        <button onClick={subs}> -1 </button>
        </>
    )

}

CounterApp.propTypes = {
    value:PropTypes.number
}

export default CounterApp;