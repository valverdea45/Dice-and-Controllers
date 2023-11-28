import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux" 

function NavBar() {

    const user = useSelector((state) => state.users.user)



    return (
        <div>
            {user ? 
            <div>
              <NavLink exact to="/Profile">Profile</NavLink>
              <br/>
              <NavLink exact to="/AddItem">Add an Item</NavLink>
              <br/>
              <NavLink exact to="/Home">Home</NavLink>
            </div>
            :
            <div>
            <NavLink exact to="/LogIn">Log In</NavLink>
            <br/>
            <NavLink exact to="/SignUp" >Sign Up</NavLink>
            <br/>
            <NavLink exact to="/Home">Home</NavLink>
            </div>}
        </div>
    )
}

export default NavBar