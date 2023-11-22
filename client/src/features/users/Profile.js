import React from "react"
import { useSelector, useDispatch } from "react-redux"

function Profile() {

    const user = useSelector((state) => state.users.user)
   
    console.log(user)

    function handleLogoutClick() {
        
    }

    return (
        <div>
            <h3>Profile Page</h3>
            <br/>
            <p>username: {user.username}</p>
            <p>email: {user.email}</p>
            <p>bio: {user.bio}</p>
            <button onClick={handleLogoutClick} >Log Out</button>
        </div>
    )
}

export default Profile