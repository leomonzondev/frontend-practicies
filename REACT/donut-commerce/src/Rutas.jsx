import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { App } from './App';
import { CartShop } from './components/CartShop';
import { ShopProvider } from './context/cart/ShopContext';
import { Cart } from './routes/Cart';


export const Rutas = () => {
    return (
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        
    )
};
