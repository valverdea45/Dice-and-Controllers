import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { videoGameAdded } from "./videogames/videogamesSlice"
import { useNavigate } from "react-router-dom"
import { tableTopAdded } from "./tabletops/tabletopsSlice"

function AddItem() {



    const [ name, setName ] = useState("")
    const [ typeOf, setTypeOf ] = useState("")
    const [price, setPrice] = useState(0.00)
    const [ description, setDescription ] = useState("")
    const [ image, setImage ] = useState("")
    const [ errors, setErrors ] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()



    function handleSubmit(e) {
        e.preventDefault()

        const priceInt = parseFloat(price)

        const objToBeSent ={
            name: name,
            price: priceInt,
            type_of: typeOf,
            description: description,
            image: image
        } 

        console.log(objToBeSent)

        if(typeOf === "videogame" || typeOf === "") {

            fetch("/video_games", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(objToBeSent)
            })
            .then((res) => {
                if(res.ok){
                    res.json().then((newVideoGame) => {
                        dispatch(videoGameAdded(newVideoGame))
                        setName("")
                        setDescription("")
                        setPrice(0.00)
                        setTypeOf("")
                        setImage("")
                        navigate("/")
                    })
                } else {
                    res.json().then((e) => {
                        setErrors(e.errors)
                        console.log(e.errors)
                    })
                }
            })

        } else if (typeOf === "tabletop") {
            fetch("/table_tops" , {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(objToBeSent)
            })
            .then((res) => {
                if(res.ok) {
                    res.json().then((newTableTop) => {
                        dispatch(tableTopAdded(newTableTop))
                        setName("")
                        setDescription("")
                        setPrice(0.00)
                        setTypeOf("")
                        setImage("")
                        navigate("/")
                    })
                } else {
                    res.json().then((e) => {
                        debugger
                        setErrors(e.errors)
                    })
                }
            })
        }

    }


    return (
        <div>
            <h3> Add table tops or video games to review! </h3>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <br/>
                <input onChange={(e) => setName(e.target.value)} value={name}/>
                <br/>
                <label>Image:</label>
                <br/>
                <input onChange={(e) => setImage(e.target.value)} value={image}/>
                <br/>
                <label>Price:</label>
                <br/>
                <input onChange={(e) => setPrice(e.target.value)} value={price}/>
                <br/>
                <label>Game Type:</label>
                <br/>
                <select value={typeOf} onChange={(e) => setTypeOf(e.target.value)}>
                    <option value=""></option>
                    <option value="tabletop">Table Top</option>
                    <option value="videogame">Video Game</option>
                </select>
                <br/>
                <label>Description:</label>
                <br/>
                <input onChange={(e) => setDescription(e.target.value)} value={description}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            {errors ? (
                <ul>
                    {errors.map((error) => {
                        return <li>{error}</li>
                    })}
                </ul>
            ) : null}
        </div>
    )
}

export default AddItem