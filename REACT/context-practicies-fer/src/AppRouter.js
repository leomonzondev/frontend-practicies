import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeScreen } from './HomeScreen'
import { Login } from './Login'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomeScreen />} />
        </Routes>
    </BrowserRouter>
  )
}
