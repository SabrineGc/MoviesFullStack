import React, {useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField, MenuItem, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import "../App.css"

function AddMovie({openAdd}) {
    const [show,setShow]=React.useState(false);
    const [title,setTitle]=useState("")
    const [image,setImage]=useState("")
    const [description,setDescription]=useState("")
    const [genre,setGenre]=useState("")
    const [year,setYear]=useState("")
    const [director,setDirector]=useState("")
    const [language,setLanguage]=useState("")
    const [length,setLength]=useState("")
    const navigate = useNavigate();
console.log("hello");
    const handleShow=()=>{
        setShow(false)
    }

    const handleConfirm = () => {
        const movie = {
          title: title,
          image: image,
          description: description,
          genre: genre,
          year: year,
          director: director,
          language: language,
          length: length
        };
        console.log("u can post")
        axios.post("http://localhost:3001/api/movies/add",movie)
        .then((res)=>{
            alert("Thank you for adding a movie");
            navigate('/home')
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <Dialog
        open={openAdd}
        onClose={handleShow}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">{"Add Movie"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                label="Title"
                size="small"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="imageUrl"
                label="Image URL"
                size="small"
                value={image}
                onChange={(e)=>setImage(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                label="description"
                size="small"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                fullWidth
               />
            </Grid>
            <Grid item xs={12}>
            <TextField
              required
              id="language"
              label="language"
              size="small"
              value={language}
              onChange={(e)=>setLanguage(e.target.value)}
              fullWidth
            />
          </Grid>
             <Grid item xs={12}>
             <TextField
               required
               id="director"
               label="director"
               size="small"
               value={director}
               onChange={(e)=>setDirector(e.target.value)}
               fullWidth
             />
             </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="price"
                label="Price"
                type="number"
                size="small"
                value={length}
                onChange={(e)=>setLength(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="year"
                label="year"
                type="year"
                size="small"
                value={year}
                onChange={(e)=>setYear(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  value={genre}
                  onChange={(e)=>setGenre(e.target.value)}
                >
                  <MenuItem value={"Horror"}>Horror</MenuItem>
                  <MenuItem value={"Romantic"}>Romantic</MenuItem>
                  <MenuItem value={"Comedy"}>Comedy</MenuItem>
                  <MenuItem value={"Drama"}>Drama</MenuItem>
                  <MenuItem value={"Action"}>Action</MenuItem>
                  <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleShow} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleConfirm} autoFocus variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
}

export default AddMovie;


