import React from "react"
import { useSelector } from "react-redux"
import ItemsContainer from "./features/items/ItemsContainer"

function Home() {

    const user = useSelector((state) => state.users.user)

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
                <p>try logging in to add games to review!</p>
            </div>
            }

            <ItemsContainer/>

        </div>
    )
}

export default Home