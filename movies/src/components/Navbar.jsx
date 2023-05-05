import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="#">About it</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav mr-auto">
  <li className="nav-item active">

          <Link className="nav-link " to="/home">Home</Link>
          </li>
          <li className="nav-item active">

         <Link className="nav-link " to="/add">Add Review</Link>
         </li>
    
       </ul>
   </div>
</nav>  )
}

export default Navbar