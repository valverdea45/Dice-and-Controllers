import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { reviewRemoved } from "./reviewsSlice"

function Review({ review, item }) {

    
    const user = useSelector((state) => state.users.user)
    const dispatch = useDispatch()

    function handleDeleteClick() {
        console.log("I was clicked! YAY!")
        if(item.type_of === "videogame") {
            fetch(`/video_game_reviews/${review.id}`, {
                method: "DELETE"
            })
            .then((res) => res.json())
            .then((oldReview) => dispatch(reviewRemoved(oldReview)))
        } else if(item.type_of === "tabletop") {
            fetch(`/table_top_reviews/${review.id}` , {
                method: "DELETE"
            })
            .then((res) => res.json())
            .then((oldReview) => dispatch(reviewRemoved(oldReview)))
        }
        
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