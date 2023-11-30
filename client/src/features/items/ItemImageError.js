import React from "react"

function ItemImageError({ item }) {

    const imageDisplay = {
        height: "15rem",
        width: "22rem"
    }

    return (
        <div>
            {item.type_of === "videogame" ? 
            <img style={imageDisplay} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEEXZhFhjBx7eT3vij0wlUnGZNiJzv4b_Zw&usqp=CAU"}/>
            :
            <img style={imageDisplay} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5knOYxdTWNmwq4lt2drQ168aTf2r-T9FTrA&usqp=CAU"}/>
            }
            
        </div>
    )
}

export default ItemImageError