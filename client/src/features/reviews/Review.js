import React from "react"

function Review({ review }) {
    
    return (
        <div>
            <p>{review.username}</p>
            <p>{review.body}</p>
        </div>
    )
}

export default Review