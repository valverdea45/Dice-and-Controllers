import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from "uuid"

const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        entities: []
    },
    reducers: {
        reviewAdded(state, action) {
            state.entities.push({
                id: uuid(),
                userId: action.payload.userId,
                itemId: action.payload.itemId,
                comment: action.payload.comment
            })
        },
        reviewRemoved(state, action) {
            const index = state.entities.findIndex((review) => review.id === action.payload)
            state.entities.splice(index, 1)
        },
        reviewsUpdated(state, action) {
            const index = state.entities.findIndex((review) => review.id === action.payload.id)
            state.entities.splice(index, 1, action.payload)
        }
    }
})

export const { reviewAdded, reviewRemoved, reviewUpdated } = reviewsSlice.actions

export default reviewsSlice.reducer