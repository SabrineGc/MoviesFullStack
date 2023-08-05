import React, {useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MovieDetails from './MovieDetails.jsx';
import Navbar from "./Navbar.jsx";
import "./Allmovies.css"


function Allmovies() {
    const [data,setData]=useState([])
    const [title,setTitle]=useState("")
    const navigate = useNavigate();
    

    function fetchData(){
        axios.get("http://localhost:3001/api/movies")
        .then((res)=>{
            setData(res.data)
        })
    .catch((err)=>{console.log(err)})
  }
  console.log(data)
  useEffect(()=>{
    fetchData()
  },[])
  const search=(title)=>{
    axios.get(`http://localhost:3001/api/movies/${title}`)
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{console.log(err)})
  }

  const handleSearch=()=>{
   search(title)
  }
  const ChangeView=()=>{
    navigate('/add')
  }


 console.log(data, "from the allmovies")
    return (
        <div>
          <Navbar ChangeView={ChangeView}/>
          <div>
      {/* <button onClick={ChangeView}>Add new Movie</button> */}
      </div>
        <div className="search">
        <input className="search_input" placeholder="Search" type="search" onChange={(e)=>setTitle(e.target.value)}  />
        <button className="search_button" onClick={handleSearch} >search </button>
      </div>
        <div style={{
                  display: "flex",
                  flexdirection: "row",
                  justifycontent: "center",
                  flexwrap: "wrap",
              }}>
                
            {data.map((e,i)=>{
                return (
                    <div  >
                        <div>
                   
                    <div>
                     <MovieDetails e={e} /> 
                    </div>
                    </ div>
                    </div >
                )
            })}
            
        </div>
        </div>
    );
}

export default Allmovies;

