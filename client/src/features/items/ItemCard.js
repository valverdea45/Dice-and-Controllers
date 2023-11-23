import React from "react"
import { useNavigate } from "react-router-dom"

function ItemCard({ item }) {

    const navigate = useNavigate()

    const imageDisplay = {
        height: "15rem",
        width: "22rem"
    }


    function handleClick() {
        navigate("/Item", {state: item})
    }

    return (
        <div onClick={handleClick}>
            <p>{item.name}</p>
            <img style={imageDisplay} src={item.image} alt={item.name}/>
            <p>{item.price}</p>
            <p>{item.description}</p>
        </div>
    )
}

export default ItemCard