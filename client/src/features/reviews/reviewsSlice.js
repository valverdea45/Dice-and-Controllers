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
        videoGameReviews: [],
        tableTopReviews: [],
        VGRStatus: "idle",
        TTRStatus: "idle"
    },
    reducers: {
        reviewAdded(state, action) {
            if (action.payload.table_top_id) {
                state.tableTopReviews.push(action.payload)
            } else if (action.payload.video_game_id) {
                state.videoGameReviews.push(action.payload)
            }
        },
        reviewRemoved(state, action) {
            if (action.payload.video_game_id) {
                const index = state.videoGameReviews.findIndex((review) => review.id === action.payload.id)
                state.videoGameReviews.splice(index, 1)
            } else if (action.payload.table_top_id) {
                const index = state.tableTopReviews.findIndex((review) => review.id === action.payload.id)
                state.tableTopReviews.splice(index, 1)
            }
        },
        reviewsUpdated(state, action) {
            const index = state.entities.findIndex((review) => review.id === action.payload.id)
            state.entities.splice(index, 1, action.payload)
        }
    },
    extraReducers: {
        [fetchTableTopReviews.pending](state){
            state.TTRStatus = "loading"
        },
        [fetchVideoGameReviews.pending](state){
            state.VGRStatus = "loading"
        },
        [fetchTableTopReviews.fulfilled](state, action){
            state.tableTopReviews = action.payload
            state.TTRStatus = "idle"
        },
        [fetchVideoGameReviews.fulfilled](state, action){
            state.videoGameReviews = action.payload
            state.VGRStatus = "idle"
        }
    }
})

export const { reviewAdded, reviewRemoved, reviewUpdated } = reviewsSlice.actions

export default reviewsSlice.reducer