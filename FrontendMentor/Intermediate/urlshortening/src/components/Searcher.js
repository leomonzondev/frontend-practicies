
import React, { useEffect, useRef, useState } from 'react'




const Searcher = () => {

    const [inputValue, setInputValue] = useState([])

    const [result, SetResult] = useState([])
    
    const fetchita = async () => {
        const url= `https://api.shrtco.de/v2/shorten?url=${inputValue}`
        const res = await fetch(url)
        const data = await res.json()

        console.log(data)

        SetResult(data.result.short_link)
        }

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Shorten a link here..."
                    value={inputValue}
                    onChange={handleInput}
                    />
                <button onClick={fetchita}>Shorten it!</button>
            </form>

            <ol>
                {result}
            </ol>
        </div>
    )
}

export default Searcher
