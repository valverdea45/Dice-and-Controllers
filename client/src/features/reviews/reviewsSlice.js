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
            debugger
            if (action.payload.table_top_id) {
                state.reviews.tableTopReviews.push({
                    id: action.payload.id,
                    table_top_id: action.payload.table_top_id,
                    body: action.payload.body,
                    username: action.payload.username
                })
            } else {
                state.reviews.videoGameReviews.push({
                    id: action.payload.id,
                    video_game_id: action.payload.video_game_id,
                    body: action.payload.body,
                    username: action.payload.username
                })
            }
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