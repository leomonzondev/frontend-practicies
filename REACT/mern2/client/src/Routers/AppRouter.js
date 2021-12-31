import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from '../Components/NavBar'


import { HomePage } from '../Pages/HomePage'
import { LoginPage } from '../Pages/LoginPage'
import { NotFoundPage } from '../Pages/NotFoundPage'
import { RegisterPage } from '../Pages/RegisterPage'



export const AppRouter = () => {
    return (

            <BrowserRouter>
                <NavBar />
                <hr/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>

    )
}
