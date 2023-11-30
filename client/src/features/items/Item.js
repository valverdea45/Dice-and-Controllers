import React from "react"
import { useLocation, useParams } from "react-router-dom"
import ReviewContainer from "../reviews/ReviewContainer"
import { useSelector } from "react-redux"

function Item() {

    const location = useLocation()
    const { id } = useParams()

    const url = location.pathname

    const gameType = url.split("/")[1]

    const item = useSelector((state) => {
        return state[gameType].entities.find((item) => item.id === parseInt(id))
    })




    const imageDisplay = {
        height: "15rem",
        width: "22rem"
    }

    if (item === undefined) {
        return <p>loading...</p>
    }

    return (
        <div>
            <div style={{
                padding: "8px",
                backgroundColor: "lightyellow",
                borderRadius: "10px"
            }}>
                <h3>{item.name}</h3>
                <img style={imageDisplay} src={item.image} alt={item.name} />
                <p>price: ${item.price}</p>
                <p>game type: {item.type_of}</p>
                <p>description: {item.description}</p> 
            </div>
            <br />
            <ReviewContainer item={item} />

        </div>
    )
}

export default Item