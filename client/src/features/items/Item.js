import React from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

function Item()  {

    const videoGames = useSelector((state) => state.videogames.entities)
    const tableTops = useSelector((state) => state.tabletops.entities)
    const allItems = videoGames.concat(tableTops)
    const location = useLocation()
    const itemId = location.state

    debugger

    const item = allItems?.find((item) => {
        return item.id === itemId
    })

    if(item === undefined) {
        return <p>loading...</p>
    }

    console.log(item)

    // const car = cars?.find((individualCar) => {
    //     return individualCar.id === carId
    // })

    return (
        <div>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name}/>
            <p>{item.price}</p>
            <p>{item.description}</p>
            
        </div>
    )
}

export default Item