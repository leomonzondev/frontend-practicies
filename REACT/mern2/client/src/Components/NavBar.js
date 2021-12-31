import { NavLink } from "react-router-dom"
import './navbar.css'

export const NavBar = () => {
    return (
        <div style={{"color":"white","backgroundColor":"#525252"}}>
            <ul>
                <li>
                    <NavLink  to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink  to="/login">LOGIN</NavLink>
                </li>
                <li>
                    <NavLink  to="/register">REGISTER</NavLink>
                </li>
            </ul>
        </div>
    )
}
