import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { reviewAdded } from "./features/reviews/reviewsSlice"
import Home from "./Home"
import LogIn from "./features/users/LogIn"
import NavBar from "./NavBar"
import { Route, Routes } from "react-router-dom"


function App() {

  const [videoGames, setVideoGames] = useState([])
  const [ tableTops, setTableTops ] = useState([])

  const state = useSelector((state) => state.reviews.entities)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("/video_games")
    .then((videoGames) => videoGames.json())
    .then((videoGames) => setVideoGames(videoGames))
  }, [])

  useEffect(() => {
    fetch("/table_tops")
    .then((tableTops) => tableTops.json())
    .then((tableTops) => setTableTops(tableTops) ) 
  }, [])



  console.log(videoGames)
  console.log(tableTops)

  function handleClick() {
    dispatch((reviewAdded({
    userId: 1,
    itemId: 1,
    comment: "hi"
  })))
  console.log(state)
  }


  

  return (
    <div>
      <button onClick={handleClick}>click me to add review</button>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="LogIn" element={<LogIn/>}/>
        </Routes>
    </div>
  );
}

export default App;