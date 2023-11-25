import React, { useState } from "react"
import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function ReviewContainer({ item }) {

    const user = useSelector((state) => state.users.user)
    const [ showReviewForm, setShowReviewForm ] = useState(false)
    const navigate = useNavigate()

    function handleClick() {
        if(user) {
            setShowReviewForm((showReviewForm) => !showReviewForm)
        } else {
          navigate("/LogIn")  
        }
    }

    return (
        <div>
            <h4>Reviews</h4>
            { showReviewForm ? 
            <div>
                <ReviewForm item={item} handleClick={handleClick}/>
            </div>
            :
            <div>
                <button onClick={handleClick}>Write a Review</button>
            </div>
            }
            <ReviewList item={ item }/>
        </div>
    )
}

export default ReviewContainer