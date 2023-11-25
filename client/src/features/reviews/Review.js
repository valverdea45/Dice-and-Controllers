import React from "react"

function Review({ review }) {
    return (
        <div>
            <h4>Reviews</h4>
            <br/>
            <p>{review.body}</p>
        </div>
    )
}

export default Review