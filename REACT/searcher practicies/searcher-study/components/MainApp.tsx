import React, { useState } from 'react'
import { Table } from './Table'
import { Users } from './users'

type Props = {
    data: {
        id: number,
        first_name: string,
        last_name: string,
        email: string,
        gender: string
    }[]
}

export const MainApp: React.FC<Props> = () => {

    const [query, setQuery] = useState('')


    const keys = ["first_name", "last_name", "email"]

    const search = (data) => {
        return data.filter(item => keys.some(key => item[key].toLowerCase().includes(query)))
    }


  return (
    <div className='app'>
        <input className='search' placeholder='search' value={query} onChange={e => setQuery(e.target.value)} />
        {/* <ul className='list'>

            {Users.filter(user => user.first_name.toLocaleLowerCase().includes(query)).map(user => (
                <li key={user.id} className='listItem'>{user.first_name}</li>

            ))}

        </ul> */}
        <Table data={search(Users)}/>
    </div>
  )
}
