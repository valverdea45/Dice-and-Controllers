import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function ItemCard({ item }) {

    const navigate = useNavigate()
    const [ imageError, setImageError ] = useState(false)

    const imageDisplay = {
        height: "15rem",
        width: "22rem"
    }


   

    function handleClick() {
        navigate(`${item.type_of}s/${item.id}`)
    }

    function handleImageError(){
        setImageError(true)
    }

    return (
        <div className="card" onClick={handleClick}>
            
            
        <div style={{
            flexGrow: 1
        }}>
            <h3>{item.name}</h3>
            {imageError ? <img style={imageDisplay} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEEXZhFhjBx7eT3vij0wlUnGZNiJzv4b_Zw&usqp=CAU"}/> : <img style={imageDisplay} src={item.image} alt={item.name} onError={handleImageError}/>}
            
            <p>Price: ${item.price}</p>
            <p>Description: {item.description}</p>
        </div>
           
            <img style={{ width: "30px", height: "30px"}} src={item.type_of === "videogame" ? "/joystick.png" : "/dice.png"}/>
        </div>
    )
}

export default ItemCard