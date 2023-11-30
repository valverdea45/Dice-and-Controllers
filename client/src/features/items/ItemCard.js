import React from "react"
import { useNavigate } from "react-router-dom"

function ItemCard({ item }) {

    const navigate = useNavigate()

    const imageDisplay = {
        height: "15rem",
        width: "22rem"
    }


   

    function handleClick() {
        navigate(`${item.type_of}s/${item.id}`)
    }

  

    return (
        <div className="card" onClick={handleClick}>
            
            
        <div style={{
            flexGrow: 1
        }}>
            <h3>{item.name}</h3>
            <img style={imageDisplay} src={item.image} alt={item.name}/>
            <p>Price: ${item.price}</p>
            <p>Description: {item.description}</p>
        </div>
           
            <img style={{ width: "30px", height: "30px"}} src={item.type_of === "videogame" ? "/joystick.png" : "/dice.png"}/>
        </div>
    )
}

export default ItemCard