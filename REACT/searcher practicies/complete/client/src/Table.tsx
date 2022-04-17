import React from 'react'

type Props = {
    data: {
        id: number,
        first_name: string,
        last_name: string,
        email: string,
        gender: string
    }[]
}

export const Table: React.FC<Props> = ({ data }) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
            </tr>
            {
                data.map(item => (
                    <tr key={item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                    </tr>
                )) 
            }
        </tbody>
    </table>
  )
}
