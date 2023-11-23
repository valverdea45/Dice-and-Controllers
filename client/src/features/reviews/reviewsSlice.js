import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchReviews = createAsyncThunk("reviews/fetchReviews", () => {
    return fetch("/reviews")
    .then((resp) => resp.json())
    .then((reviews) => reviews)
})

const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        entities: []
    },
    reducers: {
        reviewAdded(state, action) {
            state.entities.push({
                id: action.id,
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