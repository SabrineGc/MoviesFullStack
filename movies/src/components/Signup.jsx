import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Sign.css'

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [hash, setHash] = useState("");
const form={
    email: email,
    first_name:first_name,
    last_name:last_name,
    hash:hash
}

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/users", form)
      .then(response => {
        alert("Welcome to our addiction space");
        navigate('/home');
      })
      .catch(error => console.log(error));
  };

  return (
    <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"></input>
        <div class="signup">
      <form className="container" onSubmit={handleSubmit}>
        <div>
        <label for="chk" aria-hidden="true">Sign up</label>
        <input type="text" name="txt" placeholder="User name" onChange={(e)=>setFirst_name(e.target.value)}/>
        <input type="text" name="txt" placeholder="Last name" onChange={(e)=>setLast_name(e.target.value)}/>
		<input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
		<input type="password" name="pswd" placeholder="Password" onChange={(e)=>setHash(e.target.value)}/>
          <div>
              <Link to={`/signin`}> signin</Link>
          </div>
       
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
      </form>
        </div>
    </div>
  
  )
}

export default Signup;


		
	

			
