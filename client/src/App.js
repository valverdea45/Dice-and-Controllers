import './App.css';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { reviewAdded } from "./reviewsSlice"
import Home from "./Home"
import LogIn from "./LogIn"
import NavBar from "./NavBar"
import { Route, Routes } from "react-router-dom"


function App() {

  const state = useSelector((state) => state.reviews.entities)
  const dispatch = useDispatch()

  

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