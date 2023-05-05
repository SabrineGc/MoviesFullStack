import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Allmovies from "./components/Allmovies";
import Addmovie from "./components/Addmovie.jsx";
import Signup from "./components/Signup";
import Signin from "./components/Signin";


 function App() {
  

 return (

  <div>
    <BrowserRouter>
      <div className="container" style={{ height: "100vh" }}>
        <h1 className="greeting" >Hello  Movie Addicts</h1>
        
        <Routes>
        <Route path="/add" element={<Addmovie  />} />
          <Route path="/home" element={<Allmovies  />} />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  </div>

 );
}

export default App;