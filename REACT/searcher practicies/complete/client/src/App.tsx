import React, { useEffect, useState } from 'react'
import { Table } from './Table'


type Props = {
    data: {
        id: number,
        first_name: string,
        last_name: string,
        email: string,
        gender: string
    }[]
}

export const App: React.FC = () => {

    const [query, setQuery] = useState('')
    const [user, setUser] = useState([])


    useEffect(() => {
      const fetchData = async () => {
          const res = await fetch(`http://localhost:5000/?q=${query}`)
          const data = await res.json()
          setUser(data)
      }
      
      console.log(query);

      if(query.length === 0 || query.length > 2 ) {
        fetchData()
      }

    },[query])

  return (
    <div className='app'>
        <input className='search' placeholder='search' value={query} onChange={e => setQuery(e.target.value.toLowerCase())} />
        {/* <ul className='list'>

            {Users.filter(user => user.first_name.toLocaleLowerCase().includes(query)).map(user => (
                <li key={user.id} className='listItem'>{user.first_name}</li>

            ))}

        </ul> */}
        <Table data={user}/>
    </div>
  )
}
