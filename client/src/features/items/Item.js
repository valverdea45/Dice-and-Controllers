import React from "react"
import { useLocation } from "react-router-dom"
import ReviewList from "../reviews/ReviewList"

function Item()  {

    const location = useLocation()
    const item = location.state
    const imageDisplay = {
        height: "15rem",
        width: "22rem"
    }

    if(item === undefined) {
        return <p>loading...</p>
    }

    console.log(item)

    return (
        <div>
            <h3>{item.name}</h3>
            <img style={imageDisplay} src={item.image} alt={item.name}/>
            <p>price: {item.price}</p>
            <p>game type: {item.type_of}</p>
            <p>description: {item.description}</p>
            <ReviewList />
            
        </div>
    )
}

export default Item