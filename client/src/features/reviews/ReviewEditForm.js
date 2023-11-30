import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { reviewsUpdated } from "./reviewsSlice"

function ReviewEditForm({ review, item, handleEditClick, setEditMode}) {

    const [ body, setBody ] = useState(review.body)
    const [ currentReview, setCurrentReview ] = useState(review.body)
    const [ errors, setErrors ] = useState(null)
    const user = useSelector((state) => state.users.user)
    const dispatch = useDispatch()

    function handleEditSubmit(e) {
        e.preventDefault()

        if(body === currentReview) {
            setErrors(["must submit an edited review"])
            return null
        }

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
                        setEditMode(false)
                    })
                } else {
                    res.json().then((e) => {
                        setErrors(e.errors)
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
                        setEditMode(false)
                    })
                } else {
                    res.json().then((e) => {
                        setErrors(e.errors)
                    })
                }
            })

        }
    }


    return (
        <div className="review">
            <form onSubmit={handleEditSubmit}>
                <p>User: {review.username}</p>
                <textarea rows={4} style={{ width: "500px" }} onChange={(e) => setBody(e.target.value)} value={body} />
                <br/>
                <button type="submit">Submit</button>
                <button onClick={handleEditClick}> Cancel </button>
            </form>
            
            <ul>
              {errors ? (errors.map((error) => <li>{error}</li>)) : null}  
            </ul>
            
        </div>
    )
}

export default ReviewEditForm