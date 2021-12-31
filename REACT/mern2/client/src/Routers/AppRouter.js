import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from '../Components/NavBar'

import { AccountPage } from '../Pages/AccountPage'
import { UsersPage } from '../Pages/admin/UsersPage'
import { HomePage } from '../Pages/HomePage'
import { LoginPage } from '../Pages/LoginPage'
import { NotFoundPage } from '../Pages/NotFoundPage'
import { ProjectPage } from '../Pages/ProjectPage'
import { ProjectsPage } from '../Pages/ProjectsPage'




export const AppRouter = () => {
    return (

            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route  path="/" element={<HomePage />} />
                    <Route  path="/login" element={<LoginPage />} />
                    {/* <Route exact path="/register" component={RegisterPage} /> */}
                    <Route  path="/account" element={<AccountPage />} />
                    <Route  path="/projects"  element={<ProjectsPage />} />
                    <Route  path="/project/:projectId"  element={<ProjectPage />} />
                    <Route  path="/admin/users" element={<UsersPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>

    )
}
