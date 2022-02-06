import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { MainApp } from './MainApp';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                
                <Route path="/" element={ <HomeScreen /> } />
                <Route path="about" element={ <AboutScreen /> } />
                <Route path='login' element={ <LoginScreen /> } />
                <Route path='*' element={<main><h2>There's nothing here</h2></main>} />
            </Routes>
        </div>
        
    )
};
