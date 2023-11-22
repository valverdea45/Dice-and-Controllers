import React from "react"
import { useSelector } from "react-redux"

function ItemsContainer() {

    const videogames = useSelector((state) => state.videogames.entities)
    const tableTops = useSelector((state) => state.tabletops.entities)

    const allItems = videogames.concat(tableTops)

    console.log(allItems)

    return (
        <div>
            hi
        </div>
    )
}

export default ItemsContainer