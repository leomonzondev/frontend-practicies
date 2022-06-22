import React, { useState } from 'react'

const asd = () => {

const [counter, setCounter] = useState(0)

const handleClick = (e) => {




}

    //a function that increments the counter    and sets the state
    const increment = () => {
        setCounter(counter + 1)
    }

    //a function that decrements the counter    and sets the state
    const decrement = () => {
        setCounter(counter - 1)
    }
    




  return (
    <div>

        <div>
            <button name='subs' onClick={(e) => handleClick( e)}>-1</button>
            {counter}
            <button name='plus' onClick={(e) => handleClick( e)}>+1</button>
        </div>

    </div>
  )
}

export default asd