import React, { useEffect } from 'react';
import { useDispatch } from "react-redux"
import Home from "./Home"
import LogIn from "./features/users/LogIn"
import NavBar from "./NavBar"
import { Route, Routes } from "react-router-dom"
import { fetchTableTops } from './features/items/tabletops/tabletopsSlice';
import { fetchVideoGames } from './features/items/videogames/videogamesSlice';
import { fetchReviews } from './features/reviews/reviewsSlice';
import Profile from "./features/users/Profile"
import { userLogin } from './features/users/usersSlice';
import Item from './features/items/Item';


function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchTableTops())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchVideoGames())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchReviews())
  },[dispatch])

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

 


  

  return (
    <div>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="LogIn" element={<LogIn/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Item" element={<Item/>}/>
        </Routes>
    </div>
  );
}

export default App;