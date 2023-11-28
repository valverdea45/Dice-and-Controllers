import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" 
import reviewsSlice from "../../reviews/reviewsSlice"

export const fetchTableTops = createAsyncThunk("tabletops/fetchTableTops", () => {
    return fetch("/table_tops")
    .then((resp) => resp.json())
    .then((tableTops) => tableTops)
})

const initialState = {
    entities: [],
    status: "idle"
}

const tabletopsSlice = createSlice({
    name: "tabletops",
    initialState,
    reducers: {
        tableTopAdded(state, action) {
            state.entities.push(action.payload)
        }
    },
    extraReducers: {
        [fetchTableTops.pending](state){
            state.status = "loading"
        },
        [fetchTableTops.fulfilled](state, action){
            state.entities = action.payload
            state.status = "idle"
        } 
    }
})

export const { tableTopAdded } = tabletopsSlice.actions

export default tabletopsSlice.reducer

