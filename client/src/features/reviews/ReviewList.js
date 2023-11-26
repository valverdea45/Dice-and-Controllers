import React from "react"
import { useSelector } from "react-redux"
import Review from "./Review"

function ReviewList({ item }) {

    if(item.type_of === "videogame") {
        const VGR = useSelector((state) => state.reviews.videoGameReviews)
        const correctReviews = VGR.filter((review) => {
            return review.video_game_id === item.id
        })

        const reviewsToRender = correctReviews.map((review) => {
            return <Review review={review}/>
        })

        return (
            <div>
                {reviewsToRender}
            </div>
        )
    } 

    const TTR = useSelector((state) => state.reviews.tableTopReviews)

    const correctReviews = TTR.filter((review) => {
        return review.table_top_id === item.id
    })

    const reviewsToRender = correctReviews.map((review) => {
        return <Review review={review}/>
    })

    return (
        <div>
            {reviewsToRender}
        </div>
    )
}

export default ReviewList