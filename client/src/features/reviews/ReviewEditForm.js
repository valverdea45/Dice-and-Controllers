import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { reviewsUpdated } from "./reviewsSlice"

function ReviewEditForm({ review, item, handleEditClick, setEditMode}) {

    const [ body, setBody ] = useState(review.body)
    const user = useSelector((state) => state.users.user)
    const dispatch = useDispatch()

    function handleEditSubmit(e) {
        e.preventDefault()

        if(item.type_of === "videogame") {

            const objToBeSent = {
                body: body,
                video_game_id: item.id,
                user_id: user.id
            }

            fetch(`/video_game_reviews/${review.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(objToBeSent)
            })
            .then((res) => {
                if(res.ok) {
                    res.json().then((editedReview) => {
                        dispatch(reviewsUpdated(editedReview))
                    })
                } else {
                    res.json().then((res) => {
                        console.log(res)
                    })
                }
            })
        } else if (item.type_of === "tabletop") {

            const objToBeSent = {
                body: body,
                table_top_id: item.id,
                user_id: user.id
            }

            fetch(`/table_top_reviews/${review.id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(objToBeSent)
            })
            .then((res) => {
                if (res.ok) {
                    res.json().then((editedReview) => {
                        dispatch(reviewsUpdated(editedReview))
                    })
                } else {
                    res.json.then((res) => {
                        console.log(res)
                    })
                }
            })

        }
        setEditMode(false)
    }


    return (
        <div>
            <form onSubmit={handleEditSubmit}>
                <p>{review.username}</p>
                <input onChange={(e) => setBody(e.target.value)} value={body} />
                <button type="submit">Submit</button>
            </form>
            <button onClick={handleEditClick}> Cancel </button>
        </div>
    )
}

export default ReviewEditForm