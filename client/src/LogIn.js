import React, { useState } from "react";

function LogIn() {

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ errors, setErrors ] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()

        const objToBeSent = {
            username: username,
            password: password
        }

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToBeSent)
        })
        .then((res) => {
            if(res.ok){
                res.json().then((user) => {
                    setUser(user)
                })
                setErrors(null)
            } else {
                res.json().then((e) => setErrors(e.errors))
            }
        })

        setUsername("")
        setPassword("")
    }

    return (
        <div>
            <h3>Enter log in information</h3>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <br/>
                <input onChange={(e) => setUsername(e.target.value)} value={username} type="text"/>
                <br/>
                <label>Password</label>
                <br/>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="text"/>
                <br/>
                <button type="submit">Log In</button>
                {errors ? (<p>{`${errors}`}</p>) : null}
            </form>
        </div>
    )
}

export default LogIn