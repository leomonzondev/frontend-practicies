import React from 'react'




export const App = () => {

  const handle = () => {
    console.log('HOLA HANDLE')
  }

  return (
    <div>
        <h1>HOLA</h1>
        <button onClick={handle}>DELETE SUGG</button>
    </div>
  )
}
