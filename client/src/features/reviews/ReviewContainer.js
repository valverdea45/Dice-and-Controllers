import React, { useState } from "react"
import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"
import { useSelector } from "react-redux"


function ReviewContainer({ item }) {

    const user = useSelector((state) => state.users.user)
    const [ showReviewForm, setShowReviewForm ] = useState(false)
    const [ error, setError ] = useState(false)

    function handleClick() {
        if(user) {
            setShowReviewForm((showReviewForm) => !showReviewForm)
        } else {
          setError(true)  
        }
    }

    return (
        <div className="reviewcontainer">
            <h4 className="reviewheader"> Reviews</h4>
            { showReviewForm ? 
            <div>
                <ReviewForm item={item} handleClick={handleClick} setShowReviewForm={setShowReviewForm}/>
            </div>
            :
            <div>
                <button onClick={handleClick}>Write a Review</button>
                {error ? <p>You must be logged in to write a review</p> : null }
            </div>
            }
            <ReviewList item={ item }/>
        </div>
    )
}

export default ReviewContainer