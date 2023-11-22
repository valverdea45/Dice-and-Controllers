import { configureStore } from "@reduxjs/toolkit"
import reviewsReducer from "./features/reviews/reviewsSlice"
import tabletopsSlice from "./features/tabletops/tabletopsSlice"
import videogamesSlice from "./features/videogames/videogamesSlice"

const store = configureStore({
    reducer: {
        reviews: reviewsReducer,
        tabletops: tabletopsSlice,
        videogames: videogamesSlice
    }
})

export default store