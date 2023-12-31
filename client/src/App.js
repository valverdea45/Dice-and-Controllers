import React, { useEffect } from 'react';
import { useDispatch } from "react-redux"
import Home from "./Home"
import LogIn from "./features/users/LogIn"
import NavBar from "./NavBar"
import { Route, Routes } from "react-router-dom"
import { fetchTableTops } from './features/items/tabletops/tabletopsSlice';
import { fetchVideoGames } from './features/items/videogames/videogamesSlice';
import Profile from "./features/users/Profile"
import { userLogin } from './features/users/usersSlice';
import Item from './features/items/Item';
import { fetchTableTopReviews, fetchVideoGameReviews } from './features/reviews/reviewsSlice';
import SignUp from './features/users/SignUp';
import AddItem from './features/items/AddItem';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTableTops())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchVideoGames())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchTableTopReviews())
  },[dispatch])

  useEffect(() => {
    dispatch(fetchVideoGameReviews())
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
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    }}>
    <div>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="LogIn" element={<LogIn/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/tabletops/:id" element={<Item/>}/>
          <Route path="/videogames/:id" element={<Item/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/AddItem" element={<AddItem/>}/>
        </Routes>
    </div>
    </div>
  );
}

export default App;