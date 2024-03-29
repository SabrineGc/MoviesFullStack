import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider } from "../Firebase/index";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import './Sign.css';

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
//   const form={
//     email: email,
//     name: name,
//     //     password: password
// }
  const signUpUser = async (event) => {
    event.preventDefault();
      try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
       email,
       password,
       name
      );
      
      const form = {
        email: email,
        name: name,
        password: password
      };
   await axios.post("http://localhost:3001/api/users/register", form)
   console.log("User created:", userCredential);
        alert("Welcome to our addiction space");
        navigate('/login');
      }
     
    catch (error) {
      alert("Error: " + error.message);
    }


    //   await axios.post(`http://localhost:3001/api/users/register`, form);

    //   console.log("User created:", userCredential);
    //   alert("Welcome to our addiction space");
    //   navigate('/');
    // } catch (error) {
    //   alert("Error: " + error.message);
    // }
  };

  const signUpWithGoogle = async () => {
    try {
      console.log("hello", auth, googleAuthProvider);
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      alert("Error", error.message);
      console.log(error);
    }
  }

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form className="container">
          <div>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="txt" placeholder="User name" onChange={(e) => setName(e.target.value)} />
            <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="pswd" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <div>
              <Link to={`/login`}>signin</Link>
            </div>
            <button type="submit" className="btn" onClick={signUpUser}>
              Submit
            </button>
          </div>
          <button className='google' onClick={signUpWithGoogle}>Sign Up with Google</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;