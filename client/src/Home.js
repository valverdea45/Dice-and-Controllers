import React from "react"
import { useSelector } from "react-redux"

function Home() {

    const user = useSelector((state) => state.users.user)

    console.log(user)

    return (
        <div>
            {user ?
                <div>
                    <h1>Welcome {user.username} to Dice and Controllers!</h1>
                    <br/>
                    
                </div>
            : 
            <div>
                <h1> Welcome to Dice and Controllers!</h1>
                <br/>
                <p>try logging in for good deals!</p>
            </div>
            }
        </div>
    )
}

export default Home