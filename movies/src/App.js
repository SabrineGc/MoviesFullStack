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
import Layout from "./components/Layout";

 function App() {
  const {  fetchData, data }=useContext(Context)
  const [filtered,setFiltered]=useState([])

  const filterData=(query)=>{
    setFiltered(data.filter(e=>e.title.toUpperCase().includes(query.toUpperCase()) || e.genre.toUpperCase().includes(query.toUpperCase())))
  }
  
 return (

    <BrowserRouter> 
    <Navbar />
        <Routes>
          {/* <Route path="/" element={<Layout  />} /> */}
          <Route path="/" element={<Allmovies />} />
          <Route path="/add" element={<Addmovie  />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} /> 
        </Routes>
    </BrowserRouter>


 );
}

export default App;