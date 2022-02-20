import React, {  useState } from 'react'
import { UserContext } from './UserContext'




import { AppRouter } from './AppRouter'


export const App = () => {

  const [user, setUser] = useState({
    name:'',
    email:''
  })
  
  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
      >
        <AppRouter />
    </UserContext.Provider>
  )
}
