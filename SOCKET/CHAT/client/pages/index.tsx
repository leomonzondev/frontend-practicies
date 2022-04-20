import type { NextPage } from 'next'
import { useEffect } from 'react'

import io from 'socket.io-client'


const Home: NextPage = () => {


  useEffect(() => {
    

  }, [])
  


  return (
      <div className='container'>
        <div id='message-container'></div>
        <form id='send-container'>
          <input type="text" id='message-input' />
          <button type='submit' id='send-button' >send</button>
        </form>
      </div>

      

  )
}

export default Home
