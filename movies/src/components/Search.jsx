import React, {useState,useEffect} from 'react';
import axios from "axios";
import "../App.css"

function Search() {
    const [title,setTitle]=useState("")
    const [data,setData]=useState([])
    const search=(title)=>{
        axios.get(`http://localhost:5000/api/movies/${title}`)
        .then((res)=>{
          setData(res.data)
        })
        .catch((err)=>{console.log(err)})
      }
    
      const handleSearch=()=>{
       search(title)
      }
      
    return (
        <div>
             <div className="search">
        <input className="search_input" placeholder="Search" onChange={(e)=>setTitle(e.target.value)}  />
        <button className="search_button" onClick={handleSearch} >search </button>
      </div>
            
        </div>
    );
}

export default Search;