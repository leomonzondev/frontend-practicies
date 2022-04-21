import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './Home'


import './index.css'
import CardState from './context/State';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CardState>
      <Home />
    </CardState>
  </React.StrictMode>
)
