import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Sign.css'

function Signin() {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [hash, setHash] = useState("");

const form={
    email: email,
    hash:hash
}

const handleSubmit = (event) => {
   event.preventDefault();
 axios.post("http://localhost:5000/api/users",form)
 .then(response => {
   alert(response.data.message)      
       navigate('/home')
   })
   .catch(error => console.log( error))
}
return (
  <div class="main">  	
    <input type="checkbox" id="chk" aria-hidden="true"></input>
    <div class="signin">
   <form className="container"  onSubmit={handleSubmit}>

     <label for="chk" aria-hidden="true">Login</label>
    
        <input type="email" name="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)} />
		<input type="password" name="pswd" placeholder="Password" onChange={(e)=>setHash(e.target.value)} />
         <button type="submit" className="btn-primary">
          Submit 
         </button>
       <p>
         <Link to={`/signup`}>if you dont have account Signup first</Link>
       </p>
   </form>
       </div>
     </div>
)
}

export default Signin
