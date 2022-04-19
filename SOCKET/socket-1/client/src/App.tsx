
import './App.css'

import io from 'socket.io-client'

const socket = io('http://localhost:3001')

function App() {

  const handleBtn = () => {
    socket.emit('')
  }


  return (
    <div className="App" >
      <input placeholder='Send message...'   />
      <button onClick={handleBtn}>Send message</button>
    </div>
  )
}

export default App
