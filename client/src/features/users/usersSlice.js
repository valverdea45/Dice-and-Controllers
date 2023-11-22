import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userLogin(state, action){
            state.user = action.payload
        },
        userLogOut(state, action){
            state.user = action.payload
        }
    }
})

export const { userLogin, userLogOut } = usersSlice.actions

export default usersSlice.reducer