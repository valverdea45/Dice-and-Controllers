import Home from "./Home"
import { Route, Routes } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
