import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Search from "../search/Search"
import ItemsList from "./ItemsList"
import { onUpdateSearch } from "../search/searchSlice"

function ItemsContainer() {

    const videogames = useSelector((state) => state.videogames.entities)
    const tableTops = useSelector((state) => state.tabletops.entities)
    const search = useSelector((state) => state.search.value)
    const allItems = videogames.concat(tableTops)
    const [ filter, setFilter ] = useState("all")
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(onUpdateSearch(""))
    },[])

    let selectedList = [] 

    if(filter === "all") {
        selectedList = allItems
    } else if ( filter === "tabletops") {
        selectedList = tableTops
    } else if (filter === "videogames") {
        selectedList = videogames
    }
    

    const itemsFiltered = selectedList.filter((item) => {
        return item.name.toLowerCase().includes(search[0].toLowerCase())
    }) 


    function handleFilterChange(e) {
        setFilter(e.target.value)
    }

    return (
        <div>
            <Search/>
            <br/>

            <label>Filter By Game Type:</label>
            <select onChange={handleFilterChange} value={filter}>
                <option value="all">show all</option>
                <option value="tabletops">show table tops</option>
                <option value="videogames">show video games</option>
            </select>

            <ItemsList itemsFiltered={itemsFiltered}/>
        </div>
    )
}

export default ItemsContainer