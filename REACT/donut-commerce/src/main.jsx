import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ShopProvider } from './context/cart/ShopContext'

import './index.css'
import { Rutas } from './Rutas'


ReactDOM.render(
  <ShopProvider>

  <BrowserRouter>
    <Rutas />
  </BrowserRouter>
  </ShopProvider>,
  document.getElementById('root')
)
