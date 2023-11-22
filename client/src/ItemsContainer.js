import React from "react"
import { useSelector } from "react-redux"
import Search from "./Search"

function ItemsContainer() {

    const videogames = useSelector((state) => state.videogames.entities)
    const tableTops = useSelector((state) => state.tabletops.entities)
    const search = useSelector((state) => state.search.value)
   
    const allItems = videogames.concat(tableTops)

    console.log(search)

    console.log(allItems)

    

    // const displayItems = allItems.filter((item) => {
    //     return item.name.toLowerCase().includes(search.toLowerCase())
    // }) 



    return (
        <div>
            <Search/>
        </div>
    )
}

export default ItemsContainer