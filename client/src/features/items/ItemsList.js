import React from "react"
import ItemCard from "./ItemCard"

function ItemsList({ itemsFiltered }) {

    

     const toBeRendered = itemsFiltered.map((item) => {
        return <ItemCard key={item.name} item={item}/>
    })

    return (
        <div>
            {toBeRendered}
        </div>
    )
}

export default ItemsList