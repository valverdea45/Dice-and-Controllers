import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { userLogin } from "./usersSlice"
import { useNavigate } from "react-router-dom"


function SignUp() {

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ email, setEmail ] = useState("")  
    const [ errors, setErrors ] = useState(null) 
    const dispatch = useDispatch() 
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        const objToBeSent = {
            username: username,
            password: password,
            email: email
        }

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objToBeSent)
        })
        .then((res) => {
            if(res.ok){
                res.json().then((user) => {
                    dispatch(userLogin(user))
                    navigate("/")
                })
            } else {
                res.json().then((e) => setErrors(e.errors))
            }
        })

    }

    return (
        <div className="background">
            <h3>Sign Up!</h3>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <br/>
                <input onChange={(e) => setUsername(e.target.value)} value={username}/>
                <br/>
                <label>Password:</label>
                <br/>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password"/>
                <br/>
                <label>Email:</label>
                <br/>
                <input onChange={(e) => setEmail(e.target.value)} value={email}/>
                <br/>
                <button type="submit" >Submit</button>
            </form>
            <p>Passwords should have a minimum of 5 characters</p>
            <ul>
             {errors ? (errors.map((error) => <li>{`${error}`}</li>)) : null}   
            </ul>
        </div>
    )
}

export default SignUp