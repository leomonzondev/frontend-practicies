import React, { useState, useEffect } from "react"


const url = 'https://rickandmortyapi.com/api/character'

const getChar = async () => {

    
    const [char, setChar] = useState([])

    const fetchApi= async () => {
        const res = await fetch(url)
        console.log(res.status)
        const resJ = res.json()
        setChar(resJ)
        console.log(char)
    }

    useEffect(() => {
        fetchApi()
    },[])
    
}

export default getChar
