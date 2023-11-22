import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { userLogOut } from "./usersSlice"
import { useNavigate } from "react-router-dom"

function Profile() {

    const user = useSelector((state) => state.users.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    console.log(user)

    function handleLogoutClick() {
        fetch("/logout", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
        dispatch(userLogOut(null))
        navigate("/")
    }


    // function handleLogout() {
    //     fetch("/logout", { method: "DELETE" }).then((response) => {
    //       if (response.ok) {
    //         dispatch(userLogout(null));
    //       }
    //     });
    
    //     navigate("/")
    //   }

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