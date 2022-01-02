import { useState } from "react"


interface Props {
    initialValue?: number
}

export const Counter = ({ initialValue = 0 }: Props) => {

    const [counter, setCounter] = useState(initialValue)

    const handleClick = ( ) => {
        setCounter( counter + 1 )
    }

    return (
        <>
            <h1>Counter: { counter } </h1>
            <button
                className="btn btn-outline-success"
                onClick={ handleClick }>+1</button>
        </>
    )
}
