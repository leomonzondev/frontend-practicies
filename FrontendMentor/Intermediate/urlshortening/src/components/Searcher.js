
import React, { useEffect, useRef, useState } from 'react'


const url= `https://api.shrtco.de/v2/shorten?url=`

const Searcher = () => {

    const [result, setResult] = useState([])

    // const fetchita = async () => {
    //     const res = await fetch(url)
    //     const data = await res.json()

    //     console.log(data)
    // }

    useEffect(() => {

    },[])

    let textInput = React.useRef()

    console.log(result)

    const handleClick = (e) => {
        e.preventDefault()
        console.log(textInput.current.value)
    }
    
    return (
        <div>
            <form>
                <input placeholder="Shorten a link here..."></input>
                <button onClick={(e)=> handleClick(e)}>Shorten it!</button>
            </form>
        </div>
    )
}

export default Searcher
