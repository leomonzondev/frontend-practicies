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
        <div className="card">
            <img src="" alt=""/>
            <h4> </h4>
            <p>pais: {post[0].name}</p>
            <p>capital: {post[0].capital}</p>
            <p>b</p>
        </div>
    )
}

export default Call
