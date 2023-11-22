import React, { useEffect } from 'react';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Home from "./Home"
import LogIn from "./features/users/LogIn"
import NavBar from "./NavBar"
import { Route, Routes } from "react-router-dom"
import { fetchTableTops } from './features/tabletops/tabletopsSlice';
import { fetchVideoGames } from './features/videogames/videogamesSlice';
import Profile from "./features/users/Profile"
import { userLogin } from './features/users/usersSlice';


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

  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          dispatch(userLogin(user))
        })
      }
    })
  }, [dispatch])


  console.log("all video games", allVideoGames)
  console.log("all table tops", allTableTops)

 


  

  return (
    <div>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="LogIn" element={<LogIn/>}/>
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
    </div>
  );
}

export default App;