import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { reviewAdded } from "./features/reviews/reviewsSlice"
import Home from "./Home"
import LogIn from "./features/users/LogIn"
import NavBar from "./NavBar"
import { Route, Routes } from "react-router-dom"
import { fetchTableTops } from './features/tabletops/tabletopsSlice';
import { fetchVideoGames } from './features/videogames/videogamesSlice';


function App() {
  
  const allTableTops = useSelector((state) => state.tabletops.entities)
  const allVideoGames = useSelector((state) => state.videogames.entities)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchTableTops())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchVideoGames())
  }, [dispatch])


  console.log("all video games", allVideoGames)
  console.log("all table tops", allTableTops)

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