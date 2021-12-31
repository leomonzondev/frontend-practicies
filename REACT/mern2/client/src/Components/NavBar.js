import { NavLink } from "react-router-dom"
import './navbar.css'

export const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : '' } to="/home">HOME</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'blue' : '' } to="/about">ABOUT</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'green' : '' } to="/login">LOGIN</NavLink>
                </li>
            </ul>
        </div>
    )
}
