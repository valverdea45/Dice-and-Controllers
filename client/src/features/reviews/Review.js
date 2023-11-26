import React from "react"
import { useSelector } from "react-redux"

function Review({ review }) {

    
    const user = useSelector((state) => state.users.user)

    function handleDeleteClick() {
        console.log("I was clicked! YAY!")
    }

    return (
        <div>
            <p>{review.username}</p>
            <p>{review.body}</p>
            {user?.id === review.user_id ? 
                <div>
                    <button onClick={handleDeleteClick}>Delete</button>
                    <button>Edit</button>
                </div>
            : null}
        </div>
    )
}

export default Review