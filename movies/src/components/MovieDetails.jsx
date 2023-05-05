import React, {useState} from 'react';
import axios from 'axios';
import EditMovie from "./EditMovie.jsx";
import "./MovieDetails.css"

function MovieDetails({e}) {
    const [detail,setDetail]=useState(false)
    const update=(id,movie)=>{
        axios.patch(`http://localhost:5000/api/movies/${id}`,movie)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const deleteMovie=(id)=>{
        if(window.confirm("are you sure that u want to delete it")){
        axios.delete(`http://localhost:5000/api/movies/${id}`)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    }
    const handleClick=()=>{
        setDetail(!detail)
      console.log("clicked")
      }
    return (
        <div class="wrap">
         <div class="box">
            <div class="box-top">
             <h1 onClick={handleClick} >{e.title}</h1>
            <div className="zoom-wrapper">
               <img class="box-image" src={e.image} />
            </div>
            <div class="title-flex">
            {detail?
            <div class="box-title" >
            <p  class="description"  >{e.description}</p>
            <h3 class="user-follow-info" >{e.genre}</h3>
            <p class="box" >{e.year}</p>
            <p class="user-follow-info" >{e.director}</p>
            <p>{e.language}</p>
            <p>{e["length"]}</p>
            <p>{e.rate}</p>
            <EditMovie e={e} update={update} deleteMovie={deleteMovie} />
           </div>
        : <div></div> 
            }
            </div>
        </div>
        </div>
</div>
    )
}

export default MovieDetails;
