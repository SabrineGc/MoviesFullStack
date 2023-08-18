import React from "react";
import { useNavigate } from "react-router-dom";

const OneMovie=({e})=>{
  const navigate=useNavigate()

  return(
    <div  className="movie" onClick={()=>navigate(`/movie/${e.id}`)}>
      <img className="movie-image" src={e.image} alt="movie"/>
      <p className="details">{e.title}, {e.director}</p>
      <h3 className="genre">{e.genre}</h3>
   
</div>

  )
}

export default OneMovie

