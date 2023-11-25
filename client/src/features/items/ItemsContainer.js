import React from "react"
import { useSelector } from "react-redux"
import Search from "../search/Search"
import ItemsList from "./ItemsList"

function ItemsContainer() {

    const videogames = useSelector((state) => state.videogames.entities)
    const tableTops = useSelector((state) => state.tabletops.entities)
    const search = useSelector((state) => state.search.value)
    const allItems = videogames.concat(tableTops)

    

    const itemsFiltered = allItems.filter((item) => {
        return item.name.toLowerCase().includes(search[0].toLowerCase())
    }) 

    console.log(itemsFiltered)


    return (
        <div>
            <Search/>
            <ItemsList itemsFiltered={itemsFiltered}/>
        </div>
    )
}

export default ItemsContainer