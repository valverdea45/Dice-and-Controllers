import React from "react"
import { useNavigate } from "react-router-dom"

function ItemCard({ item }) {

    const navigate = useNavigate()

    const imageDisplay = {
        height: "15rem",
        width: "22rem"
    }


    

    function handleClick() {
        navigate(`/Item/${item.type_of}s/${item.id}`)
    }

    return (
        <div onClick={handleClick}>
            <p>{item.name}</p>
            <img style={imageDisplay} src={item.image} alt={item.name}/>
            <p>Price: ${item.price}</p>
            <p>Description: {item.description}</p>
        </div>
    )
}

export default ItemCard