import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Error } from './Error'

import { Home } from './Home'
import { Login } from './Login'
import { NavBar } from './NavBar'

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error />} />
            <Route path='login' element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}
