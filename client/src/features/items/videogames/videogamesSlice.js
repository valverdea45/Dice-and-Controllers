import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchVideoGames = createAsyncThunk("videogames/fetchVideoGames", () => {
    return fetch("/video_games")
    .then((resp) => resp.json())
    .then((videoGames) => videoGames)
})

const initialState = {
    entities: [],
    status: "idle"
}

const videogamesSlice = createSlice({
    name: "videogames",
    initialState,
    reducers: {
        videoGameAdded(state, action) {
            state.entities.push(action.payload)
        }
    },
    extraReducers: {
        [fetchVideoGames.pending](state){
            state.status = "loading"
        },
        [fetchVideoGames.fulfilled](state, action){
            state.entities = action.payload
            state.status = "idle"
        }
    }
})

export const { videoGameAdded } = videogamesSlice.actions

export default videogamesSlice.reducer