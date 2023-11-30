import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: [""]
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        onUpdateSearch(state, action){
            state.value.splice(0, 1, action.payload)
          
        }
    }
})

export const { onUpdateSearch } = searchSlice.actions
export default searchSlice.reducer
