import React, { useEffect } from "react"

function Home() {

    useEffect(() => {
        fetch("/items")
    })

    // useEffect(() => {
    //     fetch("/me")
    //     .then((res) => {
    //         if(res.ok) {
    //             res.json().then((data) => setUser(data))
    //         }
    //     })
    // }, [])

    return (
        <div>
            <h1>
                Welcome!
            </h1>
        </div>
    )
}

export default Home