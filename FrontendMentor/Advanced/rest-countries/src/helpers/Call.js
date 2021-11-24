import React, { useEffect, useState } from 'react'

const Call = () => {

    const [post, setPost] = useState([])

    useEffect(() => { 
        const url = 'https://restcountries.com/v2/all'
        fetch(url)
            .then(res => res.json())
            .then(res=> setPost(res))
    },[])

    console.log(post)

    return (
        <div>
            <img src="" alt=""/>
            <h4>asd</h4>
            <p>a</p>
            <p>d</p>
            <p>b</p>
        </div>
    )
}

export default Call
