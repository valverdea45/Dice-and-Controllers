import React, { useState } from "react"
import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"

function ReviewContainer({ item }) {
    return (
        <div>
            <h4>Reviews</h4>

            <ReviewList item={ item }/>
        </div>
    )
}

export default ReviewContainer