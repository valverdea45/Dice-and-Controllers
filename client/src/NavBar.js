import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <NavLink exact to="/LogIn">
                Log In
            </NavLink>
            <br/>
            <NavLink>
                Sign Up
            </NavLink>
            <br/>
            <NavLink>
                Cart
            </NavLink>
        </div>
    )
}

export default NavBar