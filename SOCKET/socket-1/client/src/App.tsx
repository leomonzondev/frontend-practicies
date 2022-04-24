
import './App.css'

import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import { Card } from './Card'

const socket = io('http://localhost:3001')

function App() {
  const [input, setInput] = useState('')

  const [msgReceived, setMsgReceived] = useState('')

  const sendMessage = () => {
    socket.emit('send_message', {message: input})
    
  }

  useEffect(() => {
    socket.on('receive_message',(data) => {
      
      setMsgReceived(data.message)
    })
  },[socket])


 


  return (
    <div >
      {/* <input placeholder='Send message...'  onChange={(e) => (setInput(e.target.value))}  />
      <button onClick={sendMessage}>Send message</button>
      <h1>Message:</h1>
      {msgReceived} */}
    <Card />
    </div>
  )
}

export default App
