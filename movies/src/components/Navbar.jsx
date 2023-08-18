import React, {useState} from 'react'
import axios from 'axios'
import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import "../App.css"
function Navbar({changeView, setData}) {
  // const [title,setTitle]=useState("")
  // const [term,setTerm]=useState("")
  const navigate=useNavigate()
  // const search=(title)=>{
  //   axios.get(`http://localhost:3001/api/movies/${title}`)
  //   .then((res)=>{
  //     setData(res.data)
  //   })
  //   .catch((err)=>{console.log(err)})
  // }



  // const handleSearch=()=>{
  //  search(title)
  // }
  return (
<>

       <AppBar position="static" sx={{ backgroundColor: "black" }}>
         <Toolbar>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Movies Addiction
           </Typography>
           <Button color="inherit" component={Link} to="/">
             Home
           </Button>

           <Button color="inherit" component={Link} to="/login">
             se Connecter
          </Button>
           <Button color="inherit" component={Link} to="/add">
             Add
           </Button>
           <Button color="inherit" component={Link} to="/Cart">
             Favorites
           </Button>
         </Toolbar>
       </AppBar>

       <div sx={{ marginTop: 2, maxWidth: false }}>
         <Outlet />
       </div>
</> 
 )
}

export default Navbar

