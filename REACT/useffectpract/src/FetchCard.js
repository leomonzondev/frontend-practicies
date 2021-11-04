import React, { useCallback, useEffect, useState} from 'react'
import getPosts from './helpers/getPosts'
import getUser from './helpers/getUser'

// const initialUser = {
//     name: 'Cristian',
//     email: 'cristianleonardobm@gmail.com'
// }

// const initialPosts = [
//     { id: 1, title: "Post 1"},
//     { id: 2, title: "Post 2"}
// ]

const FetchCard = () => {

    const [user, setUser] = useState({})
    const [posts, setsPosts] = useState([])

    const updateUser = () => {
        getUser()
            .then((newUser) => {
                setUser(newUser)
            })
    }

    
    const updatePosts = useCallback(() => {
        getPosts(user.id)
        .then((newPosts) => {
            setsPosts(newPosts)
        })
    },[user.id])


    
    
    useEffect(() => {
        if(user?.id){
        updatePosts()}
    },[user, updatePosts])

    useEffect (() => {
        updateUser()
    },[])
    
    return (
        <div>
            
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <button onClick={updateUser}>Another User</button>
            <br/>
            <hr/>
            <h2>Posts - user: {user.id}</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchCard
