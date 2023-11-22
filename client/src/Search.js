import React from "react"
import { useDispatch } from "react-redux"
import { onUpdateSearch } from "./features/search/searchSlice"

function Search() {

    const dispatch = useDispatch()

    function handleSearchChange(e) {
        dispatch(onUpdateSearch(e.target.value))
    }

    return (
        <div>
            <input onChange={handleSearchChange}/>
        </div>
    )
}

export default Search