import Home from "./Home"
import LogIn from "./LogIn";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/LogIn" element={<LogIn/>}/>
    </Routes>
    </div>
  );
}

export default App;
