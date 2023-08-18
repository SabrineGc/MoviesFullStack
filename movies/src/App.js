import React, {useState, useContext} from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Addmovie from "./components/Addmovie.jsx";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import MovieDetails from "./components/MovieDetails";
import { Context } from './components/Context/Context';
import { ContextProvider } from './components/Context/Context.jsx';
import Navbar from "./components/Navbar";
import Allmovies from "./components/Allmovies/Allmovies";


 function App() {
  const {  fetchData, data }=useContext(Context)
  const [filtered,setFiltered]=useState([])

  const filterData=(query)=>{
    setFiltered(data.filter(e=>e.title.toUpperCase().includes(query.toUpperCase()) || e.genre.toUpperCase().includes(query.toUpperCase())))
  }
  
 return (

  <div>
    <BrowserRouter>
      <div className="container" style={{ height: "100vh" }}>
        <h1 className="greeting" >Hello  Movie Addicts</h1>
        
        <Routes>
          <Route path="/" element={<Navbar  />} />
          <Route index element={<Allmovies />} />
          <Route path="/add" element={<Addmovie  />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  </div>

 );
}

export default App;