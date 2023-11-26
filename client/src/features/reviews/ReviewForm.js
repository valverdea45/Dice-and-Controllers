import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { reviewAdded } from "./reviewsSlice"

function ReviewForm({ handleClick, item }) {

    const [body, setBody] = useState("")
    const user = useSelector((state) => state.users.user)
    const dispatch = useDispatch()

    

    function handleSubmit(e) {
        e.preventDefault()

        if (item.type_of === "videogame") {

            const objToBeSent = {
                body: body,
                user_id: user.id,
                video_game_id: item.id
            }

            fetch("/video_game_reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(objToBeSent)
            })
            .then((res) => {
                if(res.ok){
                    res.json().then((newReview) => {
                        dispatch(reviewAdded(newReview))
                    })
                }
            })
        } else if (item.type_of === "tabletop") {
            const objToBeSent = {
                body: body,
                user_id: user.id,
                table_top_id: item.id
            }

            fetch("/table_top_reviews", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(objToBeSent)
            })
            .then((res) => {
                if(res.ok) {
                    res.json().then((newReview) => {
                        dispatch(reviewAdded(newReview))
                    })
                }
            })

        }
        setBody("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Review</label>
                <br />
                <input onChange={(e) => setBody(e.target.value)} value={body}/>
                <button type="submit">Submit</button>
            </form>
            <button onClick={handleClick}>Cancel</button>
        </div>
    )
}

export default ReviewForm