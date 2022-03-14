import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { Rutas } from './Rutas'


ReactDOM.render(
  <BrowserRouter>
    <Rutas />
  </BrowserRouter>,
  document.getElementById('root')
)
