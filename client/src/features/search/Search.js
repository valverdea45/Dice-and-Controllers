import React from "react"
import { useDispatch } from "react-redux"
import { onUpdateSearch } from "./searchSlice"

function Search() {

    const dispatch = useDispatch()

    function handleSearchChange(e) {
        dispatch(onUpdateSearch(e.target.value))
    }

    return (
        <div>
            <label>Search by Name</label>
            <br/>
            <input onChange={handleSearchChange}/> 
        </div>
    )
}

export default Search