import React, { PropsWithChildren, useEffect, useState } from 'react'
import api from '../ts/api'
import { User } from '../ts/interfaces'

export interface Context {
    state: {
        user: User
    }
    actions: {
        addPoints: ( amount:number ) => Promise<void>
    }
}

const UserContext = React.createContext( {} as Context )

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {

    const [user, setUser] = useState<User>()
    const [status, setStatus] = useState<"pending" | "resolved" | "rejected">('pending')

    const handleAddPoints = async( amount: number ) => {
        if ( !user ) return

        return api.points.add( amount ).then( () => {
            setUser({ ...user, points: user.points + amount })
        })
    }

    useEffect(() => {
        api.fetch().then( user => {
            setUser( user )
            setStatus( "resolved" )
        })
    },[])

    if (!user || status === "pending") {
        return (
            <div><h1>Loading...</h1></div>
        )
    }

    const state: Context["state"] = {
        user
    }
    const actions = {
        addPoints: handleAddPoints
    }


  return (
    <UserContext.Provider value={{ state, actions }}>{ children }</UserContext.Provider>
  )
}

export {UserContext as default, UserProvider as Provider}
