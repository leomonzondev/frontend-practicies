import React, { useEffect, useState } from 'react'

export const RandomUser = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch (`https://api.randomuser.me/`)
                const data = await res.json()
                console.log(data)
                const userData = {
                    name: data.results[0].name.first,
                    email: data.results[0].email,
                    age: data.results[0].dob.age,
                    profile: data.results[0].picture.medium
                }
                
                return setUser(userData)
                
            } catch (err) {
                console.log(err)
            }
        }
        loadData()
        
    }, [])
    return (
        <div className="container-md m-5 card" style={{width:800},{height:500}}>
        <div className="d-flex align-items-center flex-column" >
        <img 
                src={user.profile}
                className="redondo mt-5"
                ></img>
            
            <h1
                className="mt-5"
            >Mi nombre es {user.name} </h1>


        </div>
        </div>
    )
}
