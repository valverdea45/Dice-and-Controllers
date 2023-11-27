import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { reviewRemoved } from "./reviewsSlice"
import ReviewEditForm from "./ReviewEditForm"

function Review({ review, item }) {

    const user = useSelector((state) => state.users.user)
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)

    function handleDeleteClick() {
        console.log("I was clicked! YAY!")
        if (item.type_of === "videogame") {
            fetch(`/video_game_reviews/${review.id}`, {
                method: "DELETE"
            })
                .then((res) => res.json())
                .then((oldReview) => dispatch(reviewRemoved(oldReview)))
        } else if (item.type_of === "tabletop") {
            fetch(`/table_top_reviews/${review.id}`, {
                method: "DELETE"
            })
                .then((res) => res.json())
                .then((oldReview) => dispatch(reviewRemoved(oldReview)))
        }

    }

    function handleEditClick() {
        setEditMode((editMode) => !editMode)
    }

    return (
        <div>
            {editMode ?
               <ReviewEditForm review={review} item={item} handleEditClick={handleEditClick} setEditMode={setEditMode}/>
                :
                <div>
                    <p>{review.username}</p>
                    <p>{review.body}</p>
                    {user?.id === review.user_id ?
                        <div>
                            <button onClick={handleDeleteClick}>Delete</button>
                            <button onClick={handleEditClick}>Edit</button>
                        </div>
                        : null}
                </div>

            }

        </div>
    )
}

export default Review