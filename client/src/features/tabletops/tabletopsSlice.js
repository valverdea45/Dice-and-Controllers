import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" 

export const fetchTableTops = createAsyncThunk("tabletops/fetchTableTops", () => {
    return fetch("/table_tops")
    .then((resp) => resp.json())
    .then((tableTops) => tableTops)
})

const initialState = {
    tableTops: [],
    status: "idle"
}

const tabletopsSlice = createSlice({
    name: "tabletops",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchTableTops.pending](state){
            state.status = "loading"
        }
        [fetchTableTops.fulfilled](state){
            state.tableTops = action.payload
            state.status = "idle"
        }
    }
})

export default tabletopsSlice.reducer

