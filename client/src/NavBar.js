import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

function NavBar() {

    const user = useSelector((state) => state.users.user)



    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px"

        }}>
            {user ?
                <>
                    <NavLink className="navbarbutton" exact to="/Profile">Profile</NavLink>
                    <br />
                    <NavLink className="navbarbutton" exact to="/AddItem">Add an Item</NavLink>
                    <br />
                    <NavLink className="navbarbutton" exact to="/Home">Home</NavLink>
                </>
                :
                <>
                    <NavLink className="navbarbutton" exact to="/LogIn">Log In</NavLink>
                    <br />
                    <NavLink className="navbarbutton" exact to="/SignUp" >Sign Up</NavLink>
                    <br />
                    <NavLink className="navbarbutton" exact to="/Home">Home</NavLink>
                </>}
        </div>
    )
}

export default NavBar