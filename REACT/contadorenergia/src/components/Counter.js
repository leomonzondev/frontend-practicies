import React, { useState } from 'react'
import energy from '../images/energy.png'
import tablero from '../images/TABLERO.png'
import undo from '../images/undo.png'
import reflect from '../images/reflect.png'

export const Counter = () => {

    const [count, setCount] = useState(3)
    const [round, setRound] = useState(1)

    const handleSum = () => {
        setCount(count + 1 )
    }

    const handleSus = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(3)
        setRound(1)
    }

    const handlEnd = () => {
        setCount(count + 2)
        setRound(round + 1)
    }

    const handleDes = () => {
        setCount(count - 2)
        setRound(round - 1)
    }

//CONT LIMIT LOGIC
//CONT LIMIT LOGIC
//CONT LIMIT LOGIC
    if (count >= 20 ) {
        setCount(0)
    } else if (count < 0) {
        setCount(0)
    } 

//ROUND LIMIT LOGIC
//ROUND LIMIT LOGIC
//ROUND LIMIT LOGIC

    if (round >= 20) {
        setRound(1)
        setCount(3)
    } else if (round <= 0) {
        setRound(1)
        setCount(3)
    } else if (round >= 10) {
        // const bloodText = styled.body`
        // color:#ad013a`
        
        // const bloodBack = [
        //     {
        //         background
        //     }
        // ]
    }


    return (
        <div className='counter'>
            
            <div className='tableroo'>

                    <div className='counter__gral'>
                        <div className='ball__container'>
                            <div className='rounds'>
                                <h1>Round {round}</h1>
                            </div>
                            <div className='reflect'><img src={reflect} /></div>
                            <div className='energy'>
                                <h1>{count}</h1>
                                <img src={energy} />
                            </div>
                        </div>
                        <div className='btn__counter'>
                            <button className='btn__sus' onClick={handleSus}>-</button>
                            <button className='btn__plus' onClick={handleSum}>+</button>     
                        </div>

                        <div className='btn__extra'>
                            <button className='btn__end' onClick={handlEnd}>End turn</button>
                            
                            <button 
                            onClick={handleDes}
                            className='btn__undo'><img src={undo} /></button>
                        </div>

                        <div>
                            <button className='btn__reset' onClick={handleReset}>New game</button>
                        </div>
                    </div>

            </div>
        </div>
    )
}