import { useState } from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/cart/Cart'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import SingleItem from './components/SingleItem/SingleItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<SingleItem />} />
      </Routes>
    </div>
    </BrowserRouter>
      <h1>REDUX</h1>
    </>
  )
}

export default App
