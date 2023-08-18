import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/index";
import './Sign.css'

function Signin() {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const form={
    email: email,
    password:password
}

// const handleSubmit = (event) => {
//    event.preventDefault();
//  axios.post("http://localhost:3001/api/users/register",form)
//  .then(response => {
//    alert(response.data.message)      
//        navigate('/home')
//    })
//    .catch(error => console.log( error))
// }
const handleLogin = async (event) => {
  event.preventDefault();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    alert("Welcome");
    console.log("User created:", user);
    navigate("/");
  } catch (error) {
    alert("Signup first", error.message);
  }
};

const resetPassword = () => {
  sendPasswordResetEmail(auth, email)
    .then((res) => {
      console.log(email, "email")
      alert('password reset email has been sent successfully')
    })
    .catch((error) => {
      alert('Please enter a valid email', error);
    });
}

return (
  <div class="form-container">
      <form class="form" onSubmit={handleLogin}>
        <div class="form-group">
          <label for="email">Login</label>
          <input type="email" id="email" name="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)} />
	       	<input type="password" name="pswd" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        </div>


         <button type="submit"  class="form-submit-btn">
          Submit 
         </button>
         <a onClick={resetPassword}>Forgot password ?</a>
       <p>
         <Link to={`/signup`}>if you don't have account Signup first</Link>
       </p>
       </form>
    </div>
)
}

export default Signin

      