import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink activeclassname="active" to='/'>Home</NavLink></li>
                <li><NavLink activeclassname="active" to='about'>About</NavLink></li>
                <li><NavLink activeclassname="active" to='login'>Login</NavLink></li>
            </ul>
        </nav>
    )
};
