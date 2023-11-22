import { configureStore } from "@reduxjs/toolkit"
import reviewsReducer from "./features/reviews/reviewsSlice"
import tabletopsSlice from "./features/tabletops/tabletopsSlice"
import videogamesSlice from "./features/videogames/videogamesSlice"
import usersSlice from "./features/users/usersSlice"
import searchSlice from "./features/search/searchSlice"

const store = configureStore({
    reducer: {
        reviews: reviewsReducer,
        tabletops: tabletopsSlice,
        videogames: videogamesSlice,
        users: usersSlice,
        search: searchSlice
    }
})

export default store