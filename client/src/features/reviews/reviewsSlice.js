import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchTableTopReviews = createAsyncThunk("reviews/fetchTableTopReviews", () => {
    return fetch("/table_top_reviews")
    .then((resp) => resp.json())
    .then((reviews) => reviews)
})

export const fetchVideoGameReviews = createAsyncThunk("reviews/fetchVideoGameReviews", () => {
    return fetch("/video_game_reviews")
    .then((resp) => resp.json())
    .then((reviews) => reviews)
})

const reviewsSlice = createSlice({
    name: "reviews",
    initialState: {
        allReviews: {
            videoGameReviews: [],
            tableTopReviews: []
        },
        status: "idle"
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
    },
    extraReducers: {
        [fetchTableTopReviews.pending](state){
            state.status = "loading"
        },
        [fetchVideoGameReviews.pending](state){
            state.status = "loading"
        },
        [fetchTableTopReviews.fulfilled](state, action){
            state.allReviews.tableTopReviews = action.payload
            state.status = "idle"
        },
        [fetchVideoGameReviews.fulfilled](state, action){
            state.allReviews.videoGameReviews = action.payload
            state.status = "idle"
        }
    }
})

export const { reviewAdded, reviewRemoved, reviewUpdated } = reviewsSlice.actions

export default reviewsSlice.reducer