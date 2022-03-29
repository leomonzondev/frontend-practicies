import { useState } from 'react'


import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
      <h1>REDUX</h1>
    </>
  )
}

export default App
