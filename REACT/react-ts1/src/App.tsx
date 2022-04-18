import { useState } from 'react'

import './App.css'


interface Sub {
  nick: string
  subMonths: number
  avatar: string
  description?: string
}

interface appState {
  subs:Array<Sub> 
}

const initialState = [
  {
    nick:'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Hace de mod'
  },
  {
    nick: 'asd',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=asd',

  }
]


function App() {
 
  const [subs, setSubs] = useState<appState["subs"]>(initialState)




  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>

     <h1>LeoSubs</h1>
     <ul >
      {
        subs.map(sub=> {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={sub.nick} style={{borderRadius:200, height:'auto', width:50}} />
              <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
              <p>{sub.description?.substring(0,100)}</p>
            </li>
          )
        })
      }
     </ul>
    </div>
  )
}

export default App
