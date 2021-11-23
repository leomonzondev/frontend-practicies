import React, { useEffect, useState } from 'react'

const Call = () => {

    const [post, setPost] = useState([])

    useEffect(() => { 
        const url = 'https://restcountries.com/v2/all'
        fetch(url)
            .then(res => res.json())
            .then(res=> setPost(res))
    },[])



    return (
        <div>
            {
                post.map(posti => <div> <p>{posti.name}</p></div>)
            }
        </div>
    )
}

export default Call
